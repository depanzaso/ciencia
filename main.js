var economicos = 0;
var sanjuanes = 0;



function economico() {

    economicos = economicos + 29;
   document.getElementById("_economicos").innerHTML = economicos;
   total();

}  

function sanjuan() {
    sanjuanes = sanjuanes + 32;
    document.getElementById("_sanjuan").innerHTML = sanjuanes;
    total();
}


function total() {

    document.getElementById("_total").innerHTML = `Total: $${economicos + sanjuanes}`;
    
}

