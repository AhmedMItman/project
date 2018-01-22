var container = document.getElementById("container");

var face = document.createElement('div') 

var body = document.getElementsByTagName('body')[0];

var divGun = document.getElementById("divGun");

var faceX = 50 ; var faceY = 50 ; 

face.style.height = 50+'px';

face.style.width = 50+'px';

face.style.background = "red";

face.style.position = "absolute" ;

container.appendChild(face);

var isGun = 0 ;

var gameInterval ;

var gun ; var gunSpeed = 10 ; var gunSpeedY = 10 ; var gunLevel = 0 ;

body.addEventListener('keydown',function(event){

	//console.log(event);

	if( event.keyCode == "32") // Space
	{

		gun = document.createElement("div") ;

		gunSpeedX = faceX ;

		gunSpeedY = faceY ;

		gun.style.height = 10+'px';

		gun.style.width = 10+'px';

		gun.style.position = "absolute" ;

		//gun.style.float="left";

		//gun.style.display = "flex";
		
		container.appendChild(gun);

		isGun = 1 ;


	}

	else if( event.keyCode == "39")//right
	{
		face.style.marginLeft = faceX+'px';

		faceX+=10;
	}

	else if( event.keyCode == "37")//left
	{
		face.style.marginLeft = faceX+'px';

		faceX-=10;
	}
	else if( event.keyCode == "38")//up
	{
		face.style.marginTop = faceY+'px';

		faceY-=10;	
	}

	else if( event.keyCode == "40")//down
	{
		face.style.marginTop = faceY+'px';

		faceY+=10;
	}
	else if( event.keyCode =="87") //w 
	{
		gunLevel++;
		if(gunLevel==3)
			gunLevel=0;
	}

});

gameInterval = setInterval(function(){

	if(isGun)
	{	
		
		//gunSpeed = faceX ;
				
		
		if(gunLevel==0)
			gun.style.background = "black" ;
		else if(gunLevel==1)
			gun.style.background = "blue" ;
		else
			gun.style.background = "red" ;

		gun.style.marginLeft = gunSpeedX +'px';

		gun.style.marginTop = gunSpeedY +'px';



		gunSpeedX +=10 ;

	}

},50);