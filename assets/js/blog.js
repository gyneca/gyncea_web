var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");
tab1.click();
tab1.style.backgroundColor = "#F4F4F4";
tab2.style.backgroundColor = "white";
tab3.style.backgroundColor = "white";

function show(quantity, id){
    for(let x = 1; x<=quantity;x++){
        var ext = document.getElementById(id+x.toString());
        ext.style.animation="1s ease-out 0s 1 FadeIn";
        ext.style.display="grid";
    }
}

function hide(quantity, id){
    for(let x = 1; x<=quantity;x++){
        var ext = document.getElementById(id+x.toString());
        ext.style.display="none"
    }
}

function showSW(sw, pe, nl){
    tab1.style.backgroundColor = "#F4F4F4";
    tab2.style.backgroundColor = "white";
    tab3.style.backgroundColor = "white";
    hide(pe, "pe");
    hide(nl, "nl");
    show(sw, "sw");
}

function showPE(sw, pe, nl){
    tab1.style.backgroundColor = "white";
    tab2.style.backgroundColor = "#F4F4F4";
    tab3.style.backgroundColor = "white";
    hide(sw, "sw");
    show(pe, "pe");
    hide(nl, "nl");
}

function showNL(sw, pe, nl){
    tab1.style.backgroundColor = "white";
    tab2.style.backgroundColor = "white";
    tab3.style.backgroundColor = "#F4F4F4";
    hide(sw, "sw");
    hide(pe, "pe");
    show(nl, "nl");
}
