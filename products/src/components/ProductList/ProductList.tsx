import React from "react";
import "./ProductList.css";
import { Product as ProductType } from "../../types/product";
import Product from "../Product/Product";

// interface PostListProps {
//   productList: ProductType[];
// }

const PostList: React.FC<{productList: ProductType[]}> = ({ productList }) => {
  return <div className="PostList">
    {productList.map((prod)=>{
      return <Product key={prod.id} product={prod}/>
    })}
  </div>;
};

export default PostList;
