import "./cart-item.styles.jsx";

import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x {price} RS
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
