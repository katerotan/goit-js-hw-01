console.log("Задача 3. Ширина елемента");

// 1) Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику:

// content— перший параметр, ширина контенту
// padding — другий параметр, значення горизонтального падінгу для кожної зі сторін
// border — третій параметр, значення товщини бордера для кожної зі сторін

// Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.

// 2) оповни код функції так, щоб вона повертала число —загальну ширину елемента. При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.

// 3) Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// -------------------------------------------------------

const param = "8.5px";
console.log(param);

const num = Number.parseFloat(param);
console.log(num);

// -------------------------------------------------------

function getElementWidth(content, padding, border) {

    return Number.parseFloat(content) + 2*Number.parseFloat(padding) + 2*Number.parseFloat(border);
    
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

