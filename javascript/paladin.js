class Paladin extends Character{
  constructor(name,hp = 16,dmg = 3,mana = 160){
    super(name,hp,dmg,mana,status);
    this.description ='chevalier puissant et défensif'
  }

  specialAttackName(){
    return "Healing Lighting - 40 MANA"
  }

  specialAttack(player){
    console.log('\n')
    if(this.someMana()){
      this.mana -= 40;
      console.log(`%c${this.name} a utilisé son attaque spécial ${this.specialAttackName()}`,'color:tomato')
      console.log(`%cIl inflige 4 points de dégats`,'color:crimson')
      console.log(`%cEt il se soigne de 5 points de vie`,'color:greenyellow')
      this.hp += 5
      player.takeDamages(4)
      player.hp < 1 ? this.isKilled(player) : null ;
    }else{
      console.log("%cPlus assez de mana... dommage",'color:red')
    }
    console.log('\n')
  }

  someMana(){
    return this.mana >= 40
  }
}