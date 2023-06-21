import githubSVG from "./images/github.svg";
import brandSVG from "./images/hat.svg";
import createDiv from "./utility.js";

function loadHeader() {
	const headerDiv = document.querySelector(".header");

	const branding = createDiv("branding");
	const tabs = createDiv("tabs");
	const github = createDiv("github");
	headerDiv.append(branding, tabs, github);

	function loadBranding() {
		const branding = document.querySelector(".branding");

		const brandingIcon = new Image();
		brandingIcon.src = brandSVG;
		brandingIcon.alt = "Sombrero Icon";

		branding.appendChild(brandingIcon);
	}

	function loadTabs() {
		const tabs = document.querySelector(".tabs");

		function createTabButton(buttonText) {
			const tabButton = document.createElement("button");
			tabButton.classList.add("tabButton");
			tabButton.textContent = buttonText;
			return tabButton;
		}

		const menu = createTabButton("Menu");
		const contact = createTabButton("Contact");
		const about = createTabButton("About");

		tabs.append(menu, contact, about);
	}

	function loadGithub() {
		const githubDiv = document.querySelector(".github");

		const githubLink = document.createElement("a");
		githubLink.classList.add("githubLinks");
		githubLink.href = "https://github.com/AttackSwan/";
		githubLink.target = "_blank";

		const githubIcon = new Image();
		githubIcon.src = githubSVG;
		githubIcon.alt = "Github profile icon";
		githubIcon.classList.add("filter-white");

		const githubUsername = document.createElement("p");
		githubUsername.textContent = "AttackSwan";

		githubLink.appendChild(githubIcon);
		githubLink.appendChild(githubUsername);
		githubDiv.appendChild(githubLink);
	}

	loadBranding();
	loadTabs();
	loadGithub();
}

export default loadHeader;
