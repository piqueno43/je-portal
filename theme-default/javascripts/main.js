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

jq(document).ready(function() {
    //link do botão compartilhar
    var URLcompartilhar = window.location.href;
    var pegarTituloPagina = jq("title").text();
    jq("#compartilhar_whatsapp").html('<a alt="Compartilhar para contatos do whatsapp" href="whatsapp://send?text=' + pegarTituloPagina + ' ' + URLcompartilhar + '"  data-lang="pt" data-count="none"> &nbsp; </a>');

    //Abas servicos//
    //Abrir abas dos serviços
    jq("ul.abas-servicos li").click(function(){

        var posicao = jq(this).index();
        jq(this).toggleClass('marcador-box-servicos');
        jq("ul.abas-servicos li").not(":eq("+ posicao +")").removeClass('marcador-box-servicos');

        jq(".todos-box-servicos div").each(function(){
            var posicao_box = jq(this).index();
            if (posicao == posicao_box){
                jq(this).toggle();
                jq(".todos-box-servicos div").not(":eq("+ posicao +")").hide();
            };
        });
    });
    //Mobile

    //Acesso rápido mobile//
    jq("#links-topo").append("<div id='select-acesso-rapido'></div>");
    var pegar_html_links_topo = jq("#links-topo").html();
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
        jq("#select-acesso-rapido").append("<select id='select-ar'><option>Acesso rápido</option>"+ pegar_trocar_html_ar +"</select>");
    };
    jq("#select-acesso-rapido select").on('change', function() {
        var url = jq(this).val();
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


    //Contraste//
    jq('#select-acesso-rapido select').on('change', function() {
        var contraste_select = jq(this+"option:selected").attr('class');
        if(contraste_select == "contrastre-portal"){
                jq('#select-ar option').prop('selected', function() {
                    return this.defaultSelected;
                });
            ativar_contraste();
        }
    });
    jq('.links-acessibilidade .contrastre-portal').on('click', function() {
        ativar_contraste();
    });

    jq("#todos-servicos").prepend("<div id='caixa-servicos-mobile'></div>");
        var pegar_html_todos_servicos = jq("#todos-servicos ul.abas-servicos").html();
    if (pegar_html_todos_servicos){
        var pegar_trocar_html = pegar_html_todos_servicos.replace(/\>\</gmi, ">\n<").replace(/li(.+"|)+\>/gmi, "option>");
        jq("#caixa-servicos-mobile").append('<h2>Menu inferior</h2><select><option>Selecione</option>'+ pegar_trocar_html +'</select>');
    };
    jq("#caixa-servicos-mobile").on("change", "select", function() {
        var posicao_box = jq(this).prop('selectedIndex') - 1;
        if (posicao_box != "-1") {
            jq(".todos-box-servicos div").hide();
            jq(".todos-box-servicos div").eq(posicao_box).show();
        }if (posicao_box == "-1") {
            jq(".todos-box-servicos div").hide();
        };
    });

    //Abas servicos\//

    //Banners//
    jq(window).on("load", function() {
        //Colocar class nos banner de acordo com tamanho da imagem
        jq("#banners li").each(function(){
            var pegar_tamanho_img = jq(this).find('img').innerWidth();
            if (pegar_tamanho_img < 250){
                jq(this).addClass("secao-banner-menores");
            }else if(pegar_tamanho_img > 250){
                jq(this).addClass("secao-banner-maiores");
            }
        });

        //Tirar padding-right dos elementos li dependendo da disposição dos mesmos

        jq("#banners ul li").each(function(index, el) {
            var pg_qt_banners = jq("#banners ul li").length;
            var pg_tm_b1 = jq("#banners ul li").eq(0).innerWidth();
            var pg_tm_b2 = jq("#banners ul li").eq(1).innerWidth();
            var pg_tm_b3 = jq("#banners ul li").eq(2).innerWidth();
            var pg_tm_b4 = jq("#banners ul li").eq(3).innerWidth();

            if (pg_tm_b1+pg_tm_b2 == "968"){
                jq("#banners ul li").eq(1).addClass("pad-banner-dir");
            }
            else if (pg_tm_b1+pg_tm_b2+pg_tm_b3 == "940"){
                jq("#banners ul li").eq(2).addClass("pad-banner-dir");
            }
            else if (pg_tm_b1+pg_tm_b2+pg_tm_b3+pg_tm_b4 == "912"){
                jq("#banners ul li").eq(3).addClass("pad-banner-dir");
            }

            if(pg_qt_banners < 5){
                jq("#banners ul li").eq(3).addClass("pad-banner-dir");
            }
            if(pg_qt_banners < 7){
                jq("#banners ul li").eq(5).addClass("pad-banner-dir");
            }
            if(pg_qt_banners > 6){
                jq("#banners ul li").eq(7).addClass("pad-banner-dir");
            }
        });
    });

    //Banners\//

    //Definir tamanho das colunas (.span) do box #box-consultas-pesquisas dependendo do número de colunas
    var box_consulta_quant_cols = jq("#box-consultas-pesquisas").find("section").length;
    jq("#box-consultas-pesquisas section").each(function() {
        if (box_consulta_quant_cols == "3"){
            jq("#AcompanhamentoProcessual").addClass("span-14 prepend-1 append-1 last");
            jq("#jurisprudencia, #pesquisa-legislacao-compilada").addClass("span-6 prepend-1 append-1 last");
        };
        if (box_consulta_quant_cols == "2"){
            jq("#box-consultas-pesquisas").addClass("duas-cols-consultas");
            jq("#AcompanhamentoProcessual").addClass("span-19 prepend-1 append-1 last");
            jq("#jurisprudencia, #pesquisa-legislacao-compilada").addClass("span-9 prepend-1 append-1 last");
        };
    });


    //Opção de voltar ao topo
    jq(".voltar-topo").click(function(){
        jq("html, body").animate({scrollTop:0}, 'slow');
        return false;
    });

    //Colocar todos os frames com largura 100%
    jq("#conteudo_janela iframe").attr("width", "100%");

    //Esconde o box para novas categorias
    jq(".newTagsSection").hide();

    //Menu Superior//

    var tira_bug_browsers = 0;

    jq("#menuPrincipal").click(function() {
        jq("#caixa-menu-sup-mobile").toggle("slide");
    });

    jq("ul#menuSuperior li a.menusuperior").click(function() {
        if (jq(this).attr("class") != "voltar-menuPrincipal") {
            if (tira_bug_browsers == jq(this).text()) {
                jq(this).next("div.menu").toggle("slide");
            } else {
                jq("ul#menuSuperior li .menu").hide("slide");
                jq(this).next("div.menu").show("slide");
            }
            tira_bug_browsers = jq(this).text()
        }
    });
    jq(document).on("click", ".voltar-menuPrincipal", function() {
        jq(this).closest(".menu").hide("slide");
    });
    //Fechar menu quando clicar fora dele
    jq(document).click(function() {
        var a = arguments[0] || window.event;
        var b = a.target || a.srcElement;
        var c = a.target.nodeName;
        var d = a.target.getAttribute("class");
        var w = jq(window).width();

        if (b != "javascript:;" && c != "SPAN") {
            jq("ul#menuSuperior > li > a").removeClass('ativar-menu-li-maior');
            jq("ul#menuSuperior li .menu").hide("slide");
            if (jq("#menuPrincipal").is(":visible")) {
                jq("ul#menuSuperior").hide("slide");
            }
        }
        if (w < 770 && d !="abrir-midias-mobile"){
            jq(".midias-sociais").hide();
        }
    });

    //Menu superior mobile
    jq("#menuSuperiorNavAcess").append("<div id='caixa-menu-sup-mobile'></div>");
    var pegar_html_menu_sup = jq("#menuSuperior").html()
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
    jq("#caixa-menu-sup-mobile").append(pegar_html_menu_sup);
    jq("#caixa-menu-sup-mobile .menu_li").each(function() {
        var qt_select = jq(this).children("select").length;
        if(qt_select > 0){
            jq(this).children('a').append("<span> + </span>");
        }
    });
    jq("#caixa-menu-sup-mobile").on('click', '.menusuperior', function(){
        jq(this).nextAll("select").toggle();
        var pegar_indicador = jq(this).children('a span').text();
        if(pegar_indicador == " + "){
            jq(this).children('a span').text(" - ");
        }else{
            jq(this).children('a span').text(" + ");
        }
    });
    jq("#caixa-menu-sup-mobile select").on('change', function() {
        var url = jq(this).val();
        var comprovar_url = url.match(/[\S]+\.+[\S]+/gmi).length;
        if (comprovar_url == "1"){
            window.location.href = url;
            return false;
        }
    });
    jq("#caixa-menu-sup-mobile .menu_li select").each(function() {
        var procurar_option_titulo = jq(this).children('option.subtitulo').length;
        var pegar_texto_ul = jq(this).closest(".menu_li").children('a.menusuperior').html().replace(/\<span\>.+<\/span\>/gmi, "");
        if(procurar_option_titulo == "0"){
            jq(this).prepend("<option selected>"+ pegar_texto_ul +"</option>")
        }
    });
    //Menu superior mobile\//

    //Menu Superior\//

    //Ativar e dasativar focus do LI
    jq("ul#menuSuperior > li > a").click(function() {
        var proximo_item = jq(this).next("div").attr("class");
        if(proximo_item){
            jq("ul#menuSuperior > li > a").addClass('desativar-menu-li-maior');
            jq(this).removeClass('desativar-menu-li-maior');
            jq(".desativar-menu-li-maior").removeClass("ativar-menu-li-maior");
            jq(this).toggleClass('ativar-menu-li-maior');
        }else{
            jq("ul#menuSuperior > li > a").removeClass("ativar-menu-li-maior");
        }
    });

    //menu imprensa
    jq("#menuImprensa").click(function() {
        var w = jq(window).width();
        if (w <= 770) {
            jq("#menu-lateral-imprensa").toggle();
            jq("#select_menu_imp").toggleClass("maisImprensa");
            jq("#select_menu_imp").toggleClass("menosImprensa");
        }

    });
    //menu imprensa

    //Definir quantidades de coluna e posição dos elementos de menu conforme o tanto de coluna
    jq("ul#menuSuperior li .menu").each(function(){
        var w = jq(window).width();
        var n = jq(this).find("ul.submenu").length;
        if (n == "1") {
            jq(this).addClass('uma-coluna-menu');
            jq(this).find("ul").addClass('retirar-titulo-menu');
        }else if (n == "2") {
            jq(this).addClass('duas-coluna-menu');
        }else if (n == "3") {
            jq(this).addClass('tres-coluna-menu');
        }else if (n == "4") {
            jq(this).addClass('quatro-coluna-menu');
        }

        var pegar_class_li = jq(this).closest('.menu_li').attr("class");

        if (pegar_class_li == "menu_li menu-area-juridica" && w > 990) {
            if (n == "1" || n == "2"){
                jq(this).css('left', '0');
            }else if(n == "3" || n == "4"){
                jq(this).css('left', '-200px');
            }
        }else if(pegar_class_li == "menu_li menu-area-juridica" && w < 990 && w > 769){
            if (n == "1" || n == "2"){
                jq(this).css('left', '0');
            }else if(n == "3" || n == "4"){
                jq(this).css('left', '-130px');
            }
        };

        if (pegar_class_li == "menu_li menu-eleicoes" && w > 769) {
            if (n == "1" || n == "2"){
                jq(this).css('left', '0');
            }else if(n == "3"){
                jq(this).css('left', '-60px');
            }else if(n == "4"){
                jq(this).css('left', '-240px');
            }
        };

        if (pegar_class_li == "menu_li menu-eleitor" && w > 990) {
            if (n == "1"){
                jq(this).css('left', '0');
            }else if(n == "2"){
                jq(this).css('left', '-60px');
            }else if(n == "3"){
                jq(this).css('left', '-160px');
            }else if(n == "4"){
                jq(this).css('left', '-340px');
            }
        };
        if (pegar_class_li == "menu_li menu-imprensa" && w > 990) {
            if (n == "1"){
                jq(this).css('left', '0');
            }else if(n == "2" || n == "3" || n == "4"){
                jq(this).css('right', '-223px');
            }
        };
        if (pegar_class_li == "menu_li menu-partidos" && w > 769) {
            if (n == "1"){
                jq(this).css('left', '0');
            }else if(n == "2" || n == "3" || n == "4"){
                jq(this).css('right', '-130px');
            }
        };
        if (pegar_class_li == "menu_li menu-transparencia" && w > 769) {
                jq(this).css('right', '0');
        };
    });


    jq("#MenuLateralEsquerdo .abrirMenuInterno").click(function() {
        var w = jq(window).width();
        if (w <= 770) {
            jq("#MenuLateralEsquerdo ul").hide();
            var eh_mais = jq(this).hasClass("mais");
            jq(".abrirMenuInterno").removeClass('menos').addClass('mais');
            if (eh_mais) {
                jq("#MenuLateralEsquerdo .abrirMenuInterno2").removeClass('menos').addClass('mais');
                jq(".abreMenuInterno2").css("display", "none");
                jq(this).removeClass('mais').addClass('menos');
                jq(this).next().show();
            } else {
                jq(this).next().hide();
            }
        }
    });

    jq("#MenuLateralEsquerdo .abrirMenuInterno2").click(function() {
        var w = jq(window).width();
        if (w <= 770) {
            jq(".abreMenuInterno2").hide();
            var eh_mais = jq(this).hasClass("mais");
            jq(".abrirMenuInterno2").removeClass('menos').addClass('mais');
            if (eh_mais) {
                jq("#MenuLateralEsquerdo .abrirMenuInterno").removeClass('menos').addClass('mais');
                jq(".abreMenuInterno").css("display", "none");
                jq(this).next().show();
                jq(this).removeClass('mais').addClass('menos');
            } else {
                jq(this).next().hide();
            }
        }
    });

    //Midias sociais//
    jq(document).on('click', '.abrir-midias-mobile', function(){
        jq(".midias-sociais").toggle();
    });
    //Midias sociais\//

    //Abre e fecha boxs//
    jq("#blocoVideos, #blocoRadio, #bancoImagens").addClass("box-fechado");
    jq("#AcompanhamentoProcessual, #jurisprudencia, #pesquisa-legislacao-compilada, #MenuNoticias").append("<div class='abrir-fechar-box seta-box-aberto'></div>");
    jq("#blocoVideos, #blocoRadio, #bancoImagens").append("<div class='abrir-fechar-box seta-box-fechado'></div>");

    jq(document).on('click', '.abrir-fechar-box', function(){
        if(jq(this).hasClass("abrir-fechar-box seta-box-aberto")){
            jq(this).removeClass().addClass('abrir-fechar-box seta-box-fechado');
        }
        else if(jq(this).hasClass("abrir-fechar-box seta-box-fechado")){
            jq(this).removeClass().addClass('abrir-fechar-box seta-box-aberto');
        }
        jq(this).closest("section").toggleClass("box-fechado");
    });
    //Abre e fecha boxs\//


    //Abre e fecha menu Imprensa//
    jq(document).on('click', '.abrir-menu-imprensa', function() {
        jq("#menuImprensaSup ul").toggle();
    });
    //Abre e fecha menu Imprensa\//


    jq("#campanha-je").each(function() {
        var procurar_div = jq(this).find('.banner-menor').length;
        if (procurar_div == "0") {
            jq(".banner-maior").removeClass('span-24').addClass('span-32');
        }
    });

    var w = jq(window).width();
    if (w < 770){
        /*jq("#links-topo").append("<div class='abrir-links-topo'><label for='select-ar'>Acesso rápido</label></div>");*/
        jq("#bloco-topo-midias").prepend("<div class='abrir-midias-mobile'>mídias sociais</div>");
        jq("#menuImprensaSup").prepend("<div class='abrir-menu-imprensa'>Menu imprensa</div>");
    }
    if (w > 769 && (!jq('#MenuLateralEsquerdo')[0])) {
        jq("#conteudoPrincipal").addClass("span-32");
    }
    if (w > 769 && w < 1000 && (jq('#MenuLateralEsquerdo')[0])) {
        jq("#conteudoPrincipal").addClass("span-23");
    }
    if (w > 999 && (jq('#MenuLateralEsquerdo')[0])) {
        jq("#conteudoPrincipal").addClass("span-24 last");
    }
    if (w < 769) {
        jq("#conteudoPrincipal").addClass("span-32");

        var nome_h2_noticias = jq("h2.abrirMenuInterno").text();
        if (nome_h2_noticias == "Notícias até 30/07/2012") {
            jq("h2.abrirMenuInterno").text("até 30/07/2012");
        }
    }
});


jq(document).ready(function() {

    // função para identificar informações dos dispositivos móveis (sistema, navegador, versão...) http://detectmobilebrowsers.com/
    (function(a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);

    // verificar se navegador é Firefox
    var browser_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

/*  if(browser_firefox){
        jq("#blocoRadio").css('margin-top', '28px');
    }*/

    // Condição para saber qual evento usar dependendo do navegador e dispositivo
    if (jQuery.browser.mobile && !browser_firefox) { // Se dispositivo for celular e o navegador não for Firefox
        var tipo_funcao = "orientationchange" // Usar o evento de orientation
        var tipo_width = "1"; // tipo para medir largura da tela é screen.width
    } else { // Para todos dispositivos e navegadores que não entram na condição acima (Principalmente para dispositivos Desktop e navegadores Firefox)
        var tipo_funcao = "resize"; // Usar o evento de resize
        var tipo_width = "2"; // tipo para medir largura da tela é jq(window).width()
    }

    jq(window).on(tipo_funcao, function() {

        if (tipo_width == "1") {
            var w = screen.width;
        } else {
            var w = jq(window).width();
        }

        jq("#bloco-topo-midias").each(function() {
            var procurar_div = jq(this).find('.abrir-midias-mobile').length;
            if (w < 769 && procurar_div == "0") {
                jq("#bloco-topo-midias").prepend("<div class='abrir-midias-mobile'></div>");
            }else if(w > 768 && procurar_div == "1"){
                jq(".abrir-midias-mobile").remove();
            };
        });

        jq("#menuImprensaSup").each(function() {
            var procurar_div = jq(this).find('.abrir-menu-imprensa').length;
            if (w < 769 && procurar_div == "0") {
                jq("#menuImprensaSup").prepend("<div class='abrir-menu-imprensa'>Menu imprensa</div>");
            }else if(w > 768 && procurar_div == "1"){
                jq(".abrir-menu-imprensa").remove();
                jq("#menuImprensaSup ul").show();
            };
        });

        if (w > 769) {
            jq("#caixa-menu-sup-mobile").hide();
            jq("ul#menuSuperior li .menu ul.submenu span strong").remove();
            jq("ul#menuSuperior li .menu ul.submenu li").show();
        }
        if (w > 769 && jq("#menuSuperior").css("display", "none")) {
            jq("#menuSuperior").css("display", "block");
        } else {
            jq("#menuSuperior").css("display", "none");
        }

        if (w > 999) {
            jq('#subject_keywords').parent().hide();
            jq('#allowDiscussion').parent().hide();

            var classe = jq('#region-content').attr('class');
        }
        if (w > 769 && (!jq('#MenuLateralEsquerdo')[0])) {
            jq("#conteudoPrincipal").removeClass();
            jq("#conteudoPrincipal").addClass("span-32");
        }
        if (w > 769 && w < 1000 && (jq('#MenuLateralEsquerdo')[0])) {
            jq("#conteudoPrincipal").removeClass().addClass("span-23");
        }
        if (w > 999 && (jq('#MenuLateralEsquerdo')[0])) {
            jq("#conteudoPrincipal").removeClass().addClass("span-24 last");
        }
        if (w < 769) {
            var nome_h2_noticias = jq("h2.abrirMenuInterno").text();
            if (nome_h2_noticias == "Notícias até 30/07/2012") {
                jq("h2.abrirMenuInterno").text("até 30/07/2012");
            }

        } else {
            var nome_h2_noticias = jq("h2.abrirMenuInterno").text();
            if (nome_h2_noticias == "até 30/07/2012") {
                jq("h2.abrirMenuInterno").text("Notícias até 30/07/2012");
            }
        }
        if (w < 769) {
            jq("#conteudoPrincipal").removeClass();
            jq("#conteudoPrincipal").addClass("span-32");
            jq("table").addClass("footable");
        } else {
            jq("table").removeClass("footable");
            jq("table").removeClass("footable-loaded");
            jq("table").removeClass("phone");
            jq("table").removeClass("breakpoint");
        }
    });
});



jq(document).ready(function() {

    //Colocar tabela zebrada
    jq("table.listing tbody tr:even").css("background", "#F3F3F3");
    jq("table.listing tbody tr:odd").css("background", "#FFF");
    jq("table.listing tbody th").css("background", "#DEE7EC");

    jq(".maisInformacoesBotao").click(function() {
        jq("#box-mais-informacoes").toggle("slow");
    });

    //Âncora
    jq(".menu_ancora").first().css("font-weight", "bold");
    jq(".menu_ancora").click(function() {
        jq(".menu_ancora").css("font-weight", "normal");
        jq(this).css("font-weight", "bold");

        jq("div.texto_ancora").css("display", "none");
        var classe = jq(this).attr("id").replace(/ancora\-/g, "");
        jq("div#ancora-text-" + classe).css("display", "block");
        jq(".menu_ancora").attr("href", "javascript:;");
        jq(this).removeAttr("href");
    });

    //Colocar tags na tabela para ser responsiva
    var w = jq(window).width();
    if (w < 769) {
        jq("table").addClass("footable");
        jq("tr").unwrap();
        jq("th:nth-of-type(n3)").attr("data-hide", "phone,tablet");
        jq("tr:nth-of-type(n2)").wrapAll("<tbody></tbody>");
        jq("tr").first().wrapAll("<thead></thead>");
        jq("td:nth-of-type(1)").addClass("expand");
    }

    //Colocar class .tem-galeria na id #conteudo caso a página possua galeria
    if (jq('#MenuLateralEsquerdo')[0] && jq('#menudireitoInterno')[0]) {
        jq("#conteudo").addClass("largura-com-galeria");
    }
    if (jq('#MenuLateralEsquerdo')[0] && !jq('#menudireitoInterno')[0]) {
        jq("#conteudo").addClass("largura-sem-galeria");
    }
    if (!jq('#MenuLateralEsquerdo')[0] && !jq('#menudireitoInterno')[0]) {
        jq("#conteudo").addClass("largura-normal");
    }

});

jq(function() {
    var enviou_email = 0;
    var regex_email = new RegExp("^.*@[a-z0-9\-]*\.[a-z0-9\-][a-z0-9\-][a-z0-9\-]?(\.[a-z0-9\-][a-z0-9\-])?$");
    jq("#c_id_email").click(function() {
        if (enviou_email) return false;
        jq("#c_email").toggle();

    });
    jq("#c_enviar").click(function() {
        var email_rem = jq('#c_remetente').val();
        var email_dest = jq('#c_destinatario').val();
        if (email_rem == '') {
            jq('#c_remetente').addClass('hightlight');


            return false;
        } else {
            if (!regex_email.test(email_rem)) // email inválido
            {
                jq('#c_remetente').addClass('hightlight');
                return false;
            } else {
                jq('#c_remetente').removeClass('hightlight');
            }
        }
        if (email_dest == '') {
            jq('#c_destinatario').addClass('hightlight');
            return false;
        } else {
            if (!regex_email.test(email_dest)) // email inválido
            {
                jq('#c_destinatario').addClass('hightlight');
                return false;
            }
        }
        jq("#c_link_recomendado").attr("value", jq(location).attr("href"));
        jq.post(jq('#c_form_email').attr('sis'), jq("#c_form_email").serialize());
        jq("#c_id_email").empty();
        jq("#c_id_email").css("background", "none");
        jq("#c_id_email").html("E-mail enviado");
        jq("#c_id_email").addClass("email_enviado");
        enviou_email = 1;

        jq("#c_email").hide();
    });
    jq(".retiraValueCompart").click(function() {
        retiraValueAcessi(this);
    });
    // para apagar os campos de input após o focus (tab)
    jq(".retiraValueCompart").focus(function() {
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

//Contraste

function ativar_contraste() {
    if (jq.cookie('contraste') === null) {
        jq.cookie('contraste', 'on');
        jq('body').addClass('contraste');
        e.preventDefault();
        return false
    } else {
        if (jq.cookie('contraste') == 'on') {
            jq.cookie('contraste', 'off');
            jq('body').removeClass('contraste');
            e.preventDefault();
            return false
        } else {
            jq.cookie('contraste', 'on');
            jq('body').addClass('contraste');
            e.preventDefault();
            return false
        }
    }

    if (jq.cookie('contraste') == 'on') {
    jq('body').addClass('contraste');
    return false
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

//Alinhar imagens na vertical no ie 8 e 7
jq(document).ready(function() {
    if (jq.browser.msie == true && jq.browser.version < 9.0) {
        var destaques = [];
        jq.each(jq(".alinha-imagem-vertical").map(function() {
            return this.id;
        }).get(), function() {
            destaques.push(this);
        });
        jq.each(destaques, function() {
            jq("#" + this + " img").css("padding-top", (jq("#" + this).height() - jq("#" + this + " img").height()) / 2);
        });
    }
});