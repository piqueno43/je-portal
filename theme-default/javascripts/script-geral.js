// Código para evitar erros em navegadores que não possuem um console.
(function() {
	var method;
	var noop = function() {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

$(document).ready(function() {
	//link do botão compartilhar
	var URLcompartilhar = window.location.href;
	var pegarTituloPagina = $("title").text();
	$("#compartilhar_whatsapp").html('<a alt="Compartilhar para contatos do whatsapp" href="whatsapp://send?text=' + pegarTituloPagina + ' ' + URLcompartilhar + '"  data-lang="pt" data-count="none"> &nbsp; </a>');

	//Abas servicos//
	//Abrir abas dos serviços
	$("ul.abas-servicos li").click(function(){
		
		var posicao = $(this).index();
		$(this).toggleClass('marcador-box-servicos');
		$("ul.abas-servicos li").not(":eq("+ posicao +")").removeClass('marcador-box-servicos');
		
		$(".todos-box-servicos div").each(function(){
			var posicao_box = $(this).index();
			if (posicao == posicao_box){
				$(this).toggle();
				$(".todos-box-servicos div").not(":eq("+ posicao +")").hide();
			};
		});
	});
	//Mobile

	//Acesso rápido mobile//
	$("#links-topo").append("<div id='select-acesso-rapido'></div>");
	var pegar_html_links_topo = $("#links-topo").html();
	if (pegar_html_links_topo){
		var pegar_trocar_html_ar = pegar_html_links_topo
		.replace(/\>\</gmi, ">\n<")
		.replace(/\<(|\/)div(|.+)\>/gmi, "")
		.replace(/\<(|\/)p(|.+)\>/gmi, "")
		.replace(/\<(|\/)span(|.+)\>/gmi, "")
		.replace(/\<(|\/)img(|.+)\>/gmi, "")
		.replace(/\|/gmi, "")
		.replace(/(| )(tabindex|accesskey|title|target)\=\"(|[A-z0-9ç_ ]+)\"/gmi, "")
		.replace(/href\=\"/gmi, 'value="')
		.replace(/\<a/gmi, "<option")
		.replace(/\/a\>/gmi, "/option>");
		$("#select-acesso-rapido").append("<select id='select-ar'><option>Acesso rápido</option>"+ pegar_trocar_html_ar +"</select>");
	};
	$("#select-acesso-rapido select").on('change', function() {
		var url = $(this).val();
		var url_portal = window.location.href;
		
		var comprovar_ancora = (url.match(/^\#.+/gmi)||[]).length;
		var comprovar_url = (url.match(/[\S]+\.+[\S]+/gmi)||[]).length;
		
		if (comprovar_ancora == "1"){
            window.location.href = url_portal+url;
        }
		if (comprovar_url == "1"){
            window.location.href = url;
        } 
	});
	//Acesso rápido mobile\//

	$("#todos-servicos").prepend("<div id='caixa-servicos-mobile'></div>");
		var pegar_html_todos_servicos = $("#todos-servicos ul.abas-servicos").html();
	if (pegar_html_todos_servicos){
		var pegar_trocar_html = pegar_html_todos_servicos.replace(/\>\</gmi, ">\n<").replace(/li(.+"|)+\>/gmi, "option>");
		$("#caixa-servicos-mobile").append('<h2>Menu inferior</h2><select><option>Selecione</option>'+ pegar_trocar_html +'</select>');
	};
	$("#caixa-servicos-mobile").on("change", "select", function() {
		var posicao_box = $(this).prop('selectedIndex') - 1;
		if (posicao_box != "-1") {
			$(".todos-box-servicos div").hide();
			$(".todos-box-servicos div").eq(posicao_box).show();
		}if (posicao_box == "-1") {
			$(".todos-box-servicos div").hide();
		};
	});

	//Abas servicos\//

	//Banners//
	$(window).on("load", function() {
  		//Colocar class nos banner de acordo com tamanho da imagem
		$("#banners li").each(function(){
			var pegar_tamanho_img = $(this).find('img').innerWidth();
			if (pegar_tamanho_img < 250){
				$(this).addClass("secao-banner-menores");
			}else if(pegar_tamanho_img > 250){
				$(this).addClass("secao-banner-maiores");
			}		
		});

		//Tirar padding-right dos elementos li dependendo da disposição dos mesmos
		
		$("#banners ul li").each(function(index, el) {
			var pg_qt_banners = $("#banners ul li").length;
			var pg_tm_b1 = $("#banners ul li").eq(0).innerWidth();
			var pg_tm_b2 = $("#banners ul li").eq(1).innerWidth();
			var pg_tm_b3 = $("#banners ul li").eq(2).innerWidth();
			var pg_tm_b4 = $("#banners ul li").eq(3).innerWidth();

			if (pg_tm_b1+pg_tm_b2 == "968"){
				$("#banners ul li").eq(1).addClass("pad-banner-dir");
			}
			else if (pg_tm_b1+pg_tm_b2+pg_tm_b3 == "940"){
				$("#banners ul li").eq(2).addClass("pad-banner-dir");
			}
			else if (pg_tm_b1+pg_tm_b2+pg_tm_b3+pg_tm_b4 == "912"){
				$("#banners ul li").eq(3).addClass("pad-banner-dir");
			}

			if(pg_qt_banners < 5){
				$("#banners ul li").eq(3).addClass("pad-banner-dir");
			}
			if(pg_qt_banners < 7){
				$("#banners ul li").eq(5).addClass("pad-banner-dir");
			}
			if(pg_qt_banners > 6){
				$("#banners ul li").eq(7).addClass("pad-banner-dir");
			}
		});
	});
	
	//Banners\//

	//Definir tamanho das colunas (.span) do box #box-consultas-pesquisas dependendo do número de colunas
	var box_consulta_quant_cols = $("#box-consultas-pesquisas").find("section").length;
	$("#box-consultas-pesquisas section").each(function() {
		if (box_consulta_quant_cols == "3"){
			$("#AcompanhamentoProcessual").addClass("span-14 prepend-1 append-1 last");
			$("#jurisprudencia, #pesquisa-legislacao-compilada").addClass("span-6 prepend-1 append-1 last");
		};
		if (box_consulta_quant_cols == "2"){
			$("#box-consultas-pesquisas").addClass("duas-cols-consultas");
			$("#AcompanhamentoProcessual").addClass("span-19 prepend-1 append-1 last");
			$("#jurisprudencia, #pesquisa-legislacao-compilada").addClass("span-9 prepend-1 append-1 last");
		};
	});


	//Opção de voltar ao topo
	$(".voltar-topo").click(function(){
		$("html, body").animate({scrollTop:0}, 'slow');
		return false;
	});

	//Colocar todos os frames com largura 100%
	$("#conteudo_janela iframe").attr("width", "100%");

	//Esconde o box para novas categorias
	$(".newTagsSection").hide();

	//Contraste
	    $(function($) { 
        $('.contrastre-portal').click(function(e) {
                if ($.cookie('contraste') === null) {
                    $.cookie('contraste', 'on'); 
                    $('body').addClass('contraste'); 
                    e.preventDefault(); 
                    return false 
                } else { 
                    if ($.cookie('contraste') == 'on') { 
                        $.cookie('contraste', 'off'); 
                        $('body').removeClass('contraste'); 
                        e.preventDefault(); 
                        return false 
                    } else { 
                        $.cookie('contraste', 'on'); 
                        $('body').addClass('contraste'); 
                        e.preventDefault(); 
                        return false 
                    } 
                } 
            }); 
        if ($.cookie('contraste') == 'on') { 
            $('body').addClass('contraste'); 
            return false 
        } 
    });

	//Menu Superior//

	var tira_bug_browsers = 0;

	$("#menuPrincipal").click(function() {
		$("#caixa-menu-sup-mobile").toggle("slide");
	});

	$("ul#menuSuperior li a.menusuperior").click(function() {
		if ($(this).attr("class") != "voltar-menuPrincipal") {
			if (tira_bug_browsers == $(this).text()) {
				$(this).next("div.menu").toggle("slide");
			} else {
				$("ul#menuSuperior li .menu").hide("slide");
				$(this).next("div.menu").show("slide");
			}
			tira_bug_browsers = $(this).text()
		}
	});
	$(document).on("click", ".voltar-menuPrincipal", function() {
		$(this).closest(".menu").hide("slide");
	});
	//Fechar menu quando clicar fora dele
	$(document).click(function() {
		var a = arguments[0] || window.event;
		var b = a.target || a.srcElement;
		var c = a.target.nodeName;
		var d = a.target.getAttribute("class");
		var w = $(window).width();

		if (b != "javascript:;" && c != "SPAN") {
			$("ul#menuSuperior > li > a").removeClass('ativar-menu-li-maior');
			$("ul#menuSuperior li .menu").hide("slide");
			if ($("#menuPrincipal").is(":visible")) {
				$("ul#menuSuperior").hide("slide");
			}
		}
		/*if (w < 770 && d != "abrir-links-topo"){
			$("#links-topo div a").hide();			
		}*/
		if (w < 770 && d !="abrir-midias-mobile"){
			$(".midias-sociais").hide();
		}
	});

	//Menu superior mobile
	$("#menuSuperiorNavAcess").append("<div id='caixa-menu-sup-mobile'></div>");
	var pegar_html_menu_sup = $("#menuSuperior").html()
	.replace(/\>\</gmi, ">\n<")
	.replace(/\<span\>\|\<\/span\>/gmi, "")//retirar todas <span>|</span>
	.replace(/\<(|\/)div(|.+)\>/gmi, "")//retirar todas divs
	.replace(/\<span\>/gmi, "<option class='subtitulo'>")//substituir span por label
	.replace(/\<\/span\>/gmi, "</option>")//substituir span por label
	.replace(/imprensa(| )<\/.+\>/gmi, "imprensa</a></div>")
	.replace(/\<li[^class]+\<.+href/gmi, "<option value")
	.replace(/\<\/a\>(| )\<\/li\>/gmi, "</option>")
	.replace(/\<ul/gmi, "<select")
	.replace(/\<\/ul>/gmi, "</select>")
	.replace(/\<li/gmi, "<div")
	.replace(/\<\/li/gmi, "</div");
	$("#caixa-menu-sup-mobile").append(pegar_html_menu_sup);
	$("#caixa-menu-sup-mobile .menu_li").each(function() {
		var qt_select = $(this).children("select").length;
		if(qt_select > 0){
			$(this).children('a').append("<span> + </span>");
		}
	});
	$("#caixa-menu-sup-mobile").on('click', '.menusuperior', function(){
		$(this).nextAll("select").toggle();
		var pegar_indicador = $(this).children('a span').text();
		if(pegar_indicador == " + "){
			$(this).children('a span').text(" - ");
		}else{
			$(this).children('a span').text(" + ");
		}
	});
	$("#caixa-menu-sup-mobile select").on('change', function() {
		var url = $(this).val();
		var comprovar_url = url.match(/[\S]+\.+[\S]+/gmi).length;
		if (comprovar_url == "1"){
            window.location.href = url;
            return false;
        }
	});
	$("#caixa-menu-sup-mobile .menu_li select").each(function() {
		var procurar_option_titulo = $(this).children('option.subtitulo').length;
		var pegar_texto_ul = $(this).closest(".menu_li").children('a.menusuperior').html().replace(/\<span\>.+<\/span\>/gmi, "");
		if(procurar_option_titulo == "0"){
			$(this).prepend("<option selected>"+ pegar_texto_ul +"</option>")
		}
	});
	//Menu superior mobile\//
	//Menu Superior\//

	//Ativar e dasativar focus do LI
	$("ul#menuSuperior > li > a").click(function() {
		var proximo_item = $(this).next("div").attr("class");
		if(proximo_item){
			$("ul#menuSuperior > li > a").addClass('desativar-menu-li-maior');
			$(this).removeClass('desativar-menu-li-maior');
			$(".desativar-menu-li-maior").removeClass("ativar-menu-li-maior");
			$(this).toggleClass('ativar-menu-li-maior');
		}else{
			$("ul#menuSuperior > li > a").removeClass("ativar-menu-li-maior");
		}
	});

	//menu imprensa
	$("#menuImprensa").click(function() {
		var w = $(window).width();
		if (w <= 770) {
			$("#menu-lateral-imprensa").toggle();
			$("#select_menu_imp").toggleClass("maisImprensa");
			$("#select_menu_imp").toggleClass("menosImprensa");
		}

	});
	//menu imprensa

	//Definir quantidades de coluna e posição dos elementos de menu conforme o tanto de coluna
	$("ul#menuSuperior li .menu").each(function(){
		var w = $(window).width();
		var n = $(this).find("ul.submenu").length;
		if (n == "1") {
			$(this).addClass('uma-coluna-menu');
			$(this).find("ul").addClass('retirar-titulo-menu');
		}else if (n == "2") {
			$(this).addClass('duas-coluna-menu');
		}else if (n == "3") {
			$(this).addClass('tres-coluna-menu');
		}else if (n == "4") {
			$(this).addClass('quatro-coluna-menu');
		}

		var pegar_class_li = $(this).closest('.menu_li').attr("class");
		
		if (pegar_class_li == "menu_li menu-area-juridica" && w > 990) {
			if (n == "1" || n == "2"){
				$(this).css('left', '0');
			}else if(n == "3" || n == "4"){
				$(this).css('left', '-200px');
			}
		}else if(pegar_class_li == "menu_li menu-area-juridica" && w < 990 && w > 769){
			if (n == "1" || n == "2"){
				$(this).css('left', '0');
			}else if(n == "3" || n == "4"){
				$(this).css('left', '-130px');
			}
		};

		if (pegar_class_li == "menu_li menu-eleicoes" && w > 769) {
			if (n == "1" || n == "2"){
				$(this).css('left', '0');
			}else if(n == "3"){
				$(this).css('left', '-60px');
			}else if(n == "4"){
				$(this).css('left', '-240px');
			}
		};

		if (pegar_class_li == "menu_li menu-eleitor" && w > 990) {
			if (n == "1"){
				$(this).css('left', '0');
			}else if(n == "2"){
				$(this).css('left', '-60px');
			}else if(n == "3"){
				$(this).css('left', '-160px');
			}else if(n == "4"){
				$(this).css('left', '-340px');
			}
		};
		if (pegar_class_li == "menu_li menu-imprensa" && w > 990) {
			if (n == "1"){
				$(this).css('left', '0');
			}else if(n == "2" || n == "3" || n == "4"){
				$(this).css('right', '-223px');
			}
		};
		if (pegar_class_li == "menu_li menu-partidos" && w > 769) {
			if (n == "1"){
				$(this).css('left', '0');
			}else if(n == "2" || n == "3" || n == "4"){
				$(this).css('right', '-130px');
			}
		};
		if (pegar_class_li == "menu_li menu-transparencia" && w > 769) {
				$(this).css('right', '0');
		};
	});

	
	$("#MenuLateralEsquerdo .abrirMenuInterno").click(function() {
		var w = $(window).width();
		if (w <= 770) {
			$("#MenuLateralEsquerdo ul").hide();
			var eh_mais = $(this).hasClass("mais");
			$(".abrirMenuInterno").removeClass('menos').addClass('mais');
			if (eh_mais) {
				$("#MenuLateralEsquerdo .abrirMenuInterno2").removeClass('menos').addClass('mais');
				$(".abreMenuInterno2").css("display", "none");
				$(this).removeClass('mais').addClass('menos');
				$(this).next().show();
			} else {
				$(this).next().hide();
			}
		}
	});

	$("#MenuLateralEsquerdo .abrirMenuInterno2").click(function() {
		var w = $(window).width();
		if (w <= 770) {
			$(".abreMenuInterno2").hide();
			var eh_mais = $(this).hasClass("mais");
			$(".abrirMenuInterno2").removeClass('menos').addClass('mais');
			if (eh_mais) {
				$("#MenuLateralEsquerdo .abrirMenuInterno").removeClass('menos').addClass('mais');
				$(".abreMenuInterno").css("display", "none");
				$(this).next().show();
				$(this).removeClass('mais').addClass('menos');
			} else {
				$(this).next().hide();
			}
		}
	});

	//Midias sociais//
	$(document).on('click', '.abrir-midias-mobile', function(){
		$(".midias-sociais").toggle();
	});
	//Midias sociais\//

	//iFrame//
	/*$("iframe").attr('onload', 'setIframeHeight(this.id)');*/
	//iFrame\//

	//Abre e fecha boxs//
	$("#blocoVideos, #blocoRadio, #bancoImagens").addClass("box-fechado");
	$("#AcompanhamentoProcessual, #jurisprudencia, #pesquisa-legislacao-compilada, #MenuNoticias").append("<div class='abrir-fechar-box seta-box-aberto'></div>");
	$("#blocoVideos, #blocoRadio, #bancoImagens").append("<div class='abrir-fechar-box seta-box-fechado'></div>");

	$(document).on('click', '.abrir-fechar-box', function(){
		if($(this).hasClass("abrir-fechar-box seta-box-aberto")){
			$(this).removeClass().addClass('abrir-fechar-box seta-box-fechado');
		}
		else if($(this).hasClass("abrir-fechar-box seta-box-fechado")){
			$(this).removeClass().addClass('abrir-fechar-box seta-box-aberto');	
		}
		$(this).closest("section").toggleClass("box-fechado");
	});
	//Abre e fecha boxs\//

	//Abre e fecha links do topo//
	/*$(document).on('click', '.abrir-links-topo', function() {
		$("#links-topo div a").toggle();
	});*/
	//Abre e fecha links do topo\//

	//Abre e fecha menu Imprensa//
	$(document).on('click', '.abrir-menu-imprensa', function() {
		$("#menuImprensaSup ul").toggle();
	});
	//Abre e fecha menu Imprensa\//


	$("#campanha-je").each(function() {
		var procurar_div = $(this).find('.banner-menor').length;
		if (procurar_div == "0") {
			$(".banner-maior").removeClass('span-24').addClass('span-32');
		}
	});

	var w = $(window).width();
	if (w < 770){
		/*$("#links-topo").append("<div class='abrir-links-topo'><label for='select-ar'>Acesso rápido</label></div>");*/
		$("#bloco-topo-midias").prepend("<div class='abrir-midias-mobile'>mídias sociais</div>");
		$("#menuImprensaSup").prepend("<div class='abrir-menu-imprensa'>Menu imprensa</div>");
	}
	if (w > 769 && (!$('#MenuLateralEsquerdo')[0])) {
		$("#conteudoPrincipal").addClass("span-32");
	}
	if (w > 769 && w < 1000 && ($('#MenuLateralEsquerdo')[0])) {
		$("#conteudoPrincipal").addClass("span-23");
	}
	if (w > 999 && ($('#MenuLateralEsquerdo')[0])) {
		$("#conteudoPrincipal").addClass("span-24 last");
	}
	if (w < 769) {
		$("#conteudoPrincipal").addClass("span-32");

		var nome_h2_noticias = $("h2.abrirMenuInterno").text();
		if (nome_h2_noticias == "Notícias até 30/07/2012") {
			$("h2.abrirMenuInterno").text("até 30/07/2012");
		}
	}
});


$(document).ready(function() {

	// função para identificar informações dos dispositivos móveis (sistema, navegador, versão...) http://detectmobilebrowsers.com/
	(function(a) {
		(jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
	})(navigator.userAgent || navigator.vendor || window.opera);

	// verificar se navegador é Firefox
	var browser_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

/*	if(browser_firefox){
		$("#blocoRadio").css('margin-top', '28px');
	}*/

	// Condição para saber qual evento usar dependendo do navegador e dispositivo
	if (jQuery.browser.mobile && !browser_firefox) { // Se dispositivo for celular e o navegador não for Firefox
		var tipo_funcao = "orientationchange" // Usar o evento de orientation
		var tipo_width = "1"; // tipo para medir largura da tela é screen.width
	} else { // Para todos dispositivos e navegadores que não entram na condição acima (Principalmente para dispositivos Desktop e navegadores Firefox)
		var tipo_funcao = "resize"; // Usar o evento de resize
		var tipo_width = "2"; // tipo para medir largura da tela é $(window).width()
	}

	$(window).on(tipo_funcao, function() {

		if (tipo_width == "1") {
			var w = screen.width;
		} else {
			var w = $(window).width();
		}

		$("#bloco-topo-midias").each(function() {
			var procurar_div = $(this).find('.abrir-midias-mobile').length;
			if (w < 769 && procurar_div == "0") {
				$("#bloco-topo-midias").prepend("<div class='abrir-midias-mobile'></div>");
			}else if(w > 768 && procurar_div == "1"){
				$(".abrir-midias-mobile").remove();
			};
		});

/*		$("#links-topo").each(function() {
			var procurar_div = $(this).find('.abrir-links-topo').length;
			if (w < 769 && procurar_div == "0") {
				$("#links-topo").append("<div class='abrir-links-topo'></div>");
			}else if(w > 768 && procurar_div == "1"){
				$(".abrir-links-topo").remove();
				$("#links-topo a").show();
			};
		});*/

		$("#menuImprensaSup").each(function() {
			var procurar_div = $(this).find('.abrir-menu-imprensa').length;
			if (w < 769 && procurar_div == "0") {
				$("#menuImprensaSup").prepend("<div class='abrir-menu-imprensa'>Menu imprensa</div>");
			}else if(w > 768 && procurar_div == "1"){
				$(".abrir-menu-imprensa").remove();
				$("#menuImprensaSup ul").show();
			};
		});

		if (w > 769) {
			$("#caixa-menu-sup-mobile").hide();
			$("ul#menuSuperior li .menu ul.submenu span strong").remove();
			$("ul#menuSuperior li .menu ul.submenu li").show();
		}
		if (w > 769 && $("#menuSuperior").css("display", "none")) {
			$("#menuSuperior").css("display", "block");
		} else {
			$("#menuSuperior").css("display", "none");
		}

		if (w > 999) {
			jq('#subject_keywords').parent().hide();
			jq('#allowDiscussion').parent().hide();

			var classe = jq('#region-content').attr('class');
		}
		if (w > 769 && (!$('#MenuLateralEsquerdo')[0])) {
			$("#conteudoPrincipal").removeClass();
			$("#conteudoPrincipal").addClass("span-32");
		}
		if (w > 769 && w < 1000 && ($('#MenuLateralEsquerdo')[0])) {
			$("#conteudoPrincipal").removeClass().addClass("span-23");
		}
		if (w > 999 && ($('#MenuLateralEsquerdo')[0])) {
			$("#conteudoPrincipal").removeClass().addClass("span-24 last");
		}
		if (w < 769) {
			var nome_h2_noticias = $("h2.abrirMenuInterno").text();
			if (nome_h2_noticias == "Notícias até 30/07/2012") {
				$("h2.abrirMenuInterno").text("até 30/07/2012");
			}

		} else {
			var nome_h2_noticias = $("h2.abrirMenuInterno").text();
			if (nome_h2_noticias == "até 30/07/2012") {
				$("h2.abrirMenuInterno").text("Notícias até 30/07/2012");
			}
		}
		if (w < 769) {
			$("#conteudoPrincipal").removeClass();
			$("#conteudoPrincipal").addClass("span-32");
			$("table").addClass("footable");
		} else {
			$("table").removeClass("footable");
			$("table").removeClass("footable-loaded");
			$("table").removeClass("phone");
			$("table").removeClass("breakpoint");
		}
	});
});



$(document).ready(function() {

	//Colocar tabela zebrada
	$("table.listing tbody tr:even").css("background", "#F3F3F3");
	$("table.listing tbody tr:odd").css("background", "#FFF");
	$("table.listing tbody th").css("background", "#DEE7EC");

	$(".maisInformacoesBotao").click(function() {
		$("#box-mais-informacoes").toggle("slow");
	});

	//Âncora
	$(".menu_ancora").first().css("font-weight", "bold");
	$(".menu_ancora").click(function() {
		$(".menu_ancora").css("font-weight", "normal");
		$(this).css("font-weight", "bold");

		$("div.texto_ancora").css("display", "none");
		var classe = $(this).attr("id").replace(/ancora\-/g, "");
		$("div#ancora-text-" + classe).css("display", "block");
		$(".menu_ancora").attr("href", "javascript:;");
		$(this).removeAttr("href");
	});

	//Colocar tags na tabela para ser responsiva
	var w = $(window).width();
	if (w < 769) {
		$("table").addClass("footable");
		$("tr").unwrap();
		$("th:nth-of-type(n3)").attr("data-hide", "phone,tablet");
		$("tr:nth-of-type(n2)").wrapAll("<tbody></tbody>");
		$("tr").first().wrapAll("<thead></thead>");
		$("td:nth-of-type(1)").addClass("expand");
	}

	//Colocar class .tem-galeria na id #conteudo caso a página possua galeria
	if ($('#MenuLateralEsquerdo')[0] && $('#menudireitoInterno')[0]) {
		$("#conteudo").addClass("largura-com-galeria");
	}
	if ($('#MenuLateralEsquerdo')[0] && !$('#menudireitoInterno')[0]) {
		$("#conteudo").addClass("largura-sem-galeria");
	}
	if (!$('#MenuLateralEsquerdo')[0] && !$('#menudireitoInterno')[0]) {
		$("#conteudo").addClass("largura-normal");
	}

});

$(function() {
	var enviou_email = 0;
	var regex_email = new RegExp("^.*@[a-z0-9\-]*\.[a-z0-9\-][a-z0-9\-][a-z0-9\-]?(\.[a-z0-9\-][a-z0-9\-])?$");
	$("#c_id_email").click(function() {
		if (enviou_email) return false;
		$("#c_email").toggle();

	});
	$("#c_enviar").click(function() {
		var email_rem = $('#c_remetente').val();
		var email_dest = $('#c_destinatario').val();
		if (email_rem == '') {
			$('#c_remetente').addClass('hightlight');


			return false;
		} else {
			if (!regex_email.test(email_rem)) // email inválido
			{
				$('#c_remetente').addClass('hightlight');
				return false;
			} else {
				$('#c_remetente').removeClass('hightlight');
			}
		}
		if (email_dest == '') {
			$('#c_destinatario').addClass('hightlight');
			return false;
		} else {
			if (!regex_email.test(email_dest)) // email inválido
			{
				$('#c_destinatario').addClass('hightlight');
				return false;
			}
		}
		$("#c_link_recomendado").attr("value", $(location).attr("href"));
		$.post($('#c_form_email').attr('sis'), $("#c_form_email").serialize());
		$("#c_id_email").empty();
		$("#c_id_email").css("background", "none");
		$("#c_id_email").html("E-mail enviado");
		$("#c_id_email").addClass("email_enviado");
		enviou_email = 1;

		$("#c_email").hide();
	});
	$(".retiraValueCompart").click(function() {
		retiraValueAcessi(this);
	});
	// para apagar os campos de input após o focus (tab)
	$(".retiraValueCompart").focus(function() {
		retiraValueAcessi(this);
	});
});



function retiraValueAcessi(e) {
	jq(e).val("")
}

function seleciona_busca() {
	jq("#box_busca div.styleCheckbox").show();
	jq("#busca").css("background", "#FFF");
	jq("#busca").css("background", "#FFF");
	jq("#busca").val("")
}

function busca_blur() {
	if (jq("#busca").val() == "") {
		jq("#busca").val("Pesquisar...");
		jq("#box_busca div.styleCheckbox").hide()
	}
}

jq(function() {
	jq(".retiraValue").click(function() {
		retiraValueAcessi(this)
	});
	jq(".retiraValue").focus(function() {
		retiraValueAcessi(this)
	})
});
jq(function() {
	jq("#busca").click(function() {
		seleciona_busca()
	});
	jq("#busca").focus(function() {
		seleciona_busca()
	});
	jq("#busca").blur(function() {
		busca_blur()
	})
});

//código de redimensionamento da altura do iframe de acordo com o tamanho do conteúdo interno
/*function getDocHeight(doc) {
    doc = doc || document;
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}

function setIframeHeight(id) {
    var ifrm = document.getElementById(id);
    var doc = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document;
    ifrm.style.visibility = 'hidden';
    ifrm.style.height = "870px"; // reset to minimal height in case going from longer to shorter doc
    ifrm.style.height = getDocHeight( doc ) + 5+"px";
    ifrm.style.visibility = 'visible';
}*/
//código de redimensionamento da altura do iframe de acordo com o tamanho do conteúdo interno\//

//Alinhar imagens na vertical no ie 8 e 7
$(document).ready(function() {
	if ($.browser.msie == true && $.browser.version < 9.0) {
		var destaques = [];
		$.each($(".alinha-imagem-vertical").map(function() {
			return this.id;
		}).get(), function() {
			destaques.push(this);
		});
		$.each(destaques, function() {
			$("#" + this + " img").css("padding-top", ($("#" + this).height() - $("#" + this + " img").height()) / 2);
		});
	}
});