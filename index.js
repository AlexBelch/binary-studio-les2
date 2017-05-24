class Fighter {
  constructor (name = "No name", power, health) {
    this.name = name;
    this.power = power;
    this.health = health;
    console.log(`${this.name} : health - ${this.health}, power - ${this.power}`);
  }
  
  setDamage (damage) {
    this.health = this.health - damage;    
    console.log(`${this.name} health: ${this.health}`);
  }
  
  hit (enemy, point) {
    let damage = point * this.power;
    enemy.setDamage(damage);
  }
  getName () {
     return `${this.name}`;
  }
  getHealth () {
     return `${this.health}`;
  }
}

class ImprovedFighter extends Fighter{
  doubleHit (improvedFighter, point) {  	
  	super.hit(improvedFighter, point * 2);    
  } 
}

let fights = (fighter, improvedFighter, ...point) => {
  let i = 0;
  while ((fighter.getHealth() > 0) && (improvedFighter.getHealth() > 0)) {     
    console.log(`Atacking ${fighter.getName()}...`);  
    fighter.hit(improvedFighter, point[i]);
    console.log(`Atacking ${improvedFighter.getName()}...`);  
    improvedFighter.doubleHit(fighter, point[i]);
    i++;
  }
  console.log(`GAME OVER!!!`);
  if (fighter.getHealth() <= 0) {
  	console.log(`Winner is ${improvedFighter.getName()}`);
  } else if (improvedFighter.getHealth() <= 0) {
  	console.log(`Winner is ${fighter.getName()}`);
  }  
}

let fighter = new Fighter('Bob', 1, 100);
let improvedFighter = new ImprovedFighter('Sam', 1, 100);
fights(fighter, improvedFighter, 25, 13, 45,50);

fighter = new Fighter(undefined, 3, 100);
improvedFighter = new ImprovedFighter('Sam', 1, 100);
fights(fighter, improvedFighter, 25, 13, 45,50);
