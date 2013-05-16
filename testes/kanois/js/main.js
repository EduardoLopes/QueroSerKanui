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

Kanois.prototype.getJson = function() {
    var json = JSON.stringify(this.getNumber(), null, '\t');
    return json.replace(/\"(\d*.\d+|[\d+])\"/,"$1");
};

Kanois.prototype.consoleResult = function() {
    for (var i = 1; i <= 100; i++) {
        console.log(this.number[i]);
    };
};

var kanois = new Kanois();
kanois.consoleResult();