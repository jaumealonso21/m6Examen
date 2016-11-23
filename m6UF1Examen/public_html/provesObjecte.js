
var agenda = [];

function PersonaX (nom, cognoms, telf){
    this.nom = nom;
    this.cognoms = cognoms;
    this.telf = telf;
    this.fitxa = function(){return this.nom + " " + this.cognoms + " " + this.telf;};
}

agenda[0] = new PersonaX("Pere", "Gomez", "123456");

document.writeln(agenda[0].fitxa());

function insertar(nom, cognoms, telf){
    var nom = nom;
    var cognoms = cognoms;
    var telf = telf;
    
    agenda.push(new PersonaX(nom, cognoms, telf));
    
    return true;
}

function esborrar(id) {
    var id = id;
    
    agenda.splice(id, id);
    
    return true;
}

function cercaCognom(cognom) {
    var cognom = cognom;
    var resultat = "";
    
    for(var i in agenda){
        if(agenda[i].cognoms === cognom) {
            resultat += "<span>" + agenda[i].fitxa() + "</span> --- ";
        }
    }
    
    return resultat;
}
