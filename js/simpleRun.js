var container = document.getElementById("container") ;

var body = document.getElementsByTagName('body')[0];

var charID ="key" ; var charCount = 0 ; 

var pacmanX = 0 ;  var pacmanY = 0 ;

var packmanFaceTimeOut ;

var pacmanFacetimeOutAmount = 600 ;

// create Enemy and set interval for enemy and bomb Collesion :D 
// start 

createChar(8,27);

createChar(3,25);

createChar(2,4);

createChar(5,6);

createChar(1,20);

createChar(8,20);

createChar(4,13);

createChar(4,17	);

setInterval(EnemyCollesion ,300); 

setInterval(bombCollesion ,1000);
// end 

function createChar(eX , eY)
{
		
		var currID  = border[( eX*29 )+eY] ; 

		var ele = document.getElementById(currID);

		// set each enmey desX , desY , desDir = -1 ; initially 
		enemies.addEnemy('enme'+enemyCounter,eX,eY,-1,-1,-1,'img/enemy1.gif' ,ele.src ) ;

		// get desX , desY m desDir for each enemy 
		getNewXYDirEnemy(enemies[('enme'+enemyCounter)]);

		ele.src = 'img/enemy1.gif' ;

		ele.name = 'enme'+enemyCounter ;
		
		enemyCounter++;

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// get desX , desY , desDir for each enemy in Running Game
function getNewXYDirEnemy(enemy)
{
	var enemy1Dir = getRandomInt(4) ; 

	var enemyDesX ;

	var enemyDesY ;
	while(1)
	{
		enemyDesX = getRandomInt(9) ;

		enemyDesY = getRandomInt(29) ;

		var x = border[( enemyDesX*29 )+enemyDesY] ; 

		if(x.substring(0,5) != "block")
		{
			
			
			break ;

		}
	}

	enemy.DesX = enemyDesX ;

	enemy.DesY = enemyDesY ;

	enemy.Dir = enemy1Dir ;
			
}


function bombCollesion()
{
	for(var i in bomb)
	{



		if(i != "addBullet" && i != "removeBullet")
		{

			bomb[i].time -=1000;

			if(bomb[i].time <= 0)
			{

				console.log(i);

				var ele = document.getElementById(bomb[i].name) ;

				ele.src = 'img/backColor.png';

				ele.setAttribute('id','space'+spaceCounter);

				border[(bomb[i].arrX*29)+bomb[i].arrY] = 'space'+spaceCounter ;

				spaceCounter++;

				bomb.removeBullet(bomb[i].name);

			}

		}

	}

}

function deleteDom(ele)
{

	ele.setAttribute('id','space'+spaceCounter) ;

	ele.src = "img/backColor.png" ; 

	spaceCounter++;

	ele.name = "done" ;

}
function EnemyCollesion()
{
	for(var i in enemies)
	{	


		if(i != "addEnemy" && i != "moveEnemy" && i !="removeEnemy")
		{

			var nextIndex ;

			var currIndex ;

			var nextID ;

			var eNX ; var eNY ;

			 if( (enemies[i].posX == enemies[i].DesX) && (enemies[i].posY == enemies[i].DesY) )
			{
				
					getNewXYDirEnemy(enemies[i]);
			}

			if( enemies[i].Dir == 1 )
			{ //Right

				eNX = enemies[i].posX ; eNY = enemies[i].posY+1 ;
				nextIndex = ( eNX*29 )+eNY ;
				nextID  = border[nextIndex] ;
			}

			else if( enemies[i].Dir == 0 ) 
			{// Left

				eNX = enemies[i].posX ; eNY = enemies[i].posY-1 ;
				nextIndex = ( eNX*29 )+eNY ;
				nextID  = border[nextIndex] ;
			}

			else if( enemies[i].Dir == 2 ) 
			{// Up

				eNX = (enemies[i].posX-1) ; eNY = enemies[i].posY ;
				nextIndex = ( eNX*29 )+eNY ;
				nextID  = border[nextIndex] ;
			}

			else if(  enemies[i].Dir == 3 )
			{ // Down

				eNX = (enemies[i].posX+1) ; eNY = enemies[i].posY ;
				nextIndex = ( (eNX)*29 )+eNY ;
				nextID  = border[nextIndex] ;
			}

		    currIndex = ( enemies[i].posX*29 )+enemies[i].posY ;

			var currID  = border[currIndex] ; 

			var eleCurr = document.getElementById(currID) ;

			var eleNext = document.getElementById(nextID) ;

			if(eleNext == null || eleNext=="undefined")
			{
				continue;
			}

			if(nextID == "pacman")
			{

				
				border[currIndex] = 'space'+spaceCounter;

				deleteDom(eleCurr) ;

				enemies.removeEnemy(enemies[i].name);

				pacman.eatPacman(pacy) ;

				sugarCounter--;

				if(levelNum > 1)
				{

					createChar(8,27);

				}

				continue ;

			}

			else if( nextID.substring(0,4) == "bomb")
			{

				bomb.removeBullet( border[ nextIndex] );

				border[nextIndex] = 'space'+spaceCounter ;

				deleteDom(eleNext) ;

				border[currIndex] = 'space'+spaceCounter ;

				deleteDom(eleCurr) ;

				enemies.removeEnemy(enemies[i].name);

				sugarCounter--;

				if(levelNum > 1)
				{

					createChar(8,27);

				}

				continue ;

			
			}
			else if( (nextID.substring(0,5) != "block")
			 && ( nextID != "pacman" ) 
				&& (eleCurr.src != eleNext.src ))
			{

				eleCurr.src = enemies[i].imgOld ;

				eleCurr.name = "done" ;

				enemies[i].imgOld = eleNext.src ;

				eleNext.src = 'img/enemy1.gif' ;

				eleNext.name=enemies[i].name;

				enemies.moveEnemy(i,eNX,eNY,enemies[i].DesX,enemies[i].DesY,1,enemies[i].imgOld) ;

			}
			else if( (eleCurr.src == eleNext.src) ||  (nextID.substring(0,5) == "block"))
			{
				getNewXYDirEnemy(enemies[i]);
			}

			if( (enemies[i].posY == enemies[i].DesY) && enemies[i].posX < enemies[i].DesX)
					enemies[i].Dir = 3 ;

			else if( (enemies[i].posY == enemies[i].DesY) && enemies[i].posX > enemies[i].DesX)
					enemies[i].Dir = 2 ;
			else if( (enemies[i].posX == enemies[i].DesX) && enemies[i].posY < enemies[i].DesY)
					enemies[i].Dir = 1 ;

			else if( (enemies[i].posX == enemies[i].DesX) && enemies[i].posY > enemies[i].DesY)
					enemies[i].Dir = 0 ;


			
		}


	}
}

body.addEventListener('keydown',function (event)
 {	


 		 if( (event.keyCode == 32 )&& (levelNum>1)) // space for bomb :D 
		 {	

			 	var eNX ; var eNY ;

				if( pacman["id"].Dir == 1 ) // for Right
				{

					eNX = pacmanIndex.x   ;

					eNY = pacmanIndex.y+1 ;
				}

				if( pacman["id"].Dir == 0 ) // for Left
				{

					eNX = pacmanIndex.x   ;

					eNY = pacmanIndex.y-1 ;
				}
				
				if( pacman["id"].Dir == 2 ) // for Up
				{

					eNX = pacmanIndex.x -1 ;

					eNY = pacmanIndex.y    ;

				}
				
				if( pacman["id"].Dir == 3 ) // for Down
				{

					eNX = pacmanIndex.x + 1 ;

					eNY = pacmanIndex.y     ;

				}
				
				var currID  = border[( eNX*29 )+eNY] ; 

				if( currID.substring(0,5) != "block")
				{

					var ele = document.getElementById(currID);

					bomb.addBullet('bomb'+bulletsNumber, eNX,eNY) ;

					border[( eNX*29 )+eNY] = 'bomb'+bulletsNumber ;

					ele.src = 'img/bomb.png' ;

					ele.setAttribute('id','bomb'+bulletsNumber);

					bulletsNumber++;

					sugarCounter--;
				}
		} 
		
		else if( event.keyCode == 39  || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 40)
		{



			var sNX ; var sNY ; var sDir ;

			var pacIndexX = pacmanIndex.x; 

			var pacIndexY = pacmanIndex.y; 

			var pacDomX = pacmanX; 

			var pacDomY = pacmanY ; 

			var curImage ;

			if( event.keyCode == 39 ) // right 
			{

				sNX = pacmanIndex.x ;

				sNY = pacmanIndex.y+1 ;

				sDir = 1 ;

				pacIndexY++;

				pacDomX +=pacmanSpeed ;

				curImage = 'img/right.gif' ;

			}

			else if( event.keyCode == 37 ) //left
			{
				
				sNX = pacmanIndex.x ;

				sNY = pacmanIndex.y-1 ;

				sDir = 0 ;

				pacIndexY--;

				pacDomX -=pacmanSpeed ;

				curImage = 'img/left.gif' ;

			}

			else if( event.keyCode == 38 ) //up
			{
				sNX = pacmanIndex.x-1 ;

				sNY = pacmanIndex.y ;

				sDir = 2 ;

				pacIndexX--;

				pacDomY -=pacmanSpeed ;

				curImage = 'img/up.gif' ;

			}	

			else if( event.keyCode == 40 ) //down
			{
				
				sNX = pacmanIndex.x + 1 ;

				sNY = pacmanIndex.y ;

				sDir = 3 ;

				pacIndexX++;

				pacDomY +=pacmanSpeed ;

				curImage = 'img/down.gif' ;

			}


			clearTimeout(packmanFaceTimeOut) ;

			var currID  = border[( sNX*29 )+sNY] ;

			var ele = document.getElementById(currID) ;

			if(ele =="undefined" || ele == null)
			{

			}

			else if( ele.name.substring(0,4)=="enme")
			{

				pacman.eatPacman(pacy);

				var ele = document.getElementById(currID);

				border[( sNX*29 )+sNY] = 'space'+spaceCounter;

				//spaceCounter++;
				
				ele.src = 'img/backColor.png';

				ele.setAttribute('id','space'+spaceCounter);

				spaceCounter++;

				enemies.removeEnemy	(ele.name);

				ele.name ="done";

				sugarCounter--;

				if(levelNum > 1)
				{

					createChar(8,27);

				}
				


			}

			else if( currID.substring(0,5) == "sugar" ) // check For Suagr 
			{


				pacman.addPoint() ;

				ele.src=backColor;

				border[( pacmanIndex.x*29 )+pacmanIndex.y] = 'space' + spaceCounter ;

				ele.setAttribute('id', 'space' + spaceCounter) ;

				spaceCounter++;

				border[( sNX*29 )+sNY] = 'pacman' ;

				pacmanIndex.y = pacIndexY ;

				pacmanIndex.x = pacIndexX ;

				pacmanX = pacDomX ;

				pacmanY = pacDomY ;

				pacman.movePacMan(pacy,pacmanX,pacmanY,sDir,curImage) ;



			}
			
			else if( currID.substring(0,5) == 'space' ) // empty
			{

				border[( pacmanIndex.x*29 )+pacmanIndex.y] = 'space' + spaceCounter ;

				ele.setAttribute('id', 'space' + spaceCounter) ;

				spaceCounter++;

				border[( sNX*29 )+sNY] = 'pacman' ;

				pacmanIndex.y = pacIndexY ;

				pacmanIndex.x = pacIndexX ;

				pacmanX = pacDomX ;

				pacmanY = pacDomY ;

				pacman.movePacMan(pacy,pacmanX,pacmanY,sDir,curImage) ;


			}
			

			packmanFaceTimeOut = setTimeout(function ()
				{pacman.movePacMan(pacy,pacmanX,pacmanY,-1,"img/face.gif") ;
				},pacmanFacetimeOutAmount);


		}	

});


function resetAll()
{

	//pacy="";

	delete pacman["id"] ;

	point = min = sec = isGameOver = bulletsNumber = spaceCounter =enemyCounter = 0 ;

	healthPoint = 3 ;

	pacmanX = pacmanY = 0 ;

	pacman.resetPacman();

	pacmanIndex = {x:-1,y:-1} ;

	pacmanSpeed = enemySpeed  = 32 ;

	blockCounter = sugarCounter = 0 ;

	spaceCounter  = 0 ; enemyCounter = 0 ; sugarCounter = totalSugar ; 

	border = [] ;

}