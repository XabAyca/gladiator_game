class Bowman extends Character{
  constructor(name,hp = 7,dmg = 4,mana = 150){
    super(name,hp,dmg,mana,status);
    this.description ='un archer à la vision d\'aigle'
  }

  specialAttackName(){
    return "Sniper - 50 MANA"
  }

  specialAttack(player){
    console.log('\n')
    if(this.someMana()){
      this.mana -= 50;
      console.log(`%c${this.name} a utilisé son attaque spécial ${this.specialAttackName()}`,'color:tomato')
      console.log(`%cIl inflige 10 points de dégats`,'color:crimson')
      player.takeDamages(10)
      player.hp < 1 ? this.isKilled(player) : null ;
    }else{
      console.log("%cPlus assez de mana... dommage",'color:red')
    }
    console.log('\n')
  }

  someMana(){
    return this.mana >= 50
  }
}