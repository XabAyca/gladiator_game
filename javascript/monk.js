class Monk extends Character{
  constructor(name,hp = 8,dmg = 2,mana = 200){
    super(name,hp,dmg,mana,status);
    this.description ='prêtre qui peut se guérir'
  }

  specialAttackName(){
    return "Heal - 25 MANA"
  }

  specialAttack(player){
    console.log('\n')
    if(this.someMana()){
      this.mana -= 25;
      console.log(`%c${this.name} a utilisé son attaque spécial ${this.specialAttackName()}`,'color:tomato') 
      console.log(`%cIl se soigne de 8 points de vie`,'color:greenyellow')
      this.hp += 8
    }else{
      console.log("%cPlus assez de mana... dommage")
    }
    console.log('\n')
  }

  someMana(){
    return this.mana >= 25
  }
}