import appetizersImg from "./imgs/foodCategory/appetizers.jpg";
import chickenImg from "./imgs/foodCategory/chicken.jpg";
import steaksImg from "./imgs/foodCategory/steaks.jpg";
import burgersImg from "./imgs/foodCategory/burgers.jpg";
import dessertsImg from "./imgs/foodCategory/desserts.jpg";
import nonAlcoholicBeverageImg from "./imgs/foodCategory/non-alcoholic.jpg";
import cocktailImg from "./imgs/foodCategory/cocktail.jpg";

import renderHome from "./homeTab";
import renderMenu from "./menuTab";

const sectionObjArr = [
	{
		id: 0,
		title: "News",
		paragraph: "(About this delicious food)",
		contentDivClassName: "news-content",
	},
	{
		id: 1,
		title: "Promotions",
		paragraph: "(About this delicious food)",
		contentDivClassName: "promotions-content",
	},
	{
		id: 2,
		title: "Popular",
		paragraph: "(About this delicious food)",
		contentDivClassName: "popular-content",
	},
];

const categoryObjArr = [
	{ id: 0, title: "appetizers", img: appetizersImg, positioning: "center 65%" },
	{ id: 1, title: "chicken", img: chickenImg, positioning: "center 35%" },
	{ id: 2, title: "steaks", img: steaksImg, positioning: "center 10%" },
	{ id: 3, title: "burgers", img: burgersImg, positioning: "center" },
	{ id: 4, title: "desserts", img: dessertsImg, positioning: "center 70%" },
	{
		id: 5,
		title: "Non-alcoholic Beverages",
		img: nonAlcoholicBeverageImg,
		positioning: "center 85%",
	},
	{ id: 6, title: "Cocktails", img: cocktailImg, positioning: "center 40%" },
];

function init() {
	const homeBtn = document.querySelector("#home-btn");
	const menuBtn = document.querySelector("#menu-btn");
	const aboutBtn = document.querySelector("#about-btn");

	homeBtn.addEventListener("click", () => {
		renderHome(sectionObjArr);
	});
	menuBtn.addEventListener("click", () => {
		// const content = document.querySelector("#content");
		// content.innerHTML = "";
		// const h2 = document.createElement("h2");
		// h2.textContent = "What we offer:";
		// content.appendChild(h2);
		renderMenu(categoryObjArr);
	});
	aboutBtn.addEventListener("click", () => {
		const content = document.querySelector("#content");
		content.innerHTML = "";

		const h2 = document.createElement("h2");
		h2.textContent = "About us:";

		content.appendChild(h2);
	});

	// renderHome(sectionObjArr);
	renderMenu(categoryObjArr);
}

export default init;
