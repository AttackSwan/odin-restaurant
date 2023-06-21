import "./reset.css";
import "./styles.css";

import { loadBranding, loadTabs, loadGithub } from "./loadHeader.js";
import loadSplash from "./loadSplash";
import loadFooter from "./loadFooter";

function pageLoad() {
	const content = document.getElementById("content");

	const createDiv = (className) => {
		const div = document.createElement("div");
		div.classList.add(className);
		return div;
	};

	// Header
	const header = createDiv("header");
	const branding = createDiv("branding");
	const tabs = createDiv("tabs");
	const github = createDiv("github");
	header.append(branding, tabs, github);

	// Splash
	const main = createDiv("main");
	// main.textContent = "El Rincón Mexicano";

	// Footer
	const footer = createDiv("footer");
	const TOP = createDiv("TOP");
	const socials = createDiv("socials");
	footer.append(TOP, socials);

	content.append(header, main, footer);
	loadSplash();
	loadBranding();
	loadTabs();
	loadGithub();
	loadFooter();
}

export default pageLoad;
