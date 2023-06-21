import facebookSVG from "./images/facebook.svg";
import instaSVG from "./images/instagram.svg";
import twitterSVG from "./images/twitter.svg";

function loadHeader() {
	const TOPdiv = document.querySelector(".TOP");
	const socialsDiv = document.querySelector(".socials");

	TOPdiv.textContent = "Created for the Odin Project Javascript course";

	function createSocialLink(svgLink, altText, linkAddress) {
		const iconLink = document.createElement("a");
		iconLink.href = linkAddress;
		iconLink.target = "_blank";

		const iconImage = new Image();
		iconImage.src = svgLink;
		iconImage.alt = altText;
		iconImage.classList.add("filter-white");

		iconLink.appendChild(iconImage);

		return iconLink;
	}

	const socials = [
		[facebookSVG, "Facebook Icon", "https://facebook.com"],
		[instaSVG, "Instagram Icon", "https://instagram.com"],
		[twitterSVG, "Twitter Icon", "https://twitter.com"],
	];

	socials.forEach(([svgLink, altText, linkAddress]) => {
		const socialLink = createSocialLink(svgLink, altText, linkAddress);
		socialsDiv.appendChild(socialLink);
	});
}

export default loadHeader;
