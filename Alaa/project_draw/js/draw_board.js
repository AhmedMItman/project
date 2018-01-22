var container = document.getElementById("container");


var border = [] ;

var blockCounter = 0 ;
var spaceCounter = 0 ;

var blockName = 'img/wall.gif';

var spaceName = 'img/sokar.png'; 	

var faceName ='img/face.gif';

yelloWEnmey='img/enmey1.gif';

redEnmey='img/enmey2.gif';

draxBoard();


function draxBoard() 
{
	
	for(var i = 0 ; i < 10;i++)
	{

		for(var j = 0 ; j < 29 ; j++)
		{
			if( i ==0 || ( j==0 ) || (i==9 ) || (j==28) ||
			 (i==2  && ((j>=7 && j<=10) || (j>=12 && j<=17) || (j>=19 && j<=22))) ||
			 (i==7 && ((j>=7 && j<=10) || (j>13 && j<16) || (j>=19 && j<=22))) ||
			 ((i>=3 && i<=6) && (j==8 || j==9 || j==14 || j==15 || j==20 || j==21))) // block position
			{
				if (j==0 && i==4){                          //pacman  position
 
					var ele = document.createElement('img') ;

					ele.setAttribute('src',faceName) ;

					border.push(faceName) ;

					ele.setAttribute('id',"pacman") ;

					ele.position = "absolute" ;

					container.appendChild(ele) ;

				}
				else if ((i==2 && j==12) || (i==2 && j==17)) 									//yelloW Enmey position
				{
					var ele = document.createElement('img') ;

					ele.setAttribute('src',yelloWEnmey) ;

					border.push(yelloWEnmey) ;

					ele.setAttribute('id',"yelloWEnmey") ;

					ele.position = "absolute" ;

					container.appendChild(ele) ;	
				}

				else if (i==8 && j==27)                              //red Enemy position
				{
					var ele = document.createElement('img') ;

					ele.setAttribute('src',redEnmey) ;

					border.push(redEnmey) ;

					ele.setAttribute('id',"redEnmey") ;

					ele.position = "absolute" ;

					container.appendChild(ele) ;	
				}

				
				else{
																		//sugar position
				var ele = document.createElement('img') ;

				ele.setAttribute('src',blockName) ;

				border.push(blockName);

				ele.setAttribute('id',"block"+blockCounter) ;

				ele.position = "absolute" ;

				blockCounter++;

				container.appendChild(ele) ;

				 }

			}

			else
			{
				var ele = document.createElement('img') ;

				ele.setAttribute('src',spaceName) ;

				border.push(spaceName) ;

				ele.setAttribute('id',"space"+spaceCounter) ;

				ele.position = "absolute" ;

				spaceCounter++;

				container.appendChild(ele) ;
			}
			
		}

	}


}



	