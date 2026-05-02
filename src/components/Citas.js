import React, { useState } from 'react';

function Citas() {
    const [reserva, setReserva] = useState({ niño: '', servicio: '', fecha: '' });

    const manejarCambio = (e) => {
        setReserva({ ...reserva, [e.target.name]: e.target.value });
    };

    const enviarReserva = (e) => {
        e.preventDefault();
        alert(`¡Safari reservado para ${reserva.niño}! Nos vemos el ${reserva.fecha}`);
    };

    return (
        <section style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ background: '#fff3e0', padding: '20px', borderRadius: '15px', border: '2px dashed #ff9800' }}>
                <h2 style={{ color: '#e65100', textAlign: 'center' }}>📅 Reserva tu Cita</h2>
                <form onSubmit={enviarReserva} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <label>Nombre del Pequeño Explorador:</label>
                    <input name="niño" type="text" onChange={manejarCambio} required style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    
                    <label>Elige su Aventura (Servicio):</label>
                    <select name="servicio" onChange={manejarCambio} required style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
                        <option value="">Selecciona...</option>
                        <option value="corte">Corte Explorador</option>
                        <option value="peinado">Peinado Safari</option>
                    </select>

                    <label>Fecha de la Expedición:</label>
                    <input name="fecha" type="date" onChange={manejarCambio} required style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />

                    <button type="submit" style={{ background: '#ff9800', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
                        ¡Confirmar Aventura! 🐾
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Citas;