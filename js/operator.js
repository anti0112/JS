"use strict";
// конкатенация
// +'str' изменяет тип на int
console.log(+"3"+5);
console.log("str" + " - type");

let incr = 10,
    decr = 10;

// incr++; +1
// decr--; -1
console.log(++incr);
console.log(--decr);
// console.log(incr++);
// console.log(decr--);

console.log(2*4 == '8'); //-> true
// сравнивает только значение(==)
console.log(2*4 === '8');  //-> false
// сравнивает и значение и тип данных

// and = &&
// or = ||
// != не равно
// !== проверяет и тип данных
const isCheck = true,
      isClose = true;

console.log(isCheck && isClose);
console.log(isCheck && !isClose);
console.log(!isCheck || !isClose);
// '!'- оператор отрицания меняет bool на противоложное


      




