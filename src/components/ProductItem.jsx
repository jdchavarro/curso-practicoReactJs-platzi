import React, { useContext, useState } from 'react';
import AppContext from '@context/AppContext'
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg'
import addedToCartImage from '@icons/bt_added_to_cart.svg';

const ProductItem = ({product}) => {
	const [ cartImage, setCartImage ] = useState(addToCartImage);
	const { state, addToCart, removeFromCart } = useContext(AppContext);

	const productInCart = (item, id) => !!state.cart.find(item => item.id === id);
	
	const handleClick = item => {
		if(productInCart(item, item.id)) {
			removeFromCart(item)
			setCartImage(addToCartImage)
		} else {
			addToCart(item);
			setCartImage(addedToCartImage)
		}
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={cartImage} alt="add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
