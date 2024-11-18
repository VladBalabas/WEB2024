import React from "react";
import "./header.css";

export function Header() 
{
  return (
    <header className="header">
      <div className="title">Бібліотека знань</div>
      <nav className="nav">
        <ul>
          <li><a href="#catalog">Каталог</a></li>
          <li><a href="#about">Про нас</a></li>
          <li><a href="#contacts">Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
};
