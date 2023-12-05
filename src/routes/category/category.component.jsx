import { useParams } from "react-router-dom";
//useParams hook allows us to get the value of params
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  console.log("Getting params value", category);
  //useParams() gives value as an object
  const [products, setProducts] = useState([]);
  const { categoriesMap } = useContext(CategoriesContext);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
