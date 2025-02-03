import { useState } from "react";

export default function App() {
  const [productList, setProductList] = useState([
    "pane",
    "birra",
    "pasta",
    "ceci",
  ]);

  const [product, setProduct] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductList((currentState) => [...currentState, product]);

    setProduct("");
  };

  const handleField = (e) => {
    setProduct(e.target.value);
    console.log(product);
  };

  const handleDelete = (productDel) => {
    setProductList((currentProd) =>
      currentProd.filter((product) => product !== productDel)
    );
  };

  return (
    <>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>
            {product} <button onClick={() => handleDelete(product)}> X </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={product} onChange={handleField} />
        <button type="submit">aggiungi</button>
      </form>
    </>
  );
}
