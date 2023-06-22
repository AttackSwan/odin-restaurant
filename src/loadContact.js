import createDiv from "./utility";
import phoneSVG from "./images/phone.svg";
import locationSVG from "./images/location.svg";
import mapJPG from "./images/map.jpg";

function loadContact() {
	const main = document.querySelector(".main");

	const container = createDiv("contact");
	const phoneDiv = createDiv("phone");
	const locationDiv = createDiv("location");

	const phoneImg = new Image();
	phoneImg.src = phoneSVG;
	phoneImg.alt = "Phone icon";

	const locationImg = new Image();
	locationImg.src = locationSVG;
	locationImg.alt = "House icon";

	const phoneText = document.createElement("p");
	const locationText = document.createElement("p");
	phoneText.textContent = "(323) 123-456-7890";
	locationText.textContent = "123 Spicy Street, Los Angeles, California";

	phoneDiv.append(phoneImg, phoneText);
	locationDiv.append(locationImg, locationText);

	const mapImg = new Image();
	mapImg.src = mapJPG;
	mapImg.alt = "Image of location map";
	mapImg.classList.add("map");

	container.append(phoneDiv, locationDiv, mapImg);
	main.appendChild(container);
}

export default loadContact;
