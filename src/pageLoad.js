import "./reset.css";
import "./styles.css";

import loadHeader from "./loadHeader.js";
import loadSplash from "./loadSplash";
import loadFooter from "./loadFooter";
import loadMenu from "./loadMenu.js";
import loadContact from "./loadContact";
import loadAbout from "./loadAbout";
import createDiv from "./utility.js";

function pageLoad() {
	const content = document.getElementById("content");

	const header = createDiv("header");
	const main = createDiv("main");
	const footer = createDiv("footer");

	content.append(header, main, footer);

	loadHeader();
	// loadSplash();
	loadMenu();
	loadFooter();
}

export default pageLoad;
