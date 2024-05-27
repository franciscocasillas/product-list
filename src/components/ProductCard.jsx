import PropTypes from "prop-types";

function ProductCard({ name, price = 0, inStock = true }) {
	return (
		<div>
			<h2>{name}</h2>
			<p>Price: ${price.toFixed(2)}</p>
			{inStock ? <button>Add to cart</button> : <p>Out of stock</p>}
		</div>
	);
}

ProductCard.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number,
	inStock: PropTypes.bool,
};

export default ProductCard;
