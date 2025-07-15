import * as styles from "../styles/carousel.module.css";

class Carousel {
	#id;
	#arr;
	#currentIndex;

	constructor(newArr) {
		this.#id = crypto.randomUUID();
		this.#arr = [...newArr];
		this.#currentIndex = 0;
	}

	get id() {
		return this.#id;
	}

	get arr() {
		return [...this.#arr];
	}

	goLeft() {
		const size = this.#arr.length;
		if (size === 1) return;

		if (this.#currentIndex === 0) {
			this.#currentIndex = size - 1;
		} else {
			this.#currentIndex -= 1;
		}

		const items = document.getElementsByClassName(`item:${this.#id}`);
		const index = this.#currentIndex;

		items[index]?.scrollIntoView({
			inline: "center",
			behavior: "smooth",
			block: "center",
		});
	}
	goRight() {
		const size = this.#arr.length;
		if (size === 1) return;

		if (this.#currentIndex === size - 1) {
			this.#currentIndex = 0;
		} else {
			this.#currentIndex += 1;
		}

		const items = document.getElementsByClassName(`item:${this.#id}`);
		const index = this.#currentIndex;

		items[index]?.scrollIntoView({
			inline: "center",
			behavior: "smooth",
			block: "center",
		});
	}
}

function createCarousel(items) {
	const carousel = new Carousel(items);

	const carouselContainer = document.createElement("div");
	carouselContainer.id = carousel.id;
	carouselContainer.className = styles.carousel;

	const leftBtn = document.createElement("button");
	leftBtn.className = styles.left;

	const pLeft = document.createElement("p");
	pLeft.textContent = "⏴";

	leftBtn.appendChild(pLeft);

	const rightBtn = document.createElement("button");
	rightBtn.className = styles.right;

	const pRight = document.createElement("p");
	pRight.textContent = "⏵";

	rightBtn.appendChild(pRight);

	leftBtn.addEventListener("click", () => {
		carousel.goLeft();
	});

	rightBtn.addEventListener("click", () => {
		carousel.goRight();
	});

	const ul = document.createElement("ul");

	carousel.arr.forEach(item => {
		const li = document.createElement("li");
		li.id = `${carousel.id}-${item.id}`;
		li.className = `item:${carousel.id}`;

		const h3 = document.createElement("h3");
		h3.textContent = item.title;
		h3.innerHTML = h3.textContent.split(" ").join("<br>");

		const button = document.createElement("button");
		button.textContent = item.buttonTitle;

		const img = document.createElement("img");
		img.src = item.img;

		li.append(h3, button, img);

		ul.appendChild(li);
	});

	carouselContainer.append(leftBtn, ul, rightBtn);

	return carouselContainer;
}

export default createCarousel;
