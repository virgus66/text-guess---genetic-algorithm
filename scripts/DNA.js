/* random char from ASCII table */
function newChar() {
    let ch = ( (Math.round(Math.random()*59) + 63) ); 
    if (ch == 63) ch = 32;
    if (ch == 64) ch = 46;
    
    return String.fromCharCode(ch);
}

/* assign the value from old rage new equivalent value for new rage */
Number.prototype.map = function(old_min, old_max, new_min, new_max) {
    return new_min + (this - old_min) * (new_max - new_min) / (old_max - old_min);
};





function DNA(targetPhrase) {
    this.genes = [];
    
    
    
    for (let i=0; i <= targetPhrase.length - 1; i++) {
        this.genes[i] = newChar();
    };
    
    
    
    
    /* Count fitness */
    this.fitness = function() {
        let score = 0;
        
        for (let i = 0; i <= this.genes.length - 1; i++) {
            if (this.genes[i] === targetPhrase[i]) {
                score++;
                /*console.log(this.genes[i] + " " + targetPhrase[i]);*/
            };
        };
        
        if (score > best) {
            best = score;
        };
        
        if (score == this.genes.length) {
            finish = true;
        } else {
            this.fitness = score;
            this.fitness = Math.floor( this.fitness.map(0, this.genes.length, 0, 100) );
        };
        console.log(`score: ${score} genes: ${this.genes.length}`);
    };
    
    
    
    
    /* Parents Crossover */
    this.crossover = function(partner) {
        var child = new DNA("");
        var middlepoint = Math.floor( Math.random()*this.genes.length );
        
        for (let i=0; i <= this.genes.length - 1; i++) {
            if (i <= middlepoint)   child[i] = this.genes[i] 
            else child[i] = partner.genes[i];
        };
        return child;
    };
    
    
    
    
    /* Mutation based on probability of picking one random number lower/equal mutation rate */
    this.mutation = function(mutationRate) {
        for (let i = 0; i <= this.genes.length - 1; i++) {
            if (Math.random() <= mutationRate) {
                this.genes[i] = newChar();
                console.log(`zmieniona: ${i}`);
            };
        };
        return this;
    }
    
    
    
    
    
};