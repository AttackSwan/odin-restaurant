import createDiv from "./utility";

function loadMenu() {
	const main = document.querySelector(".main");
	const container = createDiv("menu");

	const menuItems = [
		{
			name: "Tacos al Pastor",
			price: "12.99",
			description:
				"Marinated pork cooked on a vertical spit, served in soft corn tortillas with pineapple, onions, and cilantro.",
		},
		{
			name: "Enchiladas Verdes",
			price: "9.99",
			description:
				"Chicken enchiladas topped with green tomatillo sauce, melted cheese, and a side of Mexican rice and refried beans.",
		},
		{
			name: "Quesadillas de Chorizo",
			price: "14.50",
			description:
				"Chicken enchiladas topped with green tomatillo sauce, melted cheese, and a side of Mexican rice and refried beans.",
		},
		{
			name: "Carne Asada",
			price: "11.75",
			description:
				"Grilled marinated steak served with roasted potatoes, charred peppers, and a side of fresh salsa.",
		},
		{
			name: "Chile Rellenos",
			price: "8.99",
			description:
				"Poblano peppers stuffed with cheese, battered, and fried to perfection, topped with tomato sauce and served with rice and beans.",
		},
		{
			name: "Guacamole Fresco",
			price: "13.25",
			description:
				"Freshly made guacamole with ripe avocados, diced tomatoes, onions, cilantro, lime juice, and served with crispy tortilla chips.",
		},
		{
			name: "Tamales de Pollo",
			price: "10.50",
			description:
				"Homemade chicken tamales steamed in corn husks and served with salsa verde and a side of Mexican rice.",
		},
		{
			name: "Camarones a la Diabla",
			price: "15.99",
			description:
				"Succulent shrimp sautéed in a spicy diabla sauce, served with rice, beans, and warm tortillas.",
		},
		{
			name: "Pozole Rojo",
			price: "12.99",
			description:
				"Traditional Mexican soup with tender pork, hominy, and a flavorful red chile broth, garnished with shredded cabbage, radishes, and lime.",
		},
		{
			name: "Flan de Caramelo",
			price: "9.75",
			description:
				"Creamy caramel custard dessert topped with a rich caramel sauce and a sprinkle of cinnamon.",
		},
	];

	menuItems.forEach((item) => {
		const menuItem = createMenuItem(
			item.name,
			item.price,
			item.description
		);
		container.appendChild(menuItem);
	});

	main.appendChild(container);
}

function createMenuItem(name, price, description) {
	const menuItem = createDiv("menuItem");
	const heading = createHeading(name);
	const value = createPrice(price);
	const text = createText(description);

	menuItem.append(heading, value, text);
	return menuItem;
}

function createHeading(text) {
	const heading = document.createElement("div");
	heading.textContent = text;
	return heading;
}
function createPrice(text) {
	const price = document.createElement("div");
	price.textContent = "$" + text;
	return price;
}
function createText(text) {
	const description = document.createElement("div");
	description.textContent = text;
	return description;
}

export default loadMenu;
