window.onload = function () {
    document.monForm.btn.onclick = creationBtn;
};
function creationBtn() {
    var valeur = document.monForm.saisie.value;
    var div = document.getElementById("resultat");
    for (var i = 0; i < valeur; i++) {
        var element = document.createElement("input");
        element.setAttribute("type", "button");
        element.setAttribute("name", "buttonTest");
        element.setAttribute("value", i);
        element.setAttribute("onClick", "supprimer()");
        element.onclick = removeMoi;
        with (element.style){
            width = "50px";
            height = "50px";
            backgroundColor = "red";
        }
        element.onmouseover = function () {
            with (this.style){
                position = "absolute";
                top = (Math.random()*300)+"px";
                left = (Math.random()*300)+"px";
            }
        };
        element.onfocus = function () {
            document.monForm.saisie.focus();
        };
        div.appendChild(element);
    }
}
function removeMoi() {
    this.remove();
};