import React from "react";
import "./Books.css";
import books from "./info.json";

export function Books() {
  return (
    <main>
      <h1 className="books-header"><a id="catalog">Книги, які вас точно зацікавлять</a></h1>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <img src={book.cover} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h2 className="book-title">{book.title}</h2>
              <p className="book-author">Автор: {book.author}</p>
              <p className="book-year">Рік: {book.year}</p>
              <p className="book-genre">Жанр: {book.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
