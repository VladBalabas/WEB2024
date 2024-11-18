import React from "react";
import "./aside.css";

export function Aside() {
    return (
      <aside className="about">
        <h2><a id="about">Про нас</a></h2>
        
        <img 
          src="./Image/about_us.png" 
          alt="Бібліотека" 
          className="about-image"
        />
        <p>
          Ми — сучасна бібліотека, яка об'єднує класичні традиції та інноваційний підхід.
          Наша місія — надавати доступ до знань і сприяти розвитку культури читання.
        </p>
        <p>
          У бібліотеці ви знайдете не лише книги, але й електронні ресурси, освітні програми та спільноти для обміну ідеями.
          Ми працюємо для кожного, хто прагне навчатися і розвиватися.
        </p>
        <button className="about-button" onClick={() => alert("Дякуємо за ваш інтерес!")}>
          Дізнатися більше
        </button>
      </aside>
    );
  }