function myMove() {
	var audio = new Audio("snake.mp3");  
	audio.play();						/* plays audio file*/
	var elem = document.getElementById("animate");   
	var pos = -660;
	var id = setInterval(frame, 4.85);  /* sets the speed of animation using setInterval function */
	function frame() {
		if (pos == 1500) {             /* animation keeps running until this position */
		clearInterval(id);
		}	
		else {
			pos++; 
			elem.style.left = pos + 'px';  /* moves image left */
		}
	}
}
function myMove2() {
	var elem2 = document.getElementById("animate2");   
	var pos2 = 0;
	var id2 = setInterval(frame, 5);  /* sets the speed of animation using setInterval function */
	function frame() {
		if (pos2 == 1500) {          /* animation keeps running until this position */
		clearInterval(id2);
		}	
		else {
			pos2++; 
			elem2.style.left = pos2 + 'px';  /* moves image left */
		}
	}
}
function start() {
  myMove();
  myMove2();
}
start();                 /* runs both animations simultaneously */
