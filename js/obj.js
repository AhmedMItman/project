/*
	this file Containe objects Like 

	characters , enemies , blocks

*/

var pacmanIndex = {x:-1,y:-1} ;

var pacmanSpeed = 32 ;

var enemySpeed  = 32 ;

var bulletOldImage ;

var bulletsNumber = 0 ;

var spaceCounter = 0 ;

var enemyCounter = 0 ;

var enemyImag = 'img/enemy1.gif' ;

var pacy ; // iheritance

// i can delete this 

var characters = { // carry information about every character

	pacman : {health : 3 ,points:0,  width : 32 , heigth : 32 , Dir : -1 , 
				 img:'img/face.gif'} ,

	enemy : {width : 32 , heigth : 32 , Dir : -1 , 
				 img:'img/enmey.gif'} ,

	block : { width : 32 , heigth : 32 , Dir : -1 , 
				 img:'img/wall.gif' } ,

	sugar : { width : 32 , heigth : 32 , Dir : -1 , 
				 img:'img/sugar.png' }

				 // Dir --> 0 for left , 1 for right , 2 for up , 3 down



} ;	

var pacman = { // carry all Running enemy , becareful about length should be -2

	// No Detect Function here wait for Array

	id : {name : 'pacmanID', points: 0,health : 3 ,posX:-1 , posY:-1 ,Dir :-1
	,img:'img/face.gif',oldName:'sugar61' } , 
	/*
		hkmalha lma  
	*/

	// resetPacman : function()
	// {

	// 	//pacy.parentNode.removeChild(pacy);

	// 	this["id"].name = 'pacmanID' ;

	// 	this["id"].points = 0 ;

	// 	this["id"].health = 3 ;

	// 	this["id"].posX = -1 ;

	// 	this["id"].posY = -1 ;

	// 	this["id"].Dir = -1 ;

	// 	this["id"].img = 'img/face.gif' ;

	// },

	createPacman : function()
	{

		var ele = document.createElement('img') ;

		ele.setAttribute('src' ,'img/face.gif' ) ;

		ele.setAttribute('id','pacman') ;

		ele.style.position = "relative" ;

		ele.style.zIndex = "1000";

		return ele ;

	} ,

	eatPacman : function(name_old)
	{
		
		musicPlayer.setAttribute('src','music/dead.mp3');
		
		musicPlayer.play();

		this["id"].health--;

		health.innerHTML = "Health : " + this["id"].health;	

		if(this["id"].health <= 0)
		{
			delete this["id"] ;

			//name_old.parentNode.removeChild(name_old) ;
			name_old.src="img/backColor.png";

			//name_old.setAttribute('id','dead');

			name_old.src = "img/backColor.png" ; 

			name_old.setAttribute('id','space'+spaceCounter);

			border[( pacmanIndex.x*29 )+pacmanIndex.y] = 'space'+spaceCounter;

			spaceCounter++;

			//location.reload(true) ;
			//alert("Game Over! :( ");

			window.location.replace("gameOver.html");
		}



	},

	addPoint : function()
	{


		this["id"].points++;

		//point++;
		
		sugarCounter--;

		if( sugarCounter <= 0)
		{

				levelNum++;

				localStorage.setItem("user",levelNum);

				alert("Congratulations , Welcome to Level"+levelNum);

				// musicPlayer.setAttribute('src','music/winLevel.mp3');

				// musicPlayer.play();

				if( levelNum>3)
				{
					alert("Congratulations Finished Game") ;

					localStorage.setItem("user",levelNum);

					window.location.replace("main.html");
				}

				location.reload(true) ;

				

				// resetAll();

				// drawBoard();

		}
		points.innerHTML = "Points : " +this["id"].points ;

		level.innerHTML = " Level : " + levelNum ;

		if (levelNum == 3)      //draw the timer
		{
			setInterval(time ,1000);
			
		}	

		musicPlayer.setAttribute('src','music/eatsukar.mp3');

		musicPlayer.play();


	} ,	

	movePacMan : function(currObj,posX_new , posY_new , Dir_new,img_new,old_Name)
	{	

		//console.log(currObj,img_new);

			currObj.src = img_new ;

			currObj.setAttribute('id','pacman');

			currObj.style.left = posX_new +'px';

			currObj.style.top = posY_new + 'px';

			currObj.style.position = "relative" ;


			this["id"].posX = posX_new ; 

			this["id"].posY = posY_new ; 

			this["id"].Dir  = Dir_new ; 

			this["id"].img = img_new ;

			this["id"].oldName = old_Name ;

	}

}


var enemies = { // carry all Running enemy , becareful about length should be -2

	//id : {name : 'enemyID', posX:-1 , posY:-1 ,Dir :-1 ,img:'img/enmey.gif'} ,

	// Dir --> 0 for left , 1 for right , 2 for up , 3 down

	addEnemy : function(name_new , posX_new , posY_new ,  DesX_n , DesY_n , Dir_new,img_new , img_old ) 
	{
		
		this[name_new] = {name:name_new , posX:posX_new,posY:posY_new,DesX:DesX_n,DesY:DesY_n,Dir:Dir_new,img:img_new,imgOld:img_old} ;

	},

	moveEnemy : function(name,posX_new , posY_new ,  DesX_n , DesY_n , Dir_new , img_old) // Waiting for A star
	{

		this[name].posX = posX_new ; 

		this[name].posY = posY_new ; 

		this[name].Dir  = Dir_new ; 

		this[name].imgOld = img_old ;

		this[name].DesX = DesX_n ;

		this[name].DesY = DesY_n ;		

	} ,

	removeEnemy : function(name_old)
	{
		//console.log(name_old) ;

		delete this[name_old] ;

		//name_old.parentNode.removeChild(name_old) ;

		//console.log(name_old.parentNode) ;
	}

};

var blocks = { // carry all Running Block becareful about length should be -2

	//id : {name : 'blockID', posX:-1 , posY:-1 ,Dir :-1 ,img:'img/wall.gif' },

	// Dir --> 0 for left , 1 for right , 2 for up , 3 down

	addBlock : function(name_new , posX_new , posY_new , Dir_new ) 
	{
		this[name_new] = {name:name_new , posX:posX_new,posY:posY_new,Dir:Dir_new} 
	}

} ;

var sugars = { // carry all Running Block becareful about length should be -2

	//id : {name : 'sugarID', posX:-1 , posY:-1 ,Dir :-1 , img:'img/sugar.png' },

	// Dir --> 0 for left , 1 for right , 2 for up , 3 down

	addSugar : function(name_new , posX_new , posY_new , Dir_new ) 
	{
		this[name_new] = {name:name_new , posX:posX_new,posY:posY_new,Dir:Dir_new} 
	} ,

	removeSugar : function(name_old)
	{
		delete this[name_old] ;

		//name_old.parentNode.removeChild(name_old) ;
	}



} ;

var bomb = {

	//id : {name : 'bullet',Dir :-1 , img:'img/Bulletyellow.png',arrX :-1 , arrY:-1 },

	// Dir --> 0 for left , 1 for right , 2 for up , 3 down

	addBullet : function(name_new , arrX_new , arrY_new ) 
	{
		
		this[name_new] = {name:name_new ,img:'img/bomb.png' , arrX:arrX_new,arrY:arrY_new,time:5000} ;
	},

	removeBullet : function(name_old)
	{

		delete this[name_old] ;

	}


};
