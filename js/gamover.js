var btStart = document.getElementById("btStart");

btStart.addEventListener('click',function(){

	localStorage.setItem("user","1");
	window.location.replace("main.html");

});