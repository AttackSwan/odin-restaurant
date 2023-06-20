import "./styles.css";

function pageLoad() {
	console.log("pageLoad is called from pageLoad.js");

	document.body.classList.add("body");
	const content = document.getElementById("content");

	const container = document.createElement("div");
	container.classList.add("container");

	const header = document.createElement("div");
	header.classList.add("header");

	const main = document.createElement("div");
	main.classList.add("main");

	const footer = document.createElement("div");
	footer.classList.add("footer");

	container.appendChild(header);
	container.appendChild(main);
	container.appendChild(footer);
	content.appendChild(container);
}

export default pageLoad;
