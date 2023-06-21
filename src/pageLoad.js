import "./reset.css";
import "./styles.css";

import loadHeader from "./loadHeader.js";
import loadSplash from "./loadSplash";
import loadFooter from "./loadFooter";
import createDiv from "./utility.js";

function pageLoad() {
	const content = document.getElementById("content");

	const header = createDiv("header");
	const main = createDiv("main");
	const footer = createDiv("footer");

	// const TOP = createDiv("TOP");
	// const socials = createDiv("socials");
	// footer.append(TOP, socials);
	content.append(header, main, footer);

	loadHeader();
	loadSplash();
	loadFooter();
}

export default pageLoad;
