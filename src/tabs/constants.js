import appetizersImg from "../imgs/foodCategory/appetizers.jpg";
import chickenImg from "../imgs/foodCategory/chicken.jpg";
import steaksImg from "../imgs/foodCategory/steaks.jpg";
import burgersImg from "../imgs/foodCategory/burgers.jpg";
import dessertsImg from "../imgs/foodCategory/desserts.jpg";
import nonAlcoholicBeverageImg from "../imgs/foodCategory/non-alcoholic.jpg";
import cocktailImg from "../imgs/foodCategory/cocktail.jpg";

import restaurantHistory from "../imgs/aboutSection/fire.jpg";
import restaurantMenu from "../imgs/aboutSection/menu.jpg";
import restaurantOpen from "../imgs/aboutSection/open.jpg";
import restaurantLocation from "../imgs/aboutSection/location.jpg";

import plate1 from "../imgs/home/plate1.jpg";
import plate2 from "../imgs/home/plate2.jpg";
import plate3 from "../imgs/home/plate3.jpg";
import plate4 from "../imgs/home/plate4.jpg";

import promo1 from "../imgs/home/promo1.jpg";
import promo2 from "../imgs/home/promo2.jpg";
import promo3 from "../imgs/home/promo3.jpg";
import promo4 from "../imgs/home/promo4.jpg";

const tabContent = {
	homeSectionArray: [
		{
			id: 0,
			title: "News",
			paragraph: "(About this delicious food)",
			contentDivClassName: "news-content",
			carouselItems: [
				{
					id: 0,
					title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
					buttonTitle: "Learn more",
					img: plate1,
				},
				{
					id: 1,
					title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
					buttonTitle: "Learn more",
					img: plate2,
				},
				{
					id: 2,
					title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
					buttonTitle: "Learn more",
					img: plate3,
				},
				{
					id: 3,
					title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
					buttonTitle: "Learn more",
					img: plate4,
				},
			],
		},
		{
			id: 1,
			title: "Promotions",
			buttonTitle: "Hot",
			paragraph: "(About this amazing promotion)",
			contentDivClassName: "promotions-content",
			carouselItems: [
				{
					id: 0,
					title: "Sed ut perspiciatis unde omnis iste natus.",
					buttonTitle: "Buy now",
					img: promo1,
				},
				{
					id: 1,
					title: "Sed ut perspiciatis unde omnis iste natus.",
					buttonTitle: "Buy now",
					img: promo2,
				},
				{
					id: 3,
					title: "Sed ut perspiciatis unde omnis iste natus.",
					buttonTitle: "Buy now",
					img: promo3,
				},
				{
					id: 4,
					title: "Sed ut perspiciatis unde omnis iste natus.",
					buttonTitle: "Buy now",
					img: promo4,
				},
			],
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
			img: restaurantHistory,
			imgAlt: "Odin Restaurant Story",
		},
		{
			title: "OUR MENU",
			subtitle: "Made with love and lot of sauce.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi distinctio saepe delectus nesciunt, sunt ipsam veniam consectetur minima, aliquam non facere rem placeat laborum pariatur provident! Impedit, dolorem consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ad error cum possimus corporis magni id facilis maxime molestiae, ut libero ducimus et ex, minus laboriosam enim delectus veritatis modi.",
			img: restaurantMenu,
			imgAlt: "Our Menu",
		},
		{
			title: "OUR OPENING HOURS",
			subtitle: "Made with love and lot of sauce.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi distinctio saepe delectus nesciunt, sunt ipsam veniam consectetur minima, aliquam non facere rem placeat laborum pariatur provident! Impedit, dolorem consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ad error cum possimus corporis magni id facilis maxime molestiae, ut libero ducimus et ex, minus laboriosam enim delectus veritatis modi.",
			img: restaurantOpen,
			imgAlt: "Odin Restaurant Opening Hours",
		},
		{
			title: "OUR LOCATION",
			subtitle: "Made with love and lot of sauce.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi distinctio saepe delectus nesciunt, sunt ipsam veniam consectetur minima, aliquam non facere rem placeat laborum pariatur provident! Impedit, dolorem consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ad error cum possimus corporis magni id facilis maxime molestiae, ut libero ducimus et ex, minus laboriosam enim delectus veritatis modi.",
			img: restaurantLocation,
			imgAlt: "Odin Restaurant Location",
		},
	],
};

export default tabContent;
