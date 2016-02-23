function showHide(id){
    var elm = document.getElementById(id);
    elm.style.display=(elm.style.display=="")?("none"):("");
}

function alternaTipoConsulta(objeto){
    for (contador=0; contador<objeto.length; contador++){
        document.getElementById(objeto.options[contador].value).style.display='none';
    }
    document.getElementById(objeto.options[objeto.selectedIndex].value).style.display='';
}

function setTribunal(elm_sigla, elm_nome, combo){
    var cbo = document.getElementById(combo);
    document.getElementById(elm_sigla).value = cbo.value;
    document.getElementById(elm_nome).value = cbo.options[cbo.selectedIndex].text;
}
