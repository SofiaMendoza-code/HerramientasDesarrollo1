import React from 'react';
import Servicios from './components/Servicios';
import Estilistas from './components/Estilistas';
import Citas from './components/Citas';
import Footer from './components/Footer';

function App() {
  const containerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f4fbf4',
    minHeight: '100vh',
    color: '#333'
  };

  const headerStyle = {
    backgroundColor: '#2e7d32',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  };

  const mainStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  };

  const hrStyle = {
    border: '0',
    height: '1px',
    background: '#ddd',
    margin: '40px 0'
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>
          🐾 Safari Kids - ¡La mejor aventura para tu look! 🐾
        </h1>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', fontWeight: '300' }}>
          ¡La mejor aventura para el look de tus pequeños exploradores!
        </p>
      </header>

      <main style={mainStyle}>
        <section id="servicios">
          <Servicios />
        </section>

        <hr style={hrStyle} />

        <section id="estilistas">
          <Estilistas />
        </section>

        <hr style={hrStyle} />

        <section id="reservas">
          <Citas />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;