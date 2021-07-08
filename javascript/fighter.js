class Fighter extends Character{
  constructor(name,hp = 12,dmg = 4,mana = 40,protection = false){
    super(name,hp,dmg,mana,status);
    this.protection = protection
    this.description = 'combattant équilibré sous tous les bords'
  }

  specialAttackName(){
    return "Dark Vision - 20 MANA"
  }

  specialAttack(player){
    console.log('\n')
    if (this.someMana()){
      this.mana -= 20;
      this.protection = true
      console.log(`%c${this.name} a utilisé son attaque spécial ${this.specialAttackName()}`,'color:tomato')
      console.log(`%cIl inflige 5 points de dégats`,'color:crimson')
      console.log(`%cEt se protége de 2 points d'attaques durant le prochain tour`,'color:greenyellow')
      player.takeDamages(5)
      player.hp < 1 ? this.isKilled(player) : null ;
    }else{
      console.log("%cPlus assez de mana... dommage",'color:red')
    }
    console.log('\n')
  }

  someMana(){
    return this.mana >= 20
  }
}