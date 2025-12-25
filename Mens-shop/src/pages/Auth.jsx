import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }

    if (!isLogin && !formData.agreeTerms) {
      alert('Необходимо согласиться с условиями!');
      return;
    }

    console.log(isLogin ? 'Вход:' : 'Регистрация:', formData);
    alert(isLogin ? 'Вход выполнен успешно!' : 'Регистрация завершена!');
    navigate('/');
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    // Очищаем форму при переключении
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Переключатель */}
        <div className="auth-tabs">
          <button 
            className={`tab ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Вход
          </button>
          <button 
            className={`tab ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Регистрация
          </button>
        </div>

        <div className="auth-header">
          <h1>{isLogin ? 'Вход в аккаунт' : 'Создать аккаунт'}</h1>
          <p>
            {isLogin 
              ? 'Добро пожаловать обратно!' 
              : 'Присоединяйтесь к нашему магазину!'
            }
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Поля для регистрации */}
          {!isLogin && (
            <div className="name-fields">
              <div className="form-group">
                <label htmlFor="firstName">Имя</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  required={!isLogin}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Фамилия</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Ваша фамилия"
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          {/* Общие поля */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Введите пароль"
              required
            />
            {!isLogin && (
              <small className="password-hint">
                Минимум 6 символов
              </small>
            )}
          </div>

          {/* Подтверждение пароля для регистрации */}
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Подтвердите пароль</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Повторите пароль"
                required={!isLogin}
              />
            </div>
          )}

          {/* Чекбокс для регистрации */}
          {!isLogin && (
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required={!isLogin}
                />
                <span className="checkmark"></span>
                Я соглашаюсь с <a href="/terms">условиями использования</a> и <a href="/privacy">политикой конфиденциальности</a>
              </label>
            </div>
          )}

          {/* Запомнить меня для входа */}
          {isLogin && (
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Запомнить меня
              </label>
              <a href="/forgot-password" className="forgot-password">
                Забыли пароль?
              </a>
            </div>
          )}

          <button type="submit" className="auth-btn">
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
            <button type="button" className="switch-mode" onClick={switchMode}>
              {isLogin ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </p>
        </div>

        {/* Социальные сети */}
        <div className="social-auth">
          <div className="divider">
            <span>Или войдите через</span>
          </div>
          <div className="social-buttons">
            <button className="social-btn google-btn">
              <span className="social-icon">G</span>
              Google
            </button>
            <button className="social-btn vk-btn">
              <span className="social-icon">VK</span>
              ВКонтакте
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;