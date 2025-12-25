import React from "react";
import "./Undercase.css";

function Undercase() {
  return (
    <div className="under">
      <div className="under-content">
        <div className="under-text">
          <div className="nameshop">MEN'S SHOP</div>
          
          <div className="under-contacts">
            <div className="nom">+7 901 718 74 05</div>
            <div className="nom">Email: info@mensshop.ru</div>
            <div className="nom">Адрес: Москва, ул. Примерная, 123</div>
          </div>
          
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">VK</a>
            <a href="#">Telegram</a>
          </div>
        </div>
        
        <img src="../photo/qr.png" alt="MEN'S SHOP Logo" />
      </div>
    </div>
  );
}

export default Undercase;