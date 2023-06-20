import "./reset.css";
import "./styles.css";
import githubSVG from "./github.png";

function pageLoad() {
	console.log("pageLoad is called from pageLoad.js");

	document.body.classList.add("body");
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

	// Github
	const github = createDiv("github");

	const githubLink = document.createElement("a");
	githubLink.classList.add("githubLinks");
	githubLink.href = "https://github.com/AttackSwan/";
	githubLink.target = "_blank";

	const githubIcon = new Image();
	githubIcon.src = githubSVG;
	githubIcon.alt = "Github profile icon";
	githubIcon.classList.add("githubIcon");
	githubLink.appendChild(githubIcon);

	const githubUsername = document.createElement("p");
	githubUsername.textContent = "AttackSwan";
	githubLink.appendChild(githubUsername);

	github.appendChild(githubLink);
	header.append(branding, tabs, github);

	// Splash
	const main = createDiv("main");
	main.textContent = "El Rincón Mexicano";

	// Footer
	const footer = createDiv("footer");
	const insta = createDiv("insta");
	const facebook = createDiv("facebook");
	const tiktok = createDiv("tiktok");
	footer.append(insta, facebook, tiktok);

	content.append(header, main, footer);
}

export default pageLoad;
