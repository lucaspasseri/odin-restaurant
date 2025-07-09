function render(categoryObjArr) {
	const content = document.querySelector("#content");
	content.innerHTML = "";

	const h2 = document.createElement("h2");
	h2.textContent = "What we offer:";

	content.appendChild(h2);

	const categoriesDiv = document.createElement("div");
	categoriesDiv.className = "categories";

	const galleryDiv = document.createElement("div");
	galleryDiv.className = "gallery";

	categoryObjArr.forEach(category => {
		const categoryDiv = document.createElement("div");
		categoryDiv.id = category.id;
		categoryDiv.className = "category";
		categoryDiv.style = `background-image: url(${category.img}); background-position: ${category.positioning}`;

		galleryDiv.appendChild(categoryDiv);
	});

	content.appendChild(galleryDiv);
}

export default render;
