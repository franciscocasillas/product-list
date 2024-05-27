import { useState } from "react";
import { products } from "../data/products";

function ProductList() {
	const [products, setProducts] = useState(products);

	return (
		<ul>
			{products.map((product) => (
				<ProductCard key={product.name} {...product} />
			))}
		</ul>
	);
}

export default ProductList;
