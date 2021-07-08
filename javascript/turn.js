class Turn{
  constructor(game){
    this.game = game
    this.startTurn()
    this.shuffleAlivePlayers()
    this.playersAttacks()
  }

  alivePlayers(){
    return this.game.alivePlayers()
  }

  startTurn(){
    this.game.newTurn()
    let assassin = this.alivePlayers().filter(el=> el instanceof Assassin)[0]
    if (assassin != undefined && assassin.victim != undefined){
      assassin.shadowHit();
      assassin.protection == false;
    }
  }

  shuffleAlivePlayers(){
    return this.alivePlayers().sort((a, b) => 0.5 - Math.random());
  }
  
  playersAttacks(){
    let allPlayers = this.shuffleAlivePlayers()
    allPlayers.map((player,index)=>{
      if (player.hp > 0){
        let ennemies = allPlayers.filter(el=>el != allPlayers[index] && el.hp > 0 )
        if (player.player == true){
          let playerAttacked = false
          while (playerAttacked != true){
            let choise = this.playerChoice(allPlayers[index])
            if (choise == 3 ){
              this.game.watchStats()
              console.log('\n')
            }else if (choise == 1){
              let victim = ennemies[this.ennemieChoise(ennemies)];
              allPlayers[index].dealsDamages(victim, allPlayers[index].dmg)
              playerAttacked = true
            }else if(choise == 2){
              let victim = ennemies[this.ennemieChoise(ennemies)];
              allPlayers[index].specialAttack(victim)
              playerAttacked = true
            }
          }
        }else{
          this.botAttack(allPlayers[index],ennemies)
        }
      }
    })
    console.log('________________________________________________')
    console.log('------------------------------------------------')
  }

  botAttack(bot,ennemies){
    let ennemiesLowHp = ennemies.filter(el=>{el.hp <= bot.dmg})
    if (ennemiesLowHp.length < 0){
      let victim = this.randomVictim(ennemiesLowHp);
      if (bot.someMana == false){
        bot.dealsDamages(victim, bot.dmg)
      }else{
        if (this.randomNumber() == 1){
          bot.dealsDamages(victim, bot.dmg)
        }else{
          bot.specialAttack(victim)
        }
      }
    }else{
      let victim = this.randomVictim(ennemies);
      if (bot.someMana == false){
        bot.dealsDamages(victim, bot.dmg)
      }else{
        if (this.randomNumber() == 1){
          bot.dealsDamages(victim, bot.dmg)
        }else{
          bot.specialAttack(victim)
        }
      }
    }
  }

  randomNumber(){
    return Math.floor(Math.random() * 2)
  }

  randomVictim(ennemies){
    return ennemies[Math.floor(Math.random()*ennemies.length)]
  }

  ennemieChoise(ennemies){
    console.log(`%cQuel ennemie souhaites-tu attaquer ? (0 à ${ennemies.length-1})`,'color:yellow')
    ennemies.map((enn,index) => {
      console.log(`${index}- ${enn.stats()}`)
    })
    let  answerCorrect = false;
    while (answerCorrect != true){
      let victim = prompt(`Choisissez un ennemie : (0 à ${ennemies.length-1})`)
      if (victim >= 0 && victim < ennemies.length){
        answerCorrect = true
        return victim
      }else{
        console.log('Non valide...')
      }
    }
  }

  playerChoice(player){
    console.log('\n')
    console.log("%cC'est ton tour:",'color:yellow')
    console.log("%c"+player.stats(),"color:cyan")
    console.log('%cChoisis ton action: ','color:yellow')
    console.log('1- Attaque direct')
    console.log(`2- Attaque spécial : %c${player.specialAttackName()}`,'color:yellow')
    console.log('3- Etats des ennemies')
    console.log('\n')
    let answerCorrect = false;
    while (answerCorrect != true){
      let playerAnswer = prompt('Choisisez une action (1 à 3)')
      if (playerAnswer >=1 && playerAnswer <=3){
        answerCorrect = true
        return playerAnswer
      }else{
        console.log('Non valide...')
      }
    }
  }
}