class Game{
  constructor(){
    console.clear();
    this.welcome()
    this.players = []
    this.createPlayers()
    this.get5Players()
    this.turnLeft = 10
    this.playerSelection()
  }

  newTurn(){
    this.turnLeft -= 1
    this.viewTurn();
    
  }

  createPlayers(){
    this.players.push(
      new Fighter("Grace"),
      new Paladin("Ulder"),
      new Monk("Moana"),
      new Berzerker("Draven"),
      new Assassin("Carl"),
      new Wizard('Gandalf'),
      new Bowman("Robin Hood")
    );
  }

  get5Players(){
    this.players = this.players.sort(() => 0.5 - Math.random()).slice(0, 5);
  }

  playerSelection(){
    console.log("%cChoisis ton personnage :",'color:yellow')
    this.players.map((el,index) =>{
      console.log(`${index}- ${el.constructor.name} : ${el.name} -- ${el.description}`)
    })
    let answerCorrect = false;
    while (answerCorrect != true){
      let playerAnswer = prompt(`Choisissez un joueur (de 0 à ${this.players.length-1})`)
      if (playerAnswer >= 0 && playerAnswer < this.players.length){
        this.players[playerAnswer].player = true
        answerCorrect = true
      }else
        console.log('Non valide...')
    }
  }

  alivePlayers(){
    return this. players.filter(el=>el.status == 'playing')
  }

  watchStats(){
    console.log('\n')
    console.log("%cStatistiques des joueurs encore en vie : ","color:blue")
    this.alivePlayers().map(el=>{
      console.log('%c'+el.stats(),'color:cyan')
    })
  }

  gameContinue(){
    if (this.alivePlayers().length > 1 && this.turnLeft > 0 ){
      return true
    }else{
      return false
    }
  }

  winners(){
    let playerIsWinner = false
    this.alivePlayers().map(el=>{
      if (el.player == true){
        playerIsWinner = true;
      }
    })
    if(playerIsWinner == true){
      this.endGameWin()
    }else{
      this.endGameLose()
    }
    console.log('%cThe winners :','color:green')
    this.alivePlayers().map(el=>{console.log(el.stats())})
  }

  viewTurn(){
    console.log('\n')
    console.log('_______________________________________________')
    console.log(`        C'est parti pour le tour n° ${10-this.turnLeft}`)
    console.log('          O==|======>')
    console.log('_______________________________________________')
    console.log('\n')
  }

  endGameWin(){
    console.log(`%c
    ▄█     █▄   ▄█  ███▄▄▄▄   ███▄▄▄▄      ▄████████    ▄████████ 
    ███     ███ ███  ███▀▀▀██▄ ███▀▀▀██▄   ███    ███   ███    ███ 
    ███     ███ ███▌ ███   ███ ███   ███   ███    █▀    ███    ███ 
    ███     ███ ███▌ ███   ███ ███   ███  ▄███▄▄▄      ▄███▄▄▄▄██▀ 
    ███     ███ ███▌ ███   ███ ███   ███ ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   
    ███     ███ ███  ███   ███ ███   ███   ███    █▄  ▀███████████ 
    ███ ▄█▄ ███ ███  ███   ███ ███   ███   ███    ███   ███    ███ 
     ▀███▀███▀  █▀    ▀█   █▀   ▀█   █▀    ██████████   ███    ███ 
                                                        ███    ███ 
    `,'color:green')
  }

  endGameLose(){
    console.log(`%c
    ▄▀  ██   █▀▄▀█ ▄███▄       ████▄     ▄   ▄███▄   █▄▄▄▄ 
    ▄▀    █ █  █ █ █ █▀   ▀      █   █      █  █▀   ▀  █  ▄▀ 
    █ ▀▄  █▄▄█ █ ▄ █ ██▄▄        █   █ █     █ ██▄▄    █▀▀▌  
    █   █ █  █ █   █ █▄   ▄▀     ▀████  █    █ █▄   ▄▀ █  █  
     ███     █    █  ▀███▀               █  █  ▀███▀     █   
            █    ▀                        █▐            ▀    
           ▀                              ▐                  
    `,'color:red')
  }

  welcome(){
	
    console.log(`%c                       .ed"""" """$$$$be.
                      -"           ^""**$$$e.
                    ."                   '$$$c
                    /                      "4$$b
                  d  3                      $$$$
                  $  *                   .$$$$$$
                  .$  ^c           $$$$$e$$$$$$$$.
                  d$L  4.         4$$$$$$$$$$$$$$b
                  $$$$b ^ceeeee.  4$$ECL.F*$$$$$$$
      e$""=.      $$$$P d$$$$F $ $$$$$$$$$- $$$$$$
    z$$b. ^c     3$$$F "$$$$b   $"$$$$$$$  $$$$*"      .=""$c
    4$$$$L        $$P"  "$$b   .$ $$$$$...e$$        .=  e$$$.
    ^*$$$$$c  %..   *c    ..    $$ 3$$$$$$$$$$eF     zP  d$$$$$
      "**$$$ec   "   %ce""    $$$  $$$$$$$$$$*    .r" =$$$$P""
            "*$b.  "c  *$e.    *** d$$$$$"L$$    .d"  e$$***"
              ^*$$c ^$c $$$      4J$$$$$% $$$ .e*".eeP"
                "$$$$$$"'$=e....$*$$**$cz$$" "..d$*"
                  "*$$$  *=%4.$ L L$ P3$$$F $$$P"
                      "$   "%*ebJLzb$e$$$$$b $P"
                        %..      4$$$$$$$$$$ "
                        $$$e   z$$$$$$$$$$%
                          "*$c  "$$$$$$$P"
                          ."""*$$$$$$$$bc
                        .-"    .$***$$$"""*e.
                    .-"    .e$"     "*$c  ^*b.
              .=*""""    .e$*"          "*bc  "*$e..
            .$"        .z*"               ^*$e.   "*****e.
            $$ee$c   .d"                     "*$.        3.
            ^*$E")$..$"                         *   .ee==d%
              $.d$$$*                           *  J$$$e*
                """""                              "$$$"`,'color:purple')
    console.log("                _______________________________________")
    console.log("                    WELCOME TO THE GLADIATOR GAME")
    console.log("                _______________________________________")
    console.log("               Il s'agit d'un match à mort en 10 manches")
    console.log('\n')
  }
}