import facebookSVG from "./images/facebook.svg";
import instaSVG from "./images/instagram.svg";
import twitterSVG from "./images/twitter.svg";
import createDiv from "./utility.js";

function loadHeader() {
	const footerDiv = document.querySelector(".footer");

	const TOP = createDiv("TOP");
	TOP.textContent = "Created for the Odin Project Javascript course";
	const socials = createDiv("socials");
	footerDiv.append(TOP, socials);

	function createSocialLink(svgLink, altText, linkAddress) {
		const iconLink = document.createElement("a");
		iconLink.href = linkAddress;
		iconLink.target = "_blank";

		const iconImage = new Image();
		iconImage.src = svgLink;
		iconImage.alt = altText;

		iconLink.appendChild(iconImage);

		return iconLink;
	}

	const socialLinks = [
		[facebookSVG, "Facebook Icon", "https://facebook.com"],
		[instaSVG, "Instagram Icon", "https://instagram.com"],
		[twitterSVG, "Twitter Icon", "https://twitter.com"],
	];

	socialLinks.forEach(([svgLink, altText, linkAddress]) => {
		const socialLink = createSocialLink(svgLink, altText, linkAddress);
		socials.appendChild(socialLink);
	});
}

export default loadHeader;
