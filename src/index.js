import pageLoad from "./pageLoad.js";
import loadSplash from "./loadSplash.js";
import loadMenu from "./loadMenu.js";
import loadContact from "./loadContact.js";
import loadAbout from "./loadAbout.js";
import hatSVG from "./images/hat.svg";

pageLoad();

// Create listeners
(function createListeners() {
	const tabButtons = document.querySelectorAll(".tabButton");
	tabButtons.forEach((button) => {
		button.addEventListener("click", switchTab);
	});
})();

function switchTab(e) {
	const tabChoice = e.target.textContent;
	const tabButtons = document.querySelectorAll(".tabButton");

	clearMain();
	addSombrero(e);

	switch (tabChoice) {
		case "Menu":
			loadMenu();
			break;
		case "Contract":
			loadContract();
			break;
		case "About":
			loadAbout();
			break;
	}
}

function clearMain() {
	const mainDIV = document.querySelector(".main");
	mainDIV.innerHTML = "";
}

function addSombrero(e) {
	//Remove any existing sombreros
	const existingSombreros = document.querySelectorAll(".tabButton>img");
	existingSombreros.forEach((sombrero) => {
		sombrero.remove();
	});

	const sombreroImg = document.createElement("img");
	sombreroImg.src = hatSVG;
	sombreroImg.alt = "Image of a sombrero";

	e.target.appendChild(sombreroImg);
}
