import React from 'react';
import Servicios from './components/Servicios';
import Estilistas from './components/Estilistas';
import Citas from './components/Citas';

function App() {
  return (
    <div style={{ fontFamily: 'Verdana, sans-serif', backgroundColor: '#f9f9f9' }}>
      <header style={{ backgroundColor: '#2e7d32', color: 'white', padding: '30px', textAlign: 'center' }}>
        <h1 style={{ margin: 0 }}>🦒 Safari Kids: Peluquería Infantil 🦁</h1>
        <p>¡La aventura de un gran look comienza aquí!</p>
      </header>
      <main>
        <Servicios />
        <hr style={{ border: '1px solid #eee' }} />
        <Estilistas />
        <hr style={{ border: '1px solid #eee' }} />
        <Citas />
      </main>
      <footer style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
        <p>&copy; 2026 Safari Kids Project - Herramientas de Desarrollo</p>
      </footer>
    </div>
  );
}

export default App;