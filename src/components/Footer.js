import React from 'react';

function Footer() {
    return (
        <footer style={{ 
            backgroundColor: '#2e7d32', 
            color: 'white', 
            padding: '20px', 
            textAlign: 'center', 
            marginTop: '50px',
            borderTop: '5px solid #ff9800'
        }}>
            <p style={{ fontSize: '18px', margin: '0' }}>
                🐾 <b>Safari Kids</b> - ¡Explorando nuevos looks con amor! 🐾
            </p>
            <div style={{ marginTop: '10px', fontSize: '24px' }}>
                🦁 🦒 🦓 🐘 🐆
            </div>
            <p style={{ fontSize: '12px', marginTop: '10px', opacity: '0.8' }}>
                © 2026 Proyecto Herramientas de Desarrollo - UTP
            </p>
        </footer>
    );
}

export default Footer;