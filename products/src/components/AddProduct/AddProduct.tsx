import React, { useState } from "react";

interface AddProductProps {
  addNewProduct : (name: string,price:number)=>void
}

const AddProduct: React.FC<AddProductProps> = ({addNewProduct}) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  return (
    <div>
      <h3>add new product:</h3>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPrice(e.target.value);
        }}
        type="text"
        placeholder="price"
      />
      <button onClick={()=>addNewProduct(name,+price)}>Add</button>
    </div>
  );
};

export default AddProduct;
