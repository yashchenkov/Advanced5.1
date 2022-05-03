export default class Character {
  constructor(name, type, health, level, attack, defence) {
	if(name.length >= 2 && name.length <= 10) {
	  this.name = name;
	} else {
	  throw new Error('name is incorrect');
	}
	switch (type) {
	  case "Bowman":
	    this.type = type;
	    break;
	  case "Swordsman":
	        this.type = type;
	        break;
	  case "Magician":
	    this.type = type;
	    break;
	  case "Daemon":
	    this.type = type;
	    break;
	  case "Undead":
	    this.type = type;
	    break;
	  case "Zombie":
	    this.type = type;
	    break;
	  default:
	    throw new Error('type is oncorrect');
	}
  this.health = health;
  this.level = level;
  this.attack = attack;
	this.defence = defence;
	}

	levelUp() {
	  if(this.health > 0) {
		  this.level++;
		  this.attack += this.attack * 0.2;
		  this.defence += this.defence * 0.2;
		  this.health = 100;
	  } else {
	  	throw new Error('Нельзя повысить уровень умершего');
	  }
	}

	damage(points) {
		if(this.health > 0) {
			this.health -= points * (1 - this.defence / 100);
		}
	}
}