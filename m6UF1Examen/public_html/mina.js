//------ Mina

function minaFinal(mapaEnt) {
    var diamant = "<>";//Defineix la forma del diamant
    var longitud = 15;//Defineix la longitud màxima del mapa aleatori
    
    var mapa = creaMapes(mapaEnt, diamant, longitud);
    var diam = cercaMina(mapa, diamant);
    
    document.getElementById('mapa').innerHTML = mapa;
    document.getElementById('resultat').innerHTML = diam;
    
}

function creaMapes(mapaEnt, diamant, longitud) {
    
    if(mapaEnt){
        mapa = mapaEnt;
    } else { 
        var mapa = "";//Evita l'error de 'undefined'
        var fig = diamant.split("");
        var llarg = Math.floor((Math.random()*longitud));//Crea la longitud del mapa (mínim 0 "mina buida)
              
        for(var i = 0; i < llarg; i++) {
            var pos = Math.floor((Math.random()*fig.length));//Escolleix aleatòriament quina peça s'inclourà
            mapa += fig[pos];
        }
    }
    
    return mapa;
}

function cercaMina(mina, diamant) {
    var cont = 0;
    var pos = 0;
    
    do {
        pos = mina.indexOf(diamant);
        mina = mina.split("");
        if(pos > -1) { cont++; }//Si hi ha trobat 1 mina, la conta
        mina.splice(pos, 2);//Treu la mina
        mina = mina.join("");//Perqué no hi hagi cap separador
    }while(pos > -1);//No ha trobat cap mina - Fi de la iteració
        
    return cont;
}