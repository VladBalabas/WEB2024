import React from "react";
import "./footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>FAQ</h3>
        <ul>
          <li><a href="#faq">Як знайти книгу?</a></li>
          <li><a href="#faq">Як зареєструватися?</a></li>
          <li><a href="#faq">Як повернути книгу?</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3><a id="contacts">Контакти</a></h3>
        <p>Email: support@library.com</p>
        <p>Телефон: +380 123 456 789</p>
        <p>Адреса: м. Київ, вул. Літературна, 1</p>
      </div>
      <div className="footer-section">
        <h3>Соціальні мережі</h3>
        <ul className="social-links">
          <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
          <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}