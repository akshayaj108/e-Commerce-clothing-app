import "./checkout-item.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";
import {
  CheckoutContainer,
  ImageComp,
  SpanComp,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";
import { Price } from "../product-card/product-card.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemToCart, clearCartItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const handleAddItem = () => addItemToCart(cartItem);
  const handleRemoveItem = () => removeItemToCart(cartItem);
  const handleClear = () => clearCartItemFromCart(cartItem);

  return (
    <CheckoutContainer>
      <ImageComp>
        <img src={imageUrl} alt={name} />
      </ImageComp>
      <SpanComp>{name}</SpanComp>
      <Quantity>
        <Arrow onClick={handleRemoveItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddItem}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={handleClear}>&#10005;</RemoveButton>
    </CheckoutContainer>
  );
};

export default CheckoutItem;
