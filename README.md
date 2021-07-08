![GitHub Logo](/character.png)   
# The Gladiator Game
Le principe ud jeu est très simple. Il s'agit d'un "Battle Royal" like. Vous devez survivre durant les 10 tours ou vaincre tout vos ennemies.   
## Lancement de la partie
Pour jouer:   
Ouvrez la page ```index.html``` dans votre navigateur.   
Ouvrez votre browser console.   
Et appuyer sur Jouer.   
Le jeux comporte 7 classes différentes. Chacune d'elle a des attributs différents et un coup spécial spécifique.   
Au lancement vous aurez le choix entre 5 classes différentes choisis aléatoirement. Une fois votre choix fait le jeux se lance.
## Attributs
```HP``` Il s'agit des points de vie du joueur   
```MANA``` Il s'agit des points de "pouvoirs" du joueur. Ils lui permettent d'effectuer des coups spéciaux.   
```DMG``` Point d'attaque. Il s'agit des dégats effectuer par le coup de base du joueur.   
```SPECIAL ATTACK``` C'est le coup spécial propre à chaque joueur.   
## Personnages   
```ASSASSIN``` De son nom Carl il est rusé et fourbe. Il démarre la partie avec 6HP - 6 DMG - 20 MANA.   
Son coup spécial est le "Shadow hit"(20 MANA). Il choisi une cible et se cache dans un coin attendant le meilleur moment pour frapper, ce qui le rend invincible pendant ce temps. Au début du tour suivant il attaque sa cible et lui inflige 7 dégats. Seulement il n'est plus à couvert donc si sa cible ne meurt pas elle lui inflige également 7 dégats.   
```BERZERKER``` De son vrai nom Draven il est bourrin avec une attaque élevée. Il démarre la partie avec 8 HP - 4 DMG - 0 MANA.   
Son coup fatal est "Rage"(0 MANA). Pas besoins de magie pour ce joueur, il prend son pied à faire souffrir ses victimes. A chaque coup spécial il augment son attacque +1 DMG mais perd -1 HP.  
```BOWMAN``` De son vrai nom "Robin Hood" il est un archer à la vision d'aigle. Il démarre la partie avec 7 HP - 4 DMG - 150 MANA.   
Son coup spécial est le "Sniper"(50 MANA). Tel un tireur d'élite des forces spécial il prend le temps d'ajuster son tir et entre deux légères respiration il envoie une flèche qui inflige des dégats critique (10 DMG).   
```FIGHTER``` De son vrai nom Grace c'est un combattant équilibré sous tous les bords. Il démarre la partie avec 12HP - 4 DMG - 40 MANA.   
Son coup fatal est "Dark Vision"(20 MAN). Combattant de la nuit il attaque dans la pénombre pour effectuer plus de dégats à son adversaire (5 DMG) et en profite pour se protéger (-2 DMG par attaque des adversaires) jusqu'à la fin du tour.   
```MONK``` De son vrai nom Moano c'est prêtre qui peut se guérir.Il démarre la partie avec 8HP - 2 DMG - 200 MANA.   
Son coup fatal est "Heal"(25 MANA). Grâce à sa grande magie, enseigné par Merlin il peut se soigner +8 HP.   
```PALADIN``` De son vrai nom Ulder c'est un chevalier puissant et défensif. Il démarre la partie avec 16HP - 3 DMG - 160 MANA.   
Son coup fatal est "Healing Lighting"(40 MANA). Chevalier au service du roi il est touché de la lumière divine et lors de son attaque spéciale peut faire 4 DMG à son adversaire tout en gagnant +5 HP.   
```WIZARD``` De son vrai nom Gandalf c'est un un puissant mage utilisant des sorts magiques. Il démarre la partie avec 10HP - 2 DMG - 200 MANA.    
Son coup fatal est "FireBall"(25 MANA). Pour compenser son physique viellissant et son manque de force il est capable d'envoyer des boules de feu meutrière infligeant 7 DMG à son adversaire.   
# Code
## Technos
Full JavaScript Vanilla   
HTML CSS(bootstrap) pour la page ```index.html```
## Features
* Création de 7 classes différentes   
* Proposition de 5 classes aléatoires en début de partie   
* Chaque classe à un coup spécial   
* Mise à jour régulière des joueurs en vie   
* Deux "endGame" différent : si le joueur fait partie des gagnants ou pas...   
* Ordre de passage à l'attaque aléatoire   
* IA bot : favorise les coups critique. Sinon choix de l'ennemie aléatoire. Choix aléatoire entre attaque de base et attaque spécial.   