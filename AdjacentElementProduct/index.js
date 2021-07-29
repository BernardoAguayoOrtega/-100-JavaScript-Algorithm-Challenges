const input = [3, 6, -2, -5, 7, 3];

const AdjacentElementsProduct = (elements = []) => {
	const products = elements
		.map((element, index) => {
			if (index < elements.length - 1) {
				const product = element * elements[index + 1];
				return product;
			}
		})
		.sort((a, b) => b - a);

	return products[0];
};

console.log(AdjacentElementsProduct(input));
