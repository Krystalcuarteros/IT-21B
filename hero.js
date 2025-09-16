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
        console.log("-------------------");
    }
}
   class Warrior extends Hero{
         usebility(){
            console.log('${this.name} use bility');
            }
        }
   

const hero1 = new Hero ("Thorin", 100, 10);
const hero2 = new Hero ("Gandalf", 100, 8);

Thorin.showstate();
Gandalf.showstate();