import "./reset.css";
import "./styles.css";

import { loadBranding, loadTabs, loadGithub } from "./loadHeader.js";
import loadSplash from "./loadSplash";

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
	const insta = createDiv("insta");
	const facebook = createDiv("facebook");
	const tiktok = createDiv("tiktok");
	footer.append(TOP, insta, facebook, tiktok);

	content.append(header, main, footer);
	loadSplash();
	loadBranding();
	loadTabs();
	loadGithub();
}

export default pageLoad;
