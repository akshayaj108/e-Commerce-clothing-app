import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component.jsx";
import { CartContext } from "../../contexts/cart.contexts";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt="" />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonTypeFromProps={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
