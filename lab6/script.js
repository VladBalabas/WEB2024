const friends = [
    { name: "Іван", birthDate: "2024-10-30", phone: "123456789" },
    { name: "Марія", birthDate: "2024-10-31", phone: "" },
    { name: "Олег", birthDate: "2024-11-01", phone: "987654321" },
    { name: "Нікіта", birthDate: "2024-10-31", phone: "" },
];

function calculateDaysUntilBirthday(birthDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    const birthday = new Date(birthDate);
    birthday.setFullYear(today.getFullYear());
    birthday.setHours(0, 0, 0, 0); 

    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = birthday - today; 
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    return diffDays;
}


function displayMessages() {
    let html = ""; 

    friends.forEach(friend => {
        const daysUntilBirthday = calculateDaysUntilBirthday(friend.birthDate);
        
        if (daysUntilBirthday == 0) {
            html += `<p style='background:green'>Сьогодні день народження <strong>${friend.name}</strong>! Привітайте його по телефону ${friend.phone || "номер не вказано"}.</p>`;
        } else if (daysUntilBirthday <= 3 && daysUntilBirthday > 0) {
            html += `<p style='background:yellow'>Необхідно надіслати вітальну листівку <strong>${friend.name}</strong> (${daysUntilBirthday} дні до дня народження).`;
            if (!friend.phone) {
                html += " Номер телефону не вказано.";
            }
            html += `</p>`;
        }
    });

    document.getElementById("result").innerHTML = html; 
}

document.querySelector(".b-button").addEventListener("click", displayMessages);