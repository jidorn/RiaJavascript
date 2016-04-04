function UneClasse(i,j,methode){
    this.att1 = "coucou";
    this.att2 = 15;
    this.i = i;
    this.j=j;
    this.uneMethode = function () {
        console.log(this.att1);
    };
    this.uneAutreFonction = toto;
    this.test = methode;
}
UneClasse.prototype.encoreUneFonction = function () {
    console.log(this.att1);
}
function toto(){
    console.log(this.att2);
}