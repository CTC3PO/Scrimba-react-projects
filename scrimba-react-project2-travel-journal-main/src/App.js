//import React, the components and the data files
import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./src/data";

export default function App() {
  //map each item in the data (array) to a Card object (that will be
  //displayed as each travel entry in the body section of the app)
  const cards = data.map((item) => {
    return <Card key={item.title} item={item} />;
  });

  //render the Navbar and cards section of the app
  return (
    <div className="app-containter">
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
