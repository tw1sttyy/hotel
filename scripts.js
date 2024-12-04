document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const roomType = document.getElementById('room-type').value;

    if (!name || !email || !checkIn || !checkOut || !roomType) {
        alert("Будь ласка, заповніть всі поля.");
        return;
    }

    alert(`Дякуємо за бронювання, ${name}!\nТип номера: ${roomType}\nДата заїзду: ${checkIn}\nДата виїзду: ${checkOut}`);
});
