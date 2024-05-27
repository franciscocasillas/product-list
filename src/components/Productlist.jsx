import { useState } from "react";

function ProductList() {
	const [products, setProducts] = useState([
		{ name: "jeans", price: 500, inStock: true },
		{ name: "shorts", price: 200, inStock: false },
		{ name: "shirt", price: 350, inStock: true },
	]);

	return (
		<ul>
			{products.map((product) => (
				<ProductCard key={product.name} {...product} />
			))}
		</ul>
	);
}

export default ProductList;
