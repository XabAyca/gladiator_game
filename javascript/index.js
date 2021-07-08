main=() => {
  const myGame = new Game
  while(myGame.gameContinue() == true){
    new Turn(myGame);
    myGame.watchStats();
  }
  myGame.winners()
}

const start = document.getElementById("startgame")
start.addEventListener("click", main)