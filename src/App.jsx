// importiamo useState per gestire le variabili con stato

import { useState } from "react";

// creiamo due variabili, un array che conterrà la nostra lista ed una variabile product che verrà utilizzata per leggere
// e salvare il nuovo prodotto
export default function App() {
  const [productList, setProductList] = useState([
    "pane",
    "birra",
    "pasta",
    "ceci",
  ]);

  const [product, setProduct] = useState("");

  //funzione per la gestione del Submit (tramite bottone) nel from, "e" è l'evento per la gestione del preventDefault
  const handleSubmit = (e) => {
    e.preventDefault();
    //andiamo a riassegnare al nostro array lista una copia di se stesso (passato come currentState) e l'aggiunta del nuovo prodotto
    setProductList((currentState) => [...currentState, product]);

    //svuotiamo il campo del form dove viene digitato il prodotto in seguito al click del submit
    setProduct("");
  };

  //funzione che gestisce la lettura dal campo di input. Accediamo al valore effettivo del campo tramite la dot notation dell'oggetto "e" (event)
  // il valore sarà accessibile tramite "event.target.value"
  const handleField = (e) => {
    setProduct(e.target.value);
    console.log(product);
  };

  //funzione per la gestione della cancellazione del prodotto, si serve di un'altra funzione che a sua volta va a scansionare l'array
  //dei prodotti passato come array temporaneo  (currentProd) e va a salvare nel nuovo array filtrato solamente i prodotti che NON
  //corrispondono al "productDel" ovvero il prodotto da cancellare. Quando product e productDel corrispondono il filter non salverà
  //quel prodotto. Risulta un array nuovo senza il prodotto che abbiamo selezionato da cancellare
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
