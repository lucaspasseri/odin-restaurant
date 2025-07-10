import appetizersImg from "./imgs/foodCategory/appetizers.jpg";
import chickenImg from "./imgs/foodCategory/chicken.jpg";
import steaksImg from "./imgs/foodCategory/steaks.jpg";
import burgersImg from "./imgs/foodCategory/burgers.jpg";
import dessertsImg from "./imgs/foodCategory/desserts.jpg";
import nonAlcoholicBeverageImg from "./imgs/foodCategory/non-alcoholic.jpg";
import cocktailImg from "./imgs/foodCategory/cocktail.jpg";
import restaurantBuilding from "./imgs/aboutSection/restaurant-building.png";
import restaurantMenu from "./imgs/aboutSection/restaurant-menu.jpg";

const tabContent = {
	homeSectionArray: [
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
	],
	menuCategoryArray: [
		{
			id: 0,
			title: "Appetizers",
			img: appetizersImg,
			positioning: "center 65%",
		},
		{ id: 1, title: "Chicken", img: chickenImg, positioning: "center 35%" },
		{ id: 2, title: "Steaks", img: steaksImg, positioning: "center 10%" },
		{ id: 3, title: "Burgers", img: burgersImg, positioning: "center" },
		{ id: 4, title: "Desserts", img: dessertsImg, positioning: "center 70%" },
		{
			id: 5,
			title: "Beverages",
			img: nonAlcoholicBeverageImg,
			positioning: "center 85%",
		},
		{ id: 6, title: "Cocktails", img: cocktailImg, positioning: "center 40%" },
	],
	aboutSectionArray: [
		{
			title: "OUR STORY",
			subtitle: "Made with love and lot of sauce.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi distinctio saepe delectus nesciunt, sunt ipsam veniam consectetur minima, aliquam non facere rem placeat laborum pariatur provident! Impedit, dolorem consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ad error cum possimus corporis magni id facilis maxime molestiae, ut libero ducimus et ex, minus laboriosam enim delectus veritatis modi.",
			img: restaurantBuilding,
			imgAlt: "Odin Restaurant Building",
		},
		{
			title: "OUR MENU",
			subtitle: "Made with love and lot of sauce.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi distinctio saepe delectus nesciunt, sunt ipsam veniam consectetur minima, aliquam non facere rem placeat laborum pariatur provident! Impedit, dolorem consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ad error cum possimus corporis magni id facilis maxime molestiae, ut libero ducimus et ex, minus laboriosam enim delectus veritatis modi.",
			img: restaurantMenu,
			imgAlt: "Our Menu",
		},
		{
			title: "OUR SCHEDULES",
			subtitle: "Made with love and lot of sauce.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi distinctio saepe delectus nesciunt, sunt ipsam veniam consectetur minima, aliquam non facere rem placeat laborum pariatur provident! Impedit, dolorem consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ad error cum possimus corporis magni id facilis maxime molestiae, ut libero ducimus et ex, minus laboriosam enim delectus veritatis modi.",
			img: restaurantBuilding,
			imgAlt: "Odin Restaurant Building",
		},
		{
			title: "OUR LOCATION",
			subtitle: "Made with love and lot of sauce.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi distinctio saepe delectus nesciunt, sunt ipsam veniam consectetur minima, aliquam non facere rem placeat laborum pariatur provident! Impedit, dolorem consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ad error cum possimus corporis magni id facilis maxime molestiae, ut libero ducimus et ex, minus laboriosam enim delectus veritatis modi.",
			img: restaurantBuilding,
			imgAlt: "Odin Restaurant Building",
		},
	],
};

export default tabContent;
