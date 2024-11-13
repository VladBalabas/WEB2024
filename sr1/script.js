const API_URL = 'https://api.jsonbin.io/v3/b/6734cd4ead19ca34f8c98725';
const API_KEY_MASTER = '$2a$10$tj9Q4CJKqIET6uDVWn/Kj.4AKzFkEh5VJp4vdA5SArauFVIcKis0a';
const API_KEY_ACCESS = '$2a$10$ECNHP5PweL0gaJI7xovz/uB5FNbimNay2rQt/m/fKqOiSnXLb3bdG';

class Book {
    constructor(title, author, year, category) {
        if (!title || !author || !year || !category) {
            throw new Error("Invalid book data");
        }
        this.title = title;
        this.author = author;
        this.year = year;
        this.category = category;
    }

    render() {
        return `
            <div class="book">
                <strong>${this.title}</strong><br>
                <em>${this.author}</em> (${this.year})
            </div>
        `;
    }
}


fetch(API_URL, {
    method: 'GET',
    headers: {
        'X-Master-Key': API_KEY_MASTER,
        'X-Access-Key': API_KEY_ACCESS,
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        const books = data.record;
        const catalogContainer = document.getElementById('catalog-container');
        const columns = {};

        books.forEach(bookData => {
            try {
                const book = new Book(bookData.title, bookData.author, bookData.year, bookData.category);

                if (!columns[book.category]) {
                    columns[book.category] = document.createElement('div');
                    columns[book.category].className = 'column';
                    columns[book.category].innerHTML = `<h2>${book.category.charAt(0).toUpperCase() + book.category.slice(1)}</h2>`;
                    catalogContainer.appendChild(columns[book.category]);
                }

                columns[book.category].innerHTML += book.render();
            } catch (error) {
                console.error(`Error rendering book: ${error.message}`);
            }
        });
    })
    .catch(error => {
        console.error('Error fetching book data:', error);
    });