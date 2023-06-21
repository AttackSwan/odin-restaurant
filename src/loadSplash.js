import hatSVG from "./images/hat.svg";
import moSVG from "./images/moustache.svg";

function loadSplash() {
	const main = document.querySelector(".main");

	const blocking = document.createElement("div");
	blocking.classList.add("blocking");

	const hat = new Image();
	hat.src = hatSVG;
	hat.alt = "Image of a sombrero";
	hat.classList.add("filter-shadow");

	const splashText = document.createElement("p");
	splashText.textContent = "El Rincón Mexicano";

	const moustache = new Image();
	moustache.src = moSVG;
	moustache.alt = "Image of a moustache";
	moustache.classList.add("filter-shadow");

	blocking.append(hat, splashText, moustache);
	main.appendChild(blocking);
}

export default loadSplash;
