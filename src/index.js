import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

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


function App() {
  return <div className="container">
    <Header />
    <Menu />
    <Footer />
  </div>;
}

function Header() {
  return <header className="header">
    <h1>Fast React Pizza Co.</h1>
  </header>
}

function Menu() {
  return (
    <main className="menu">
      {pizzaData.length > 0 ? (
        <>
          <h2>Our Menu</h2>
          <p>
            Authentic Italian Cuisine
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're working on our pizza, please come back later :)</p>
      )}
    </main>
  );
}


function Pizza({ pizza }) {
  // if (props.pizza.soldOut) return null;

  return <li className={`pizza ${pizza.soldOut && `sold-out`}`}>
    <img src={pizza.photoName} alt={pizza.name}></img>
    <div>
      <h3>
        {pizza.name}
      </h3>
      <p>
        {pizza.ingredients}
      </p>
      <span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
    </div>
  </li>
}

function Footer() {
  const closeHour = 22;
  const openHour = 10;
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openHour && currentHour <= closeHour;

  return <footer className="footer">
    {
      isOpen ? (
        <div className="order">
          <p>
            We're Open Until {closeHour}:00. Come Order with us or Order Online
          </p>
          <button className="btn">Order</button>
        </div>
      ) : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>
    }
  </footer>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
