function addCountries() {
    const input = document.getElementById("countriesInput").value;
    const countries = input.split(',')
                           .map(country => country.trim())
                           .filter(country => country.length > 0);

    if (countries.length === 0) {
        return; 
    }

    const list = document.getElementById("countriesList");
    list.innerHTML = "";

    countries.forEach(country => {
        const li = document.createElement("li");
        li.textContent = country;
        list.appendChild(li);
    });
}

function highlightMax() {
    const cells = document.querySelectorAll("#numbersTable td");
    let maxValue = -Infinity;

    cells.forEach(cell => {
        const cellValue = parseInt(cell.textContent);
        if (cellValue > maxValue) {
            maxValue = cellValue;
        }
    });

    cells.forEach(cell => cell.classList.remove("highlight"));

    cells.forEach(cell => {
        const cellValue = parseInt(cell.textContent);
        if (cellValue === maxValue) {
            cell.classList.add("highlight");
        }
    });
}