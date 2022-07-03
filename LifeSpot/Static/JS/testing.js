﻿// Получим коллекцию всех элементов страницы
let elements = document.getElementsByTagName('*');

// Выведем результат в уведомление
alert(`Количество элементов на странице:  ${elements.length}`);


        // для получения пользовательского ввода самое простое - воспользоваться конструкцией prompt()
    let userName = prompt("Пожалуйста, введите ваше имя");
    alert(`Приветствуем, ${userName}. В вашем имени ${userName.length} символов`)

const saveInput = function () {
    // Вытащим значение текстового поля (как у нас уже делается при фильтрации)
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();

    // Покажем окно с прошлым и новым значением
    alert('Последний ввод: ' + this.lastInput /* равноценно window.lastInput, так как мы работаем в контексте браузера */
        + '\n' + 'Текущий ввод: ' + currentInput);

    // Сохраним новое значение в контекст
    this.lastInput = currentInput;
}