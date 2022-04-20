// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах HW_Nefedova_JS_1.js в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке


//26. Создать переменную “age_1” и присвоить ей значение 10
   let age_1 = prompt("Сколько тебе лет?", '');
//27. Создать переменную “age_2” и присвоить ей значение 18
   let age_2 = 18;
//28. Создать переменную “age_3” и присвоить ей значение 60
   let age_3 = 60;
//29. Создать if в котором будите проверять значение переменной age_1
//30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
//31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
//32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
//33. Иначе выводите “Technical work”.


function onlyNumber(s) {
    for (let i = s.length - 1; i>=0; i--){
        const d = s.charCodeAt (i);
        if (d < 48 || d > 57) return false
    }
    return true
}

// console.log(onlyNumber(age_1))

   const checkAge = function(age) {
    

    if(typeof(age) != "number"){
        console.log("errore type")
    }else   if(age < age_2){
        console.log("You don’t have access cause your age is " + age_1 + " It’s less then ")
    } else if(age >=2 && age <= age_3){
        console.log("Welcome!")
    }else if(age > age_3){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
 }

 if(onlyNumber(age_1) == true){
    age_1 = parseInt(age_1);
    checkAge(age_1);
 }else{
     checkAge(age_1)
 }