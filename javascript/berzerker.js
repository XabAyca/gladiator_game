class Berzerker extends Character{
  constructor(name,hp = 8,dmg = 4,mana = 0){
    super(name,hp,dmg,mana,status);
    this.description ='bourrin avec une attaque élevée'
  }

  specialAttackName(){
    return "Rage - 0 MANA"
  }

  specialAttack(player){
    console.log('\n')
    if (this.hp == 1){
      console.log("%cPlus assez de points de vie... attaque spécial annulé",'color:red')
    }else{
      this.dmg+=1
      this.hp -=1
      console.log(`%c${this.name} a utilisé son attaque spécial ${this.specialAttackName()}`,'color:tomato')
      console.log(`%cIl gagne 1 point de dommage supplémentaire`,'color:greenyellow')
      console.log(`%cEt perd 1 point HP`,'color:crimson')
      player.takeDamages(5)
      player.hp < 1 ? this.isKilled(player) : null ;
    }  
    console.log('\n') 
  }

  someMana(){
    return true
  }
}