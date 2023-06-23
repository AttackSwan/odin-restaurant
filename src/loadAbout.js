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

	const aboutText = document.createElement("p");
	const hoursText = document.createElement("p");
	const takeoutText = document.createElement("p");
	const deliveryText = document.createElement("p");

	aboutText.textContent =
		"Step into our warm and inviting ambiance, adorned with colorful décor that reflects the spirit of Mexico. Immerse yourself in the lively atmosphere as our friendly staff takes care of your every need. Whether you're celebrating a special occasion, enjoying a casual lunch, or looking to unwind with friends over margaritas, El Rincón Mexicano is the perfect destination.";
	hoursText.textContent = "OPEN: Tues-Sun - 12pm to 9pm";
	takeoutText.textContent = "Takeout available";
	deliveryText.textContent = "No third party delivery";

	blocking.append(
		hatImg,
		hoursText,
		aboutText,
		takeoutText,
		deliveryText,
		moImg
	);

	main.appendChild(blocking);
}

export default loadAbout;
