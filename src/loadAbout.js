import createDiv from "./utility";
import hatSVG from "./images/hat.svg";
import moSVG from "./images/moustache.svg";

function loadAbout() {
	const main = document.querySelector(".main");

	const blocking = createDiv("about");

	const hatImg = new Image();
	hatImg.src = hatSVG;
	hatImg.alt = "Image of a sombrero";

	const moImg = new Image();
	moImg.src = moSVG;
	moImg.alt = "Image of a moustache";

	const aboutText1 = document.createElement("p");
	const aboutText2 = document.createElement("p");

	aboutText1.textContent =
		"At El Rincón Mexicano, we take pride in sourcing the finest ingredients to craft our diverse menu. From sizzling fajitas to mouthwatering enchiladas, each dish is prepared with meticulous attention to detail and infused with the bold and authentic flavors that Mexico is renowned for. Whether you're a fan of traditional favorites or eager to explore new taste sensations, our menu offers something for every palate.";

	aboutText2.textContent =
		"Step into our warm and inviting ambiance, adorned with colorful décor that reflects the spirit of Mexico. Immerse yourself in the lively atmosphere as our friendly staff takes care of your every need. Whether you're celebrating a special occasion, enjoying a casual lunch, or looking to unwind with friends over margaritas, El Rincón Mexicano is the perfect destination.";

	blocking.append(hatImg, aboutText1, aboutText2, moImg);

	main.appendChild(blocking);
}

export default loadAbout;
