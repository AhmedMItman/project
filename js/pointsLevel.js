	
	var point =0	//points number
	
	var levelNum = 1; 

	var healthPoint = 3 ;

	var points = document.getElementById('points');

	var health = document.getElementById('health');

	var timer = document.getElementById('timer');

	var level = document.getElementById('level');

	var musicPlayer = document.getElementById("deadMusic");

	var mute = document.getElementById("mute");

	var muteImage = document.getElementById("muteImage");

	var restGame = document.getElementById("restGame");

	var tr = document.getElementById('tr');

	var body = document.getElementsByTagName('body')[0];

	var sugarPoint ; //text created in div to display points
	
	var level ; //text display level

	var health ; //display health number

	var min =0;
	        
	var sec =0;

	var isGameOver = 0 ;

	var mutFlag = 0 ; 


buildHeader();

function buildHeader()
{
	
	points.innerHTML = "Points : " +point ;

	level.innerHTML = " Level : " + levelNum ;	

	health.innerHTML = "Health : " + 3;

	timer.innerHTML = "Timer : " +min + ":" +sec ;

	var img = document.createElement("img");             //heart picture
		
		img.setAttribute('src', 'img/1.jpg');
		
		img.setAttribute('height', '30px');
		
		img.setAttribute('width', '30px');
		
		img.setAttribute('style' , 'margin-bottom : -9px');
		
		health.innerHTML = "Health : " + healthPoint ;

		health.appendChild(img);

}


mute.addEventListener('click',function(){

	if( mutFlag == 0)
	{
		mutFlag = 1 ;

		musicPlayer.muted = true;

		muteImage.src= "img/mute.png";
	}
	else if( mutFlag == 1 )
	{
		mutFlag = 0 ;

		musicPlayer.muted = false;

		muteImage.src= "img/volume-512.png";
	}
	
});

restGame.addEventListener('click',function(){

	localStorage.setItem("user","1") ;

	location.reload(true) ;
 
});

function time (){

		

	timer.innerHTML = "Timer : " +min + ":" +sec ;

	sec++;

	if (sec == 60)
	{
		//sec=sec%60;
		min++;

		sec=0;
	}
	if (min == 10)

	{
		//alert("Game Over! :( ");

		window.location.replace("gameOver.html");
	}
}
