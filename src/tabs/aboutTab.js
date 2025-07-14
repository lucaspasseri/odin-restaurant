import * as styles from "../styles/aboutTab.module.css";

function render(sectionObjArr) {
	const content = document.querySelector("#content");
	content.className = styles.aboutTab;
	content.innerHTML = "";

	const h2 = document.createElement("h2");
	h2.textContent = "All about Odin Restaurant:";

	content.appendChild(h2);

	const ul = document.createElement("ul");

	sectionObjArr.forEach(sectionObj => {
		const li = document.createElement("li");

		const section = document.createElement("section");

		const textContainer = document.createElement("div");
		textContainer.className = styles.textContainer;

		const titleContainer = document.createElement("div");

		const title = document.createElement("h3");
		title.textContent = sectionObj.title;

		const subtitle = document.createElement("p");
		subtitle.textContent = sectionObj.subtitle;

		titleContainer.append(title, subtitle);

		const text = document.createElement("p");
		text.textContent = sectionObj.text;

		textContainer.append(titleContainer, text);

		const img = document.createElement("img");
		img.src = sectionObj.img;
		img.alt = sectionObj.imgAlt;
		img.width = 360;
		img.height = 240;

		section.append(textContainer, img);
		li.appendChild(section);
		ul.appendChild(li);
	});

	content.appendChild(ul);
}

export default render;
