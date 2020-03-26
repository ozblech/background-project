var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randBtn = document.getElementById("random")

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandom() {
	color1.value = createRandom()
	color2.value = createRandom()
	setGradient()
}

function createRandom() {
	var red = Math.round(Math.random()*255)
	var green = Math.round(Math.random()*255)
	var blue = Math.round(Math.random()*255)
	// var rgb = "rgb(" + red + "," + green + "," + blue + ")"
	return rgbToHex(red,green,blue)
}

function integerToHex(i) {
	var hex = i.toString(16)
	return hex.length ==1 ? "0" + hex : hex 
}

function rgbToHex(r,g,b) {
	return "#" + integerToHex(r) + integerToHex(g) + integerToHex(b)
}


setGradient();



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randBtn.addEventListener("click", setRandom);