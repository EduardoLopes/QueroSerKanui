function Kanois(){
    this.number = {};
    this.setNumbers();
};

Kanois.prototype.getNumber = function(number) {
    return this.number[number];
};

Kanois.prototype.isKa = function(number) {
    return (number % 5 == 0)
};

Kanois.prototype.isNois = function(number) {
    return (number % 7 == 0)
};

Kanois.prototype.isKaNois = function(number) {
    return (number % 5 == 0 && number % 7 == 0)
};

Kanois.prototype.setNumbers = function() {
    for (var i = 1; i <= 100; i++) {

        if(this.isKaNois(i)) 
            this.number[i] = "KaNois"
        else
            if (this.isNois(i))
                this.number[i] = "Nois";
            else if (this.isKa(i))
                this.number[i] = "Ka";
            else
                this.number[i] = i;           
    
    };
};

Kanois.prototype.getJSON = function() {
    var json = JSON.stringify(this.number, null, '\t');
    return json;
};

Kanois.prototype.consoleResult = function() {
    for (var i = 1; i <= 100; i++) {
        console.log(this.number[i]);
    };
};

var kanois = new Kanois();

function getElement(id){
    return document.getElementById(id);
}

var btnConsole = getElement("console");
var btnHTML = getElement("html");
var btnClear = getElement("clear");
var btnJSON = getElement("JSON");

var resultHtml = getElement("result");

var count = 0;

btnConsole.addEventListener("click", function(){
    kanois.consoleResult();    
});

btnHTML.addEventListener("click", function(){
    //works just one time
    if(count < 100){
        resultHtml.innerHTML = "";
        for (var i = 1; i <= 100; i++) {
            resultHtml.innerHTML += "<div class='number'> " + kanois.number[i] + " </div>" ;
            count++
        };
    }
});

btnClear.addEventListener("click", function(){
    resultHtml.innerHTML = "";
    count = 0;
});

btnJSON.addEventListener("click", function(){
    resultHtml.innerHTML = "";
    resultHtml.innerHTML = "<textarea>" + kanois.getJSON() +  "</textarea>";
    count = 0;
});


