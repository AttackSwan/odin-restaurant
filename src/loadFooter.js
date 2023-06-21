import facebookSVG from "./images/facebook.svg";
import instaSVG from "./images/instagram.svg";
import twitterSVG from "./images/twitter.svg";

function loadHeader() {
	const TOPdiv = document.querySelector(".TOP");
	const socialsDiv = document.querySelector(".socials");

	TOPdiv.textContent = "Created for the Odin Project Javascript course";

	const facebook = socialCreator(
		facebookSVG,
		"Facebook Icon",
		"https://facebook.com"
	);

	const insta = socialCreator(
		instaSVG,
		"Instagram Icon",
		"https://instagram.com"
	);

	const twitter = socialCreator(
		twitterSVG,
		"Twitter Icon",
		"https://twitter.com"
	);

	function socialCreator(svgLink, altText, linkAddress) {
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

	socialsDiv.append(facebook, insta, twitter);
}

export default loadHeader;
