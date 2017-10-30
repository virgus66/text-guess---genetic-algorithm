function newChar() {
    let ch = ( (Math.round(Math.random()*59) + 63) ); 
    if (ch == 63) ch = 32;
    if (ch == 64) ch = 46;
    
    return String.fromCharCode(ch);
}


function DNA(targetPhrase) {
    this.genes = [];
    this.score = 0;
    
    for (let i=0; i <= targetPhrase.length - 1; i++) {
        this.genes[i] = newChar();
    };
    
    
    this.fitness = function() {
        let score = 0;
        
        for (let i = 0; i <= this.genes.length - 1; i++) {
            if (this.genes[i] === targetPhrase[i]) {
                score++;
                console.log(this.genes[i] + "" + targetPhrase[i]);
            }
        }
        
        this.score = score / targetPhrase.length;
    };
    
}

