class Assassin extends Character{
  constructor(name,hp = 6,dmg = 6,mana = 20,protection = false,victim){
    super(name,hp,dmg,mana,status);
    this.protection = protection
    this.victim = victim
    this.description = 'rusé et fourbe'
  }

  specialAttackName(){
    return "Shadow hit - 20 MANA"
  }

  specialAttack(player){
    if (this.someMana()){
      this.mana -= 20;
      this.protection = true
      this.victim = player
      console.log('\n')
      console.log(`%c${this.name} a utilisé son attaque spécial ${this.specialAttackName()}`,'color:tomato')
      console.log(`%cIl a une protection durant le prochain tour`,'color:greenyellow')
      console.log(`%cEt a choisi ${player.name} comme victime`,'color:crimson')
    }else{
      console.log("Plus assez de mana... dommage")
    }
    console.log('\n')
  }

  shadowHit(){
    this.protection = false
    console.log(`%cC'est l'heure du ${this.specialAttackName()}......`,'color:yellow')
    if (this.victim.status == 'lose'){
      console.log(`${this.victim.name} est déjà mort`)
      this.shadowHitFail
    }else{
      this.victim.takeDamages(7)
      this.victim.hp <=0? this.isKilled(this.victim):null;
      this.victim.status =='lose'? null : this.shadowHitFail()
    }
    this.victim = null
  }

  shadowHitFail(){
    this.hp -= 7
    console.log(`%cL'attaque suprise a échoué ${this.name} subit à son tour 7 points de dégats...`,'color:red')
    if (this.hp <= 0){
      this.status == 'lose'
      console.log(`%c*** ${this.name} est mort suite à une attaque loupé... ***`,'color:red')
      console.log('\n')
    }
  }

  someMana(){
    return this.mana >= 20
  }
}