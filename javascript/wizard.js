class Wizard extends Character{
  constructor(name,hp = 10,dmg = 2,mana = 200){
    super(name,hp,dmg,mana,status);
    this.description ='un puissant sage utilisant des sorts magiques'
  }

  specialAttackName(){
    return "FireBall - 25 MANA"
  }

  specialAttack(player){
    console.log('\n')
    if(this.someMana()){
      this.mana -= 25;
      console.log(`%c${this.name} a utilisé son attaque spécial ${this.specialAttackName()}`,'color:tomato')
      console.log(`%cIl inflige 7 points de dégats`,'color:crimson')
      player.takeDamages(7)
      player.hp < 1 ? this.isKilled(player) : null ;
    }else{
      console.log("%cPlus assez de mana... dommage",'color:red')
    }
    console.log('\n')
  }

  someMana(){
    return this.mana >= 25
  }
}