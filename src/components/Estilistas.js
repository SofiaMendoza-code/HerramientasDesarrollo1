import React from 'react';

const estilistas = [
    { id: 101, nombre: "Tía Rosita", especialidad: "Cortes Divertidos", imagen: "🦁" },
    { id: 102, nombre: "Tío Carlos", especialidad: "Peinados Fantasía", imagen: "🦒" },
    { id: 103, nombre: "Tía Sofía", especialidad: "Especialista en Bebés", imagen: "🦓" },
    { id: 104, nombre: "Tía Paola", especialidad: "Especialista en Princesas", imagen: "🌸" }
];

function Estilistas() {
    return (
        <section style={{ padding: '20px', backgroundColor: '#e8f5e9' }}>
            <h2 style={{ color: '#2e7d32', textAlign: 'center' }}>✂️ Nuestros Estilistas Safari</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {estilistas.map((e) => (
                    <div key={e.id} style={{ 
                        background: 'white', 
                        border: '2px solid #81c784', 
                        borderRadius: '50%', 
                        width: '180px', 
                        height: '180px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}>
                        <span style={{ fontSize: '40px' }}>{e.imagen}</span>
                        <h3 style={{ margin: '5px 0', fontSize: '1.1rem' }}>{e.nombre}</h3>
                        <p style={{ fontSize: '0.8rem', color: '#666' }}>{e.especialidad}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Estilistas;