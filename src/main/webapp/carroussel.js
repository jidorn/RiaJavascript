/**
 * Created by Stagiaire on 15/03/2016.
 */
function Diaporama(parent){
    this.ou = parent;
    this.images = Array();
    this.delay = 1;
    this.index =0;
    this.interval;
}
Diaporama.prototype.initialisation = function () {
    // that est une adresse qui fait reference a diaporama
    var that = this;

    var monDiapo = document.getElementById(this.ou);
    test = monDiapo.getElementsByTagName("img");
    for (var i=0;i<test.length;i++){
        this.images[i] = test[i].src;
    }
console.log(this.images);
    var btnStart = document.createElement("input");
    btnStart.setAttribute("type", "button");
    btnStart.setAttribute("style","clear:both");
    btnStart.setAttribute("value", "start");
    btnStart.onclick = function () {
        that.start();
    };

    var inputDelay = document.createElement("input");
    inputDelay.setAttribute("id", "delay-"+this.ou);
    inputDelay.setAttribute("type","text");

    var btnStop = document.createElement("input");
    btnStop.setAttribute("type", "button");
    btnStart.setAttribute("style","clear:both");
    btnStop.setAttribute("value", "stop");
    btnStop.onclick = function () {
        that.stop();
    }
    var grandeImage = document.createElement("img");
    grandeImage.setAttribute("src",this.images[0]);
    grandeImage.setAttribute("alt",this.images[0]);
    grandeImage.setAttribute("style","width:250px;height:250px");
    grandeImage.setAttribute("id","grande-"+this.ou);

    monDiapo.innerHTML ="";
    monDiapo.appendChild(grandeImage);
    monDiapo.appendChild(document.createElement("br"));
    monDiapo.appendChild(btnStart);
    monDiapo.appendChild(inputDelay);
    monDiapo.appendChild(btnStop);
    console.log(this.images.length);
};
Diaporama.prototype.start = function () {
    var that = this;
    console.log(this.images);
    this.delay = document.getElementById("delay-"+this.ou).value;
    this.stop();
    this.interval = setInterval(function () {
            that.changerImage();
    } , this.delay*1000);
};
Diaporama.prototype.stop = function () {
    clearInterval(this.interval);
};
Diaporama.prototype.changerImage = function () {
    console.log(this.images);
    if (this.index >= this.images.length -1){
        this.index = 0;
    }
    document.getElementById("grande-"+this.ou).src =
        this.images[++this.index];

};
