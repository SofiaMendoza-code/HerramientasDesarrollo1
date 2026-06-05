import React from 'react';

const Galeria = () => {
  // Datos simulados para la galería de la peluquería
  const cortes = [
    { id: 1, nombre: "Corte Clásico", descripcion: "Tradicional y ordenado." },
    { id: 2, nombre: "Estilo Safari", descripcion: "Moderno, aventurero y fresco." },
    { id: 3, nombre: "Trenzas Divertidas", descripcion: "Coloridas y con mucho estilo." }
  ];

  return (
    <div className="galeria-container" style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Galería de Cortes - Safari Kids</h2>
      <p>Descubre los estilos favoritos de nuestros pequeños clientes.</p>
      
      <div className="galeria-grid" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {cortes.map(corte => (
          <div key={corte.id} className="tarjeta-corte" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '10px', width: '200px' }}>
            {/* Espacio reservado para las imágenes reales de los cortes */}
            <div 
              className="placeholder-img" 
              style={{ width: '100%', height: '150px', backgroundColor: '#f0e68c', borderRadius: '5px', marginBottom: '10px' }}
            ></div>
            <h3 style={{ color: '#ff6b6b' }}>{corte.nombre}</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>{corte.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;