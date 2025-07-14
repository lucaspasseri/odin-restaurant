import renderHome from "./tabs/homeTab";
import renderMenu from "./tabs/menuTab";
import renderAbout from "./tabs/aboutTab";
import tabContent from "./tabs/constants";

function init() {
	const homeBtn = document.querySelector("#home-btn");
	const menuBtn = document.querySelector("#menu-btn");
	const aboutBtn = document.querySelector("#about-btn");

	homeBtn.addEventListener("click", () => {
		renderHome(tabContent.homeSectionArray);
	});
	menuBtn.addEventListener("click", () => {
		renderMenu(tabContent.menuCategoryArray);
	});
	aboutBtn.addEventListener("click", () => {
		renderAbout(tabContent.aboutSectionArray);
	});

	renderHome(tabContent.homeSectionArray);
}

export default init;
