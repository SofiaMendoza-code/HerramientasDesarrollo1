import React from 'react';

const servicios = [
    { id: 1, nombre: "Corte Explorador", precio: "S/ 35.00", descripcion: "Corte clásico para niños aventureros." },
    { id: 2, nombre: "Peinado Safari", precio: "S/ 25.00", descripcion: "Peinado con gel y colores divertidos." },
    { id: 3, nombre: "Lavado de Melena", precio: "S/ 15.00", descripcion: "Lavado con shampoo especial que no pica los ojos." }
];

function Servicios() {
    return (
        <section style={{ padding: '20px' }}>
            <h2 style={{ color: '#2e7d32' }}>🦁 Servicios Disponibles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                {servicios.map((s) => (
                    <div key={s.id} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', textAlign: 'center', boxShadow: '2px 2px 10px #eee' }}>
                        <h3>{s.nombre}</h3>
                        <p>{s.descripcion}</p>
                        <p style={{ fontWeight: 'bold', color: '#f57c00' }}>{s.precio}</p>
                        <button style={{ background: '#4caf50', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>
                            Seleccionar
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Servicios;