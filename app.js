document.addEventListener("DOMContentLoaded", function () {
    const adList = document.getElementById("ad-list");

    // Імітуємо список оголошень для демонстрації
    const ads = [
        { title: "Продається телефон", description: "Стан новий", price: 5000 },
        { title: "Продаж холодильника", description: "Маленький, зручний", price: 1500 },
    ];

    ads.forEach(ad => {
        const adItem = document.createElement('div');
        adItem.classList.add('ad-item');
        adItem.innerHTML = `
            <h2>${ad.title}</h2>
            <p>${ad.description}</p>
            <p>Ціна: ${ad.price} грн</p>
        `;
        adList.appendChild(adItem);
    });

    // Обробник для форми додавання оголошення
    const createAdForm = document.getElementById("createAdForm");
    if (createAdForm) {
        createAdForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const ad = {
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                price: document.getElementById('price').value,
            };

            // Імітація додавання оголошення до списку
            ads.push(ad);
            alert('Оголошення додано!');
            window.location.href = '/';
        });
    }
});
