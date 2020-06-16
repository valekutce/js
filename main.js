// let person = {
//     name: "Jone",
//     age: 25
// }
// console.log(person['name']);

// let arr = ['foto.png', 'orange.jpg', 'apple.bmp'];
// console.log(arr[2]);

// alert('Hellow World!');

// let test = confirm('Вы гость на сайте?');
// console.log(test);
// let test = prompt('Вы парень  ли девушка', '');
// console.log(typeof(test));

// let num = 1;
// let name = 'Jone';
// let conf = true;
// console.log(typeof(conf));

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    "budget":money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings : false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", "");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget * 30);
