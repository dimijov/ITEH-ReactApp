import "./App.css";
import NavBar from "./components/NavBar";
import Items from "./components/Items";
import { Cart } from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //let cartNum = 0;
  const [cartNum, increaseCartNum] = useState(0);
     const [cartItems, addToCart] = useState([]);
     const [products] = useState([
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
  ]);

  function refreshCart() {
     let newItems = products.filter((prod) => prod.amount > 0);
     addToCart(newItems);
}
function addItem(name, id) {
     console.log("Dodat proizvod: " + name);
     increaseCartNum(cartNum + 1);
     // console.log(cartNum);
     products.forEach((prod) => {
          if (prod.id === id) {
               prod.amount++;
          }
     });
     refreshCart();
}

return (
     <BrowserRouter className="App">
          <NavBar cartNum={cartNum} />
          <Routes>
               <Route
                    path="/"
                    element={
                         <Items products={products} addItem={addItem} />
                    }
               />
               <Route
                    path="/cart"
                    element={<Cart products={cartItems} />}
               />
          </Routes>
     </BrowserRouter>
);
}

export default App;