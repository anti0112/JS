"use strict";

const result = confirm("Are you here?");
console.log(result);

// + делает тип int
const answer = +prompt("Вам есть 18", ""); 
console.log(typeof(answer));

const answers = [];
// Задать вопрос когда заходишь на страницу
answers[0] = prompt('Как вас зовут?', '');
answers[1] = prompt('Где работаете?', '');
answers[2] = +prompt('Сколько лет?', '');

// Вывод ответов на вопросы на сайте
document.write(answers);