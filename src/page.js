import renderHome from "./homeTab";
import renderMenu from "./menuTab";
import renderAbout from "./aboutTab";
import tabContent from "./constants";

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
