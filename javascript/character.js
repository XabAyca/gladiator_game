class Character{
  constructor (name,hp,dmg,mana){
    this.name   = name
    this.hp     = hp
    this.dmg    = dmg
    this.mana   = mana
    this.status = 'playing'
    this.maxhp  = hp
    this.maxmana= mana
    this.player = false
  }

  takeDamages(dmg){
    if (this instanceof Fighter && this.protection == true){
      dmg -= 2;
      if (dmg < 0){
        dmg =0
      }
      this.hp -= dmg
      if (this.hp < 0){
        this.hp = 0
      }
      console.log(`%c${this.name} a bloqué 2 dégats grâce à sa protection`,'color:green')
      console.log(`%cIl subit ${dmg} dégats. Il lui reste ${this.hp} HP`,'color:red')
      console.log('\n')
    }else if (this instanceof Assassin && this.protection == true){
      console.log(`%c${this.name} a bloqué l'attaque grâce à sa protection`,'color:green')
      console.log('\n')
    }else{
      this.hp -= dmg
      if (this.hp < 0){
        this.hp = 0
      }
      console.log(`%c${this.name} subit ${dmg} dégats. Il lui reste ${this.hp}/${this.maxhp} HP`,'color:red')
      console.log('\n')
    }
  }

  dealsDamages(player, dmg){
    if (this instanceof Fighter){
      this.protection = false
    }
    console.log(`%c${this.name} attaque ${player.name} !!!  o=|==>`,'color:red')
    player.takeDamages(dmg)
    player.hp <=0? this.isKilled(player):null;
  }

  isKilled(player){
    if(player.hp < 1){
      this.mana += 20
      player.status = 'lose'
      console.log(`%c*** ${this.name} a tué ${player.name} et regagne 20 points de mana ***`,'color:green')
      console.log('\n')
    }
  }

  stats(){
    return `${this.name} (${this.constructor.name}) a ${this.hp}/${this.maxhp} HP -- ${this.mana}/${this.maxmana} MANA`
  }
}