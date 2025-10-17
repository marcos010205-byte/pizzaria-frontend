import React from 'react';
import Header from './Header';
import PizzaList from './PizzaList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="welcome">
          <h1>Bem-vindo à Pizzaria!</h1>
          <p>Escolha sua pizza favorita e faça seu pedido agora.</p>
          <button className="order-btn">Fazer Pedido</button>
        </section>
        <PizzaList />
      </main>
    </div>
  );
}

export default App;
