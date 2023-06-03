import { useContext } from "react";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.contexts";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonTypeFromProps="inverted" onClick={addProductToCart}>
        Add to Card
      </Button>
    </div>
  );
};

export default ProductCard;
