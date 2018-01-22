var container = document.getElementById("container");

createBorder();


function createBorder()
{	

	var startPointX = 150 ;

	var startPointY = 0 ;

	for( var i = 0 ; i < 10 ; i++)
	{

		var ele = document.createElement('img') ;

		ele.src="img/wall.gif" ;

		//ele.marginLeft=startPointX+'px' ;

		//ele.marginTop = startPointY+'px' ;

		container.appendChild(ele) ;

		//startPointX +=10 ; //startPointY +=10 ;

	}

	/*for( var i = 0 ; i < 2 ; i++)
	{

		var ele = document.createElement('img') ;

		ele.src="img/wall.gif" ;

		//ele.marginLeft=startPointX+'px' ;

		ele.style.marginBottom = startPointY+'px' ;

		console.log(ele.marginbottom) ;

		container.appendChild(ele) ;

		//startPointX +=10 ; 

		startPointY +=10 ;

	}*/

	// for( var i = 0 ; i < 29 ; i++)
	// {

	// 	var ele = document.createElement('img') ;

	// 	ele.src="img/wall.gif" ;

	// 	//ele.marginLeft=startPointX+'px' ;

	// 	ele.style.marginTop = 280+'px' ;

	// 	console.log(ele.marginbottom) ;

	// 	container.appendChild(ele) ;

	// 	//startPointX +=10 ; 

	// 	//startPointY +=100 ;

	// }

	

	

	

	

	

}