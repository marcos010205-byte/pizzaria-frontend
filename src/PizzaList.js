import React from 'react';

function PizzaList() {
  const pizzas = ['Margherita', 'Pepperoni', 'Calabresa', 'Quatro Queijos', 'Frango com Catupiry'];

  return (
    <section className="menu" id="menu">
      <h3>Nosso Menu</h3>
      <ul>
        {pizzas.map((pizza, index) => (
          <li key={index}>{pizza}</li>
        ))}
      </ul>
    </section>
  );
}

export default PizzaList;
