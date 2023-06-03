import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemToCart, clearCartItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const handleAddItem = () => addItemToCart(cartItem);
  const handleRemoveItem = () => removeItemToCart(cartItem);
  const handleClear = () => clearCartItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClear}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
