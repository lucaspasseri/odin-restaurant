import * as styles from "./styles/menuTab.module.css";

function render(categoryObjArr) {
	const content = document.querySelector("#content");
	content.innerHTML = "";

	const h2 = document.createElement("h2");
	h2.textContent = "What we offer:";

	content.appendChild(h2);

	const categoriesDiv = document.createElement("div");
	categoriesDiv.className = "categories";

	const galleryDiv = document.createElement("div");
	galleryDiv.className = styles.gallery;

	categoryObjArr.forEach(category => {
		const categoryDiv = document.createElement("div");
		categoryDiv.id = category.id;
		categoryDiv.className = styles.category;
		categoryDiv.style = `background-image: url(${category.img}); background-position: ${category.positioning}`;

		const darkLayer = document.createElement("div");
		darkLayer.className = styles.darkLayer;

		const title = document.createElement("p");
		title.textContent = category.title;

		darkLayer.appendChild(title);
		categoryDiv.appendChild(darkLayer);

		galleryDiv.appendChild(categoryDiv);
	});

	content.appendChild(galleryDiv);
}

export default render;
