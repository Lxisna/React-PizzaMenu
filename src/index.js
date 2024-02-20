import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

/*ERROR: elements must be wrapped in an enclosing
 each component can only return exactly one element,not to elements
 <h1>, <pizza/>是两个elements */

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer className="footer" />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "orange",
  //   fontSize: "40px",
  //   textTransform: "uppercase",
  // };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>FAST REACT PIZZA CO.</h1>
    </header>
  );
}

//write components as functions
function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizzas spinaci"></img>
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza className="pizza" />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      return (
      <div>{isOpen} ? "We're currently open" : " We're currently closed"</div>)
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
