function Population(phrase, mutationRate, popMax) {
    
    this.children = [];
    this.phrase = phrase;
    
    
    /* Fill up each child with DNA */
    for (let i = 0; i < popMax; i++) {
        this.children[i] = new DNA(this.phrase) ;   
        this.children[i].fitness();
    };
    
    
    
    
    /* create mating pol depend of children fitness score */
    matingPool = [];
    
    for (let i = 0; i <= this.children.lenght - 1; i++) {
        Math.floor( this.children.score * 100 )
    }
    
    


};










var phrase = "Be or not to be.";
var mutationRate = 0.01;
var popMax = 50;


var population = new Population(phrase, mutationRate, popMax);

console.log(population);