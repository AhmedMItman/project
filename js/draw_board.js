var container = document.getElementById("container");


var border = [] ; // pacman = p , block = block , sugar = sugar , enemy = enemy , empty = a 

var blockCounter = 0 ;

var sugarCounter = 0 ;

var totalSugar = 0 ;

var blockName = 'img/wall.gif';

var sugarName = 'img/sokar.png'; 	

var facePacmanName = 'img/face.gif';

var backColor = "img/backColor.png";



drawBoard();

function drawBoard() 
{

	if( Object.keys(localStorage).length == 0 )
	{
		localStorage.setItem("user","1");
	}

	else 
	{
		levelNum = localStorage.getItem("user");

		level.innerHTML = " Level : " + levelNum ;
	}
	

	container.innerHTML ="";

	for(var i = 0 ; i < 10;i++)
	{

		for(var j = 0 ; j < 29 ; j++)
		{

			if (j==0 && i==4)
			{


				
				pacy = pacman.createPacman() ;

				border.push('pacman');

				container.appendChild(pacy) ;

				pacmanIndex.x = i ; 

				pacmanIndex.y = j ;



			}

			else if( i ==0 || ( j==0 ) || (i==9 ) || (j==28) ||
			 (i==2  && ((j>=7 && j<=10) || (j>=12 && j<=17) || (j>=19 && j<=22))) ||
			 (i==7 && ((j>=7 && j<=10) || (j>13 && j<16) || (j>=19 && j<=22))) ||
			 ((i>=3 && i<=6) && (j==8 || j==9 || j==14 || j==15 || j==20 || j==21))) // where to put block
			{


				var ele = document.createElement('img') ;

				ele.setAttribute('src',blockName) ;

				//ele.height = 30px;

				border.push("block"+blockCounter);

				ele.setAttribute('id',"block"+blockCounter) ;

				ele.style.position = "relative" ;

				blockCounter++;

				container.appendChild(ele) ;
					
			}

			else
			{

				var ele = document.createElement('img') ;

				ele.setAttribute('src',sugarName) ;

				border.push("sugar"+sugarCounter) ;

				ele.setAttribute('id',"sugar"+sugarCounter) ;

				ele.style.position = "relative" ;

				//ele.style.top = -4 +'px';

				sugarCounter++;

				totalSugar++;

				container.appendChild(ele) ;
			}
			
		}

	}


}