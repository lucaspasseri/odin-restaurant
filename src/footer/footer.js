import * as styles from "../styles/homeFooter.module.css";

function render(refs) {
	const footer = document.querySelector("#footer");
	footer.innerHTML = "";
	footer.className = styles.homeFooter;

	const h5 = document.createElement("h5");
	h5.textContent = "Photos used in this tab:";

	const ul = document.createElement("ul");

	refs.forEach(refObj => {
		const li = document.createElement("li");

		li.innerHTML = refObj.content;
		ul.appendChild(li);
	});

	footer.append(h5, ul);
}

export default render;
