import React, { useState } from "react";
import "./Header.css";
import "../App.css";
import "../pages/Catalogs.jsx"
import "./Undercase.jsx";

import { Link } from "react-router-dom";

function Header({ cartItems = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      e.preventDefault();
      alert(`Поиск: ${searchQuery}`);
      setSearchQuery("");
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Вычисляем общее количество товаров в корзине
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <header className="header">
      <div className="nav-container">
        {/* Логотип */}
        <div className="logo">
          <span>MEN'S SHOP</span>
        </div>

        {/* Основная навигация (видна на десктопе) */}
        <nav className="main-nav">
          <ul>
            <li><Link to="/" className="nav-link">Главная</Link></li>
            <li><Link to="/catalog" className="nav-link">Каталоги</Link></li>
            <li><Link to="#section" className="nav-link">О нас</Link></li>
          </ul>
        </nav>

        {/* Поиск и действия (видны на десктопе) */}
        <div className="header-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearch}
              className="search-input"
            />
          </div>
          
          {/* Корзина */}
          <div className="cart-container">
            <Link to="#" className="cart-btn">
              <button className="cart-btn" onClick={toggleCart}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.4 5.2 16.4H17M17 13V16.4M9 20C9 20.6 8.6 21 8 21C7.4 21 7 20.6 7 20C7 19.4 7.4 19 8 19C8.6 19 9 19.4 9 20ZM17 20C17 20.6 16.6 21 16 21C15.4 21 15 20.6 15 20C15 19.4 15.4 19 16 19C16.6 19 17 19.4 17 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
    
          </div>
          <Link to="/auth" className="login-btn">Войти</Link>
    
        </div>
      </div>
    </header>
  );
};

export default Header;