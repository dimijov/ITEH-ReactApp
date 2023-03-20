import "./App.css";
import NavBar from "./components/NavBar";
import Items from "./components/Items";
import { useState } from "react";

function App() {
  //let cartNum = 0;
  const [cartNum, addInCart] = useState(0);
  const products = [
       {
            id: 1,
            name: "COOL case",
            price: "1.00 $",
            image: "https://csgocases.com/uploads/gallery/oryginal/58d4eef780c643cf6ee2b4d90353a715d2c66e56.png",
            amount: 0,
       },
       {
            id: 2,
            name: "WINTER case",
            price: "0.80 $",
            image: "https://csgocases.com/uploads/gallery/oryginal/facfa4f431caae8ef91119d55aebefaaa7d04bdd.png",
            amount: 0,
       },
       {
            id: 3,
            name: "VIP case",
            price: "0.50 $",
            image: "https://csgocases.com/uploads/gallery/oryginal/48894adc6076c00817b7e3bf09605dce9fce1600.png",
            amount: 0,
       },
  ];
  function addItem(name) {
       console.log("Dodat proizvod: " + name);
       addInCart(cartNum + 1);
       console.log(cartNum);
  }
  return (
    <div className="App">
         <NavBar cartNum={cartNum} />
         <Items products={products} addItem={addItem} />
    </div>
);
}
export default App;
