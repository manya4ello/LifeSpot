
let session = {
    'startDate': new Date().toLocaleString(),
    'userAgent': window.navigator.userAgent,
    'userAge': prompt("Пожалуйста, введите ваш возраст?")
}



function checkAge() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if (session.userAge >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

let sessionLog = function logSession() {
    console.log('Начало сессии: ' + session.startDate)
    console.log('Даныне клиента: ' + session.userAgent)
    console.log('Возраст пользователя: : ' + session.userAge)
}

function filterContent() {

    
    // Получим все контейнеры с видео
    let elements = document.getElementsByClassName('video-container');
    // Пробежимся в цикле по контейнерам
    for (let i = 0; i < elements.length; i++) {

        // Получим всё что внутри контейнера
        let childElements = elements[i];
        // Получим элемент, содержащий описание видео
        // Он у нас единственный с тегом h3, снова воспользуемся поиском по тегу,
        let videoDescription = childElements.getElementsByTagName('h3')[0].innerText.toLowerCase();


        if (!videoDescription.includes(inputParseFunction().toLowerCase())) {
            // Описание
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }

    }
}