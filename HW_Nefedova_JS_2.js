//S. HW_2

//Напишите валидационный скрипт используя функции 

 //1. Скрипт должен на вход принимать строку.
 //2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
 //3. Минимум 5 символов в строке
 //4. Максимум 64 символа в строке
 //5. В строке должны быть буквы
 //6. Должна быть хотя бы одна буква в верхнем регистре
 //7. Должна быть хотя бы одна цифра
 //8. Должна быть хотя бы одна @
 //9. Строка не должна быть пустой

 let data_1 = "фф@Aggg"
//  console.log(/[A-ZА-ЯЁ]/.test(data_1))

 function index_data(data_1){
    if(typeof(data_1) != "string" ){
        console.log("Error type data")
    }else if(data_1 == ""){
        console.log("Empty data")
    }else if(data_1.indexOf("@") == -1){
         console.log("Not @")
    }else if(/[a-zа-яё]/i.test(data_1) == false){
        console.log("Not small letter")
    }else if(/[A-ZА-ЯЁ]/.test(data_1) == false){
        console.log("Not big letter")
    }else if(/[0-9]/.test(data_1) == false){
        console.log("Not number")
    }else if (data_1.length < 5 ){
        console.log("Lower than 5 symbol")
    }else if (data_1.length > 64 ){
        console.log("Higher than 64 symbol")
    }else{
        console.log("Correct!")
    }

}

index_data(data_1);