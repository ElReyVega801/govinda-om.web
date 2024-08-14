import React, { useState } from 'react';
import './store.css'; // Asegúrate de tener el archivo de estilo para los estilos personalizados
import Certifications from './Certifications';
import EssentialOils from './EssentialOils';
import Therapies from './Therapies';
import Workshops from './Workshops';

const Store = () => {
  const [cart, setCart] = useState([]);
  const [activeSection, setActiveSection] = useState('essentialOils'); // Default section

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="store-container">
      <h1 className="store-title">Tienda</h1>
      <nav className="store-nav">
        <button onClick={() => setActiveSection('essentialOils')} className="nav-button">Aceites Esenciales</button>
        <button onClick={() => setActiveSection('certifications')} className="nav-button">Certificaciones</button>
        <button onClick={() => setActiveSection('therapies')} className="nav-button">Terapias</button>
        <button onClick={() => setActiveSection('workshops')} className="nav-button">Talleres</button>
      </nav>
      <div className="product-section">
        {activeSection === 'essentialOils' && <EssentialOils addToCart={addToCart} />}
        {activeSection === 'certifications' && <Certifications addToCart={addToCart} />}
        {activeSection === 'therapies' && <Therapies addToCart={addToCart} />}
        {activeSection === 'workshops' && <Workshops addToCart={addToCart} />}
      </div>
      <div className="cart-section">
        <h2 className="cart-title">Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">No hay productos en el carrito.</p>
        ) : (
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        )}
        <button className="checkout-button" onClick={() => alert('Redirigiendo a la página de pago...')}>Ir a Pagar</button>
      </div>
    </div>
  );
};

export default Store;