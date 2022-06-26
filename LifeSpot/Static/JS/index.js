﻿


function handleSession() {

    // создадим объект Map для хранения сессии
    let session = new Map();
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)


    // Запросим возраст пользователя и тоже сохраним
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    // Проверка на возраст и сохранение сессии
    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();

        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
        session.set("startDate", startDate)
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
        a = true + 20 + "name"
    }

    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}
function filterContent() {

    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    // Получим все контейнеры с видео
    let elements = document.getElementsByClassName('video-container');
    // Пробежимся в цикле по контейнерам
    for (let i = 0; i < elements.length; i++) {

        // Получим всё что внутри контейнера
        let childElements = elements[i];
        // Получим элемент, содержащий описание видео
        // Он у нас единственный с тегом h3, снова воспользуемся поиском по тегу,
        let videoDescription = childElements.getElementsByTagName('h3')[0];


        if (!videoDescription.innerText.toLowerCase().includes(inputString.toLowerCase())) {
            // Описание
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }

    }
}