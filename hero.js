class Hero{
 #health;

    constructor(name, health,attack){
        this.name = name; 
        this.#health = health;
        this.attack;
    }

    getName(){
        return this.name;
    }

    getHealth(){
        return this.#health;
    }
    
    showstate(){
        console.log("Name: " + this.name);
        console.log("Health: " + this.#health);
        console.log("Attack: " + this.attack);
        console.log("-----------------------");
    }
}

const hero1 = new Hero ("Thorin", 100, 10);
const hero1 = new Hero ("Gandalf", 100, 8);

hero1.showstate();
hero2.showstate();