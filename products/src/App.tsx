import React, { useState } from "react";
import { Product } from "./types/product";
import ProductList from "./components/ProductList/ProductList";
import AddProduct from "./components/AddProduct/AddProduct";
import Counter from "./components/Counter/Counter";

const App: React.FC = () => {
  // const [counter, setCounter] = useState<number>(0);
  const [productList,setProductlist] = useState<Product[]>( [
    {
      name: "shoe",
      price: 7,
      id: "1",
    },
    {
      name: "hat",
      price: 17,
      id: "2",
    },
    {
      name: "shirt",
      price: 44,
      id: "3",
    },
  ]);

  const addNewProduct = (name: string,price:number)=>{
    const temp: Product = {name,price, id: productList.length+1+""}
    setProductlist((prev)=>[...prev,temp])
  }

  // const handleIncrease = () => {
  //   setCounter((prev) => prev + 1);
  // };
  // const handleDecrease = () => {
  //   setCounter((prev) => prev - 1);
  // };
  return (
    <>
      <ProductList productList={productList} />
      <AddProduct addNewProduct = {addNewProduct} />
      {/* <Counter value={counter} increaseCounter={handleIncrease} decreaseCounter={handleDecrease}/> */}
    </>
  );
};

export default App;
