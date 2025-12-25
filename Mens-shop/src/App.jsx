import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import Catalogs from "./pages/Catalogs.jsx"
import { Routes, Route, Link } from 'react-router-dom'
import Undercase from './components/Undercase.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Auth from "./pages/Auth.jsx";

function App() {
  const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

   const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.id === product.id && item.size === product.size
      );
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevItems, product];
      }
    });
  };


  return (
    <div className="App">
      {/* Header ВНЕ Routes - будет на всех страницах */}
      <Header />
      
      <Routes>
        <Route path='/' element={
          <main>
            <h1>Добро пожаловать в Men's Shop!</h1>
            
            {/* Верхние одежды */}
            <div className="all">
              <a href="werh.html" className="see-all">Посмотреть все</a>
              <h3>Верхние одежды</h3>

              <div className="clothes">
                <div className="block">
                  <Link to="/product/1">
                    <img src="photo/palto.png" alt="Пальто" />
                    <span className="money">7 500 ₽</span>
                    <span className="name">Пальто</span>
                  </Link>
                </div>

                <div className="block">
                  <a href="product/2">
                    <img src="photo/kurtka.jpg" alt="Куртка" />
                    <span className="money">2 878 ₽</span>
                    <span className="name">Куртка</span>
                  </a>
                </div>

                <div className="block">
                  <a href="product/3">
                    <img src="photo/koshanka.png" alt="Кожанная куртка" />
                    <span className="money">5 800₽</span>
                    <span className="name">Кожанная куртка</span>
                  </a>
                </div>

                <div className="block">
                  <a href="product/4">
                  <img src="photo/bomber.png" alt="Бомбер" />
                  <span className="money">3 500 ₽</span>
                  <span className="name">Бомбер оверсайз</span>
                  </a>
                </div>
              </div>
            </div>
               {/*спортивные одежды*/}
            <div class="line"></div>
            <div class="all">
                <a href="sport.html" class="see-all">Посмотреть все</a>
                <h3>Спортивные одежды</h3>

                <div class="clothes">
                    <div class="block">
                        <a href="product/5">
                            <img src="photo/rasgart.png" alt="" />
                            <span class="money">1 500 ₽</span>
                            <span class="name">Рашгарт спортивный комплект</span>
                        </a>
                    </div>

                    <div class="block">
                      <a href="product/6">
                        <img src="photo/futbolka.png" alt=""/>
                        <span class="money">900 ₽</span>
                        <span class="name">Спортивная футболка </span>
                      </a>
                    </div>

                    <div class="block">
                         <a href="product/7">
                        <img src="photo/shorty.png" alt=""/>
                        <span class="money">1 100 ₽</span>
                        <span class="name">Шорты спортивные </span>
                        </a>
                    </div>

                    <div class="block">
                      <a href="product/8">
                        <img src="photo/sportmayka.png" alt=""/>
                        <span class="money">750 ₽</span>
                        <span class="name">Спортивная майка</span>
                      </a>
                    </div>
                </div>
            </div>
            {/*Классическая одежда*/}

            <div class="line"></div>
            <div class="all">
                <a href="galstuk.html" class="see-all">Посмотреть все</a>
                <h3>Классическая одежда</h3>

                <div class="clothes">
                    <div class="block">
                        <a href="product/9">
                            <img src="photo/polo.png" alt=""/>
                            <span class="money">1 200 ₽</span>
                            <span class="name">Футболка поло </span>
                        </a>
                    </div>

                    <div class="block">
                      <a href="product/10">
                        <img src="photo/kostyum.png" alt=""/>
                        <span class="money">11 700 ₽</span>
                        <span class="name">Классический костюм </span>
                      </a>
                    </div>

                    <div class="block">
                      <a href="product/11">
                        <img src="photo/kostyum2.png" alt=""/>
                        <span class="money">6 800 ₽</span>
                        <span class="name">Костюм в клетку </span>
                      </a>
                    </div>

                    <div class="block">
                      <a href="product/12">
                        <img src="photo/rubaska.png" alt=""/>
                        <span class="money">1 300 ₽</span>
                        <span class="name">Белая рубашка</span>
                      </a>
                    </div>
                </div>
            </div>
              
                {/*Обувь*/}

            <div class="line"></div>
            <div class="all">
                <a href="obuw.html" class="see-all">Посмотреть все</a>
                <h3>Обувь</h3>

                <div class="clothes">
                    <div class="block">
                      <a href="product/13">
                          <img src="photo/lofery.png" alt=""/>
                          <span class="money">3 200 ₽</span>
                          <span class="name">Лоферы замшевые </span>
                        </a>
                    </div>

                    <div class="block">
                      <a href="product/14">
                        <img src="photo/newbalance.png" alt=""/>
                        <span class="money">3 700 ₽</span>
                        <span class="name">Кроссовки Нью беленс 530 </span>
                        </a>
                    </div>

                    <div class="block">
                      <a href="product/15">
                        <img src="photo/botinok.png" alt=""/>
                        <span class="money">6 600 ₽</span>
                        <span class="name">Ботинки зимние на меху </span>
                      </a>
                    </div>

                    <div class="block">
                        <img src="photo/tufli.png" alt=""/>
                        <span class="money">4 300 ₽</span>
                        <span class="name">Туфли классические оксфорды</span>
                    </div>
               </div>
            </div>
            {/*нижняя одежда*/}

            <div class="line"></div>
            <div class="all">
                <a href="obuw.html" class="see-all">Посмотреть все</a>
                <h3>Нижняя одежда</h3>

                <div class="clothes">
                    <div class="block">
                      <a href="#">
                          <img src="photo/trusy.png" alt="Трусы Мужские"/>
                          <span class="money"> 800 ₽</span>
                          <span class="name">Трусы Мужские </span>
                        </a>
                    </div>

                    <div class="block">
                        <img src="photo/mayka.png" alt="Майка белая"/>
                        <span class="money">300 ₽</span>
                        <span class="name">Майка белая </span>
                    </div>

                    <div class="block">
                        <img src="photo/noski.png" alt="Носки"/>
                        <span class="money">600 ₽</span>
                        <span class="name">Носки</span>
                    </div>

                    <div class="block">
                        <img src="photo/termobelyo.png" alt="термобельё"/>
                        <span class="money">1 200 ₽</span>
                        <span class="name">Термобельё</span>
                    </div>
               </div>
            </div>
            
            
        

          </main>
        } />
        
        <Route path="/catalog" element={<Catalogs />} />
        <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
        <Undercase />
    </div>
  );
}

export default App