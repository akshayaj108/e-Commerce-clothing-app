import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log("CategoriesMap from shop component--", categoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        console.log("from shop comp title- ", title);
        const products = categoriesMap[title];
        console.log("from shop comp Products- ", products);
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default Shop;
