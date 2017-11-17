function Population(phrase, mutationRate, popMax) {
    
    this.children = [];
    this.phrase = phrase;
    
    
    
    
    
    /* Fill up each child with DNA */
    for (let i = 0; i < popMax; i++) {
        this.children[i] = new DNA(this.phrase) ;   
        this.children[i].fitness();
    };
    
    
    
    
    
    
    /* create mating pol depend of children fitness score */
    this.matingPool = [];
    
    for (let i = 0; i <= this.children.length - 1; i++) {
        for (let j=1; j <= this.children[i].fitness; j++) {
            this.matingPool.push(this.children[i]);
        };
    };
    
    

    
    
    
    
    /* Recreation of new generation */
    this.recreate = function() {
        for (let i = 0; i < this.children.length; i++) {
            let a = Math.floor(Math.random() * this.matingPool.length);
            let b = Math.floor(Math.random() * this.matingPool.length);
            let partnerA = this.matingPool[a];
            let partnerB = this.matingPool[b];
            let child = partnerA.crossover(partnerB);
            child.mutation(mutationRate);
            this.children[i] = child;
            /*this.children[i].fitness();*/
            console.log("hej");
        };
    };
    
    
    
    
    
    /* Render text from children's DNA */
    this.renderText = function(e) {
        let text = "";
        for (let i = 0; i < this.children[e].genes.length; i++) {
            text += this.children[e].genes[i];
        };
        return text;
    };
    
    


};







/* INITIATE ALGORITHM */


var phrase = "Be or not to be.";
var mutationRate = 0.01;
var popMax = 50;
var finish = false;
var result = document.getElementById('result');
var bestResult = document.getElementById("best_result");
var best = 0;

document.getElementById("sentence").textContent = phrase;




var population = new Population(phrase, mutationRate, popMax);




    /*var timer = setInterval( () => {
        if (!finish) {
            bestResult.textContent = best;
            population.recreate();
            console.log("proba");
        }   
    },2000);*/
















