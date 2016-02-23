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