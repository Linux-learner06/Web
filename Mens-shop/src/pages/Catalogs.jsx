import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Catalogs.css';

function Catalogs() {
  // Все категории магазина
  const [categories] = useState([
    {
      id: 'outerwear',
      title: 'ВЕРХНЯЯ ОДЕЖДА',
      icon: '🧥',
      count: 6,
      color: '#3498DB',
      subcategories: ['Пальто', 'Куртки', 'Ветровки', 'Бомберы', 'Плащи', 'Пуховики'],
      featured: [
        { id: 1, name: 'Пальто классическое', price: 7500, image: '/photo/palto.png' },
        { id: 4, name: 'Бомбер оверсайз', price: 1800, image: '/photo/bomber.png'},
        { id: 3, name: 'Кожаная куртка', price: 5800, image: '/photo/koshanka.png' }
      ]
    },
    {
      id: 'sport',
      title: 'СПОРТИВНАЯ ОДЕЖДА',
      icon: '🏃',
      count: 4,
      color: '#FF6B6B',
      subcategories: ['Спортивные костюмы', 'Футболки', 'Шорты', 'Спортивные штаны'],
      featured: [
        { id: 5, name: 'Рашгарт спортивный комплект', price: 1700, image: '/photo/rasgart.png' },
        { id: 6, name: 'Спортивная футболка', price: 700, image: '/photo/futbolka.png' },
        { id: 7, name: 'Шорты спортивные', price: 1200, image: '/photo/shorty.png' }
      ]
    },
    {
      id: 'classic',
      title: 'КЛАССИЧЕСКАЯ ОДЕЖДА',
      icon: '👔',
      count: 4,
      color: '#9B59B6',
      subcategories: ['Костюмы', 'Рубашки', 'Футболки поло', 'Брюки'],
      featured: [
        { id: 10, name: 'Костюм классический', price: 11700, image: '/photo/kostyum.png' },
        { id: 9, name: 'Футболка поло', price: 1500, image: '/photo/polo.png' },
        { id: 12, name: 'Белая рубашка', price: 1300, image: '/photo/rubaska.png' }
      ]
    },
    {
      id: 'shoes',
      title: 'ОБУВЬ',
      icon: '👞',
      count: 4,
      color: '#F39C12',
      subcategories: ['Кроссовки', 'Туфли', 'Ботинки', 'Лоферы'],
      featured: [
        { id: 13, name: 'Лоферы замшевые', price: 3200, image: '/photo/lofery.png' },
        { id: 14, name: 'Кроссовки Нью беленс 530', price: 3700, image: '/photo/newbalance.png' },
        { id: 16, name: 'Туфли ', price: 4300, image: '/photo/tufli.png' }
      ]
    },
    {
      id: 'underwear',
      title: 'НИЖНЕЕ БЕЛЬЕ',
      icon: '🩲',
      count: 3,
      color: '#2ECC71',
      subcategories: ['Трусы', 'Носки', 'Майки'],
      featured: [
        { id: 13, name: 'Спортивная майка', price: 900, image: '/photo/sportmayka.png' },
        { id: 14, name: 'Носки спортивные', price: 250, image: 'https://via.placeholder.com/300x400?text=Носки' },
        { id: 15, name: 'Термобелье набор', price: 2800, image: 'https://via.placeholder.com/300x400?text=Термобелье' }
      ]
    },
    {
      id: 'accessories',
      title: 'АКСЕССУАРЫ',
      icon: '👜',
      count: 3,
      color: '#E74C3C',
      subcategories: ['Сумки', 'Ремни', 'Часы', 'Очки', 'Галстуки', 'Кошельки'],
      featured: [
        { id: 16, name: 'Кожаный ремень', price: 1800, image: 'https://via.placeholder.com/300x400?text=Ремень' },
        { id: 17, name: 'Часы Patek Philippe', price: 4500, image: 'https://via.placeholder.com/300x400?text=Часы' },
        { id: 18, name: 'Солнцезащитные очки', price: 2200, image: 'https://via.placeholder.com/300x400?text=Очки' }
      ]
    },
    {
      id: 'headwear',
      title: 'ГОЛОВНЫЕ УБОРЫ',
      icon: '🧢',
      count: 3,
      color: '#1ABC9C',
      subcategories: ['Бейсболки', 'Кепки', 'Шапки', 'Береты', 'Панамы'],
      featured: [
        { id: 19, name: 'Бейсболка кепка', price: 800, image: 'https://via.placeholder.com/300x400?text=Кепка' },
        { id: 20, name: 'Шапка зимняя', price: 1200, image: 'https://via.placeholder.com/300x400?text=Шапка' },
        { id: 21, name: 'Панама летняя', price: 600, image: 'https://via.placeholder.com/300x400?text=Панама' }
      ]
    },
    {
      id: 'jeans',
      title: 'ДЖИНСЫ И БРЮКИ',
      icon: '👖',
      count: 3,
      color: '#34495E',
      subcategories: ['Джинсы', 'Брюки чинос', 'Штаны', 'Леггинсы', 'Карго'],
      featured: [
        { id: 22, name: 'Джинсы скинни', price: 2900, image: 'https://via.placeholder.com/300x400?text=Джинсы' },
        { id: 23, name: 'Брюки чинос', price: 2200, image: 'https://via.placeholder.com/300x400?text=Брюки' },
        { id: 24, name: 'Штаны карго', price: 1900, image: 'https://via.placeholder.com/300x400?text=Штаны' }
      ]
    },
    {
      id: 'shirts',
      title: 'РУБАШКИ И ФУТБОЛКИ',
      icon: '👕',
      count: 3,
      color: '#E67E22',
      subcategories: ['Футболки', 'Рубашки', 'Поло', 'Лонгсливы', 'Худи'],
      featured: [
        { id: 25, name: 'Футболка хлопок', price: 800, image: '/photo/futbolka.png' },
        { id: 26, name: 'Рубашка в клетку', price: 1500, image: 'https://via.placeholder.com/300x400?text=Рубашка' },
        { id: 27, name: 'Худи оверсайз', price: 2800, image: 'https://via.placeholder.com/300x400?text=Худи' }
      ]
    },
    {
      id: 'swimwear',
      title: 'ПЛАВКИ И ШОРТЫ',
      icon: '🩳',
      count: 3,
      color: '#00CEC9',
      subcategories: ['Плавки', 'Шорты', 'Бермуды', 'Трусы для плавания'],
      featured: [
        { id: 28, name: 'Плавки спортивные', price: 900, image: 'https://via.placeholder.com/300x400?text=Плавки' },
        { id: 29, name: 'Шорты бермуды', price: 1300, image: '/photo/shorty.png' },
        { id: 30, name: 'Плавки боксеры', price: 700, image: 'https://via.placeholder.com/300x400?text=Боксеры' }
      ]
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Функция для обработки ошибок загрузки изображений
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x400?text=Товар';
    e.target.style.objectFit = 'contain';
    e.target.style.padding = '20px';
  };

  return (
    <div className="catalogs-page">
      {/* Заголовок */}
      <div className="catalogs-header">
        <h1>КАТАЛОГ ОДЕЖДЫ</h1>
        <p>Все категории мужской одежды в одном месте</p>
        <div className="stats">
          <span className="stat">10 категорий</span>
          <span className="stat">30 товаров</span>
          <span className="stat">Новинки каждый день</span>
        </div>
      </div>

      <div className="catalogs-container">
        {/* Боковая навигация с категориями */}
        <aside className="categories-sidebar">
          <div className="sidebar-header">
            <h3>КАТЕГОРИИ</h3>
            <span className="count">{categories.length} разделов</span>
          </div>
          
          <ul className="categories-list">
            {categories.map(category => (
              <li key={category.id}>
                <button 
                  className={`category-btn ${selectedCategory.id === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                  style={{ borderLeftColor: category.color }}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.title}</span>
                  <span className="category-count">{category.count}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="sidebar-footer">
            <Link to="/all-products" className="view-all-btn">
              СМОТРЕТЬ ВСЕ ТОВАРЫ →
            </Link>
          </div>
        </aside>

        {/* Основной контент выбранной категории */}
        <main className="category-content">
          {/* Заголовок категории */}
          <div className="category-header" style={{ background: selectedCategory.color }}>
            <div className="category-title">
              <span className="title-icon">{selectedCategory.icon}</span>
              <h2>{selectedCategory.title}</h2>
            </div>
            <span className="items-count">{selectedCategory.count} товаров</span>
          </div>

          

          {/* Популярные товары с фотками */}
          <div className="featured-products">
            <div className="section-header">
              <h3>Популярные товары</h3>
              <Link to={`/category/${selectedCategory.id}`} className="view-more-link">
                Все товары →
              </Link>
            </div>
            
            <div className="products-grid">
              {selectedCategory.featured.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      onError={handleImageError}
                    />
                  </div>
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <p className="product-price">{product.price.toLocaleString('ru-RU')} ₽</p>
                    <Link to={`/product/${product.id}`} className="view-product-btn">
                      ПОДРОБНЕЕ
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Быстрая навигация */}
          <div className="quick-navigation">
            <h3>Быстрый переход</h3>
            <div className="nav-buttons">
              {categories.slice(0, 6).map(cat => (
                <button 
                  key={cat.id}
                  className="nav-btn"
                  onClick={() => setSelectedCategory(cat)}
                  style={{ background: cat.color }}
                >
                  <span className="nav-icon">{cat.icon}</span>
                  <span className="nav-text">{cat.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Все категории сеткой */}
      <div className="all-categories-section">
        <h2>Все категории</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <div 
              key={category.id}
              className="category-card"
              style={{ borderTopColor: category.color }}
              onClick={() => setSelectedCategory(category)}
            >
              <div className="card-header">
                <span className="card-icon">{category.icon}</span>
                <span className="card-count">{category.count} товаров</span>
              </div>
              <h3>{category.title}</h3>
              <div className="card-subcategories">
                {category.subcategories.slice(0, 3).map((sub, idx) => (
                  <span key={idx} className="subcategory-tag">{sub}</span>
                ))}
                {category.subcategories.length > 3 && (
                  <span className="more-tag">+{category.subcategories.length - 3}</span>
                )}
              </div>
              <Link to={`/category/${category.id}`} className="card-link">
                Перейти →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalogs;