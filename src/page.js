import renderHome from "./tabs/homeTab";
import renderMenu from "./tabs/menuTab";
import renderAbout from "./tabs/aboutTab";
import tabContent from "./tabs/constants";
import renderFooter from "./footer/footer";
import footerContent from "./footer/constants";

function init() {
	const homeBtn = document.querySelector("#home-btn");
	const menuBtn = document.querySelector("#menu-btn");
	const aboutBtn = document.querySelector("#about-btn");

	homeBtn.addEventListener("click", () => {
		renderHome(tabContent.homeSectionArray);
		renderFooter(footerContent.homeRefs);
	});
	menuBtn.addEventListener("click", () => {
		renderMenu(tabContent.menuCategoryArray);
		renderFooter(footerContent.menuRefs);
	});
	aboutBtn.addEventListener("click", () => {
		renderAbout(tabContent.aboutSectionArray);
		renderFooter(footerContent.aboutRefs);
	});

	renderHome(tabContent.homeSectionArray);
	renderFooter(footerContent.homeRefs);
}

export default init;
