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

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings : false
};


for (let i = 0; i < 2; i++) {
    a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", "");

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && b != "" && a.leng < 50 ){
        appData.expenses[a] = b;
        console.log("done");
    } else {
        alert("Заполните пожалуйста все поля");
    }
    
}

appData.moneyParDay = appData.budget / 30;

alert("Ежедневный бюджет " + appData.moneyParDay);

 if( appData.moneyParDay < 100 ){
     alert("Ваш бюджет ниже среднего");
 } else if (appData.moneyParDay > 100 && appData.moneyParDay < 2000 ){
    alert("Ваш бюджет среднего уровня");
 } else if ( appData.moneyParDay > 2000 ){
    alert("Ваш бюджет выше среднего уровня");
 } else {
    alert("Ято то не понятно");
 }