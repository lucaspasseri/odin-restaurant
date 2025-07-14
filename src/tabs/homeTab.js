import createCarousel from "../components/carousel";
import * as styles from "../styles/homeTab.module.css";

function render(sectionObjArr) {
	const content = document.querySelector("#content");
	content.className = styles.homeTab;
	content.innerHTML = "";

	const h2 = document.createElement("h2");
	h2.textContent = "Explore ours dishes:";

	content.appendChild(h2);

	const ul = document.createElement("ul");

	sectionObjArr.forEach(sectionObj => {
		const li = document.createElement("li");

		const section = document.createElement("section");

		const h3 = document.createElement("h3");
		h3.textContent = sectionObj.title;

		const p = document.createElement("p");
		p.textContent = sectionObj.paragraph;

		// const div = document.createElement("div");
		// div.className = sectionObj.contentDivClassName;

		const carousel = createCarousel(sectionObj.carouselItems);

		// section.append(h3, p, carousel);
		section.appendChild(carousel);
		li.appendChild(section);
		ul.appendChild(li);
	});

	content.appendChild(ul);
}

export default render;
