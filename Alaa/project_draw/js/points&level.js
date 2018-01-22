	
	var point =0	//points number
	
	var levelNum = 1; 

	var healthPoint = 3 ;

	var points = document.getElementById('points');

	var health = document.getElementById('health');

	var timer = document.getElementById('timer');

	var level = document.getElementById('level');

	var tr = document.getElementById('tr');

	var body = document.getElementsByTagName('body')[0];

	var sugarPoint ; //text created in div to display points
	
	var level ; //text display level

	var health ; //display health number

	var min =0;
	        
	var sec =0;

	


body.addEventListener('keydown',function(event){

	//console.log(event.keyCode);

	if(event.keyCode==67)
	{
		
		point++;
		
		points.innerHTML = "Points : " +point ;

		level.innerHTML = " Level : " + levelNum ; 

		if (point==50)      //increment the levelnumebr after earn 50 points

			levelNum =2;

		if (levelNum == 2)      //draw the timer
		{

			setInterval(time ,1000);
		}		

	}

		if (event.keyCode==68 )     //char d
		{



			healthPoint --;

			var img = document.createElement("img");             //heart picture
			img.setAttribute('src', 'img/1.jpg');
			img.setAttribute('height', '30px');
			img.setAttribute('width', '30px');
			img.setAttribute('style' , 'margin-bottom : -9px');
			


			if (healthPoint == 0)
			{
				alert("Game Over! :( ");
			}

			
			health.innerHTML = "Health : " +healthPoint ;
			health.appendChild(img);		
		}

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
	if (min == 3)

	{
		alert("Game Over! :( ");
	}
}
