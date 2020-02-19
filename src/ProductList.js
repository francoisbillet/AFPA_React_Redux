import React from "react";
import Product from "./Product";

const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  if (products.length == 0) {
    fetch(`https://server-ten.now.sh`)
      .then(body => body.json())
      .then(response => {
        // console.log(response);
        setProducts(response);
      });
  }

  return [products];
};

const ProductList = () => {
  const [products] = useProducts();
  //   console.log(products);
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
};
export default ProductList;
