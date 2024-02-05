// alert(location.host)
// document.body.style.backgroundColor = 'red'
// setTimeout(() => document.body.style.backgroundColor = 'yellow',1000 )

// console.log(document.body.parentNode)
// console.log(document.body.childNodes)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.nextElementSibling)

// for (let i=0;i < document.body.childNodes.length;i++) {
//     console.log(document.body.childNodes[i])
// }


// let elem = document.getElementById('num')
// elem.style.color = 'red'
// console.log(elem)

// let elems = document.querySelectorAll('li')
// for (let elem of elems) {
//     console.log(elem)
// }

// let elem2 = document.querySelector('.list')
// console.log(elem2.firstChild)


// let elem = document.querySelectorAll('.list.item')
// console.log(elem)


// let elem = document.querySelector('.list');
// let item = elem.querySelector('.item.item3');
// console.log(item.textContent);

// let elem = document.getElementsByClassName('list')
// console.log(elem)


// let elem = document.getElementById('num')
// elem.style.color = 'red';
// elem.innerHTML = '<h1>Numbers</h1>';
// console.log(elem.innerHTML)

// let item = document.querySelector('.item4')

// console.log(document.body.firstChild.data)
// item.innerHTML = document.body.firstChild.data;

// let elem = document.querySelector('p')
// setTimeout(() => elem.hidden = false, 1500)

// let newElem = document.createElement('li');
// newElem.innerHTML = '<strong>Hello</strong> I love Python';
// document.querySelector('ul').replaceWith(newElem);
// console.log(newElem);



// document.querySelector('ul').insertAdjacentHTML('afterend',
//     `
//     <div class="alert">
//         <strong>Hello</strong> I love JavaScript
//     </div>
//     `
// );


// let item = document.querySelector('ul').cloneNode(true);
// console.log(item);
// document.querySelector('h1').after(item);


// let item = document.querySelector('ul').cloneNode(true);
// console.log(item)
// item.style.background = 'yellow';
// document.querySelector('h1').after(item)
// let elem = document.querySelector('p').nextElementSibling;

// elem.style.cssText = `padding: 15px;
//                       border:1px solid #d6e9c6;
//                       noreder-radius:4px;
//                       `
// let elem2 = document.querySelector('.alert')
// console.log(elem2.className)
// setInterval(() => {
//     elem2.classList.toggle('new');
//     elem2.innerHTML = 'I love Python'
// },2000)
// elem2.classList.remove('alert')
// // console.log(getComputedStyle(elem2).back)
// let size  = getComputedStyle(elem2,'::before').fontSize
// console.log(parseInt(size))
// elem2.style.marginTop = size*3 + 'px';


// let link  = document.querySelector('.link');
// let input  = document.querySelector('.input');


// console.log(link.href)


// let elem = document.createElement('input');
// elem.classList.add('alert')
// elem.setAttribute('placeholder','Age')
// elem.setAttribute('name','Age')
// document.querySelector('.alert').before(elem)
// con
// console.log(elem)


// дз

// // №1
// let number1 = -5;
// if (number1 < 0) {
//     console.log("Число отрицательное");
// } else if (number1 > 0) {
//     console.log("Число положительное");
// } else {
//     console.log("Число равно нулю");
// }

// // №2
// let str2 = "Привет, мир!";
// console.log("Длина строки:", str2.length);

// // №3
// let str3 = "Hello";
// let lastChar = str3.charAt(str3.length - 1);
// console.log("Последний символ строки:", lastChar);

// // №4
// let number4 = 7;
// if (number4 % 2 === 0) {
//     console.log("Число четное");
// } else {
//     console.log("Число нечетное");
// }

// // №5
// let word1 = "apple";
// let word2 = "banana";
// if (word1.charAt(0) === word2.charAt(0)) {
//     console.log("Первые буквы слов совпадают");
// } else {
//     console.log("Первые буквы слов не совпадают");
// }

// // №6
// let word3 = "программирование";
// let lastLetter = word3.charAt(word3.length - 1);
// if (lastLetter === "ь") {
//     let penultimateLetter = word3.charAt(word3.length - 2);
//     console.log("Предпоследняя буква (из-за мягкого знака):", penultimateLetter);
// } else {
//     console.log("Последняя буква слова:", lastLetter);
// }

// // №1
// let number1 = 12345;
// let firstDigit = parseInt(number1.toString()[0]);
// console.log("Первая цифра числа:", firstDigit);

// // №2
// let number2 = 67890;
// let lastDigit = parseInt(number2.toString().slice(-1));
// console.log("Последняя цифра числа:", lastDigit);

// // №3
// let number3 = 98765;
// let sumOfFirstAndLast = parseInt(number3.toString()[0]) + parseInt(number3.toString().slice(-1));
// console.log("Сумма первой и последней цифры числа:", sumOfFirstAndLast);

// // №4
// let number4 = 54321;
// let numberOfDigits = number4.toString().length;
// console.log("Количество цифр в числе:", numberOfDigits);

// // №5
// let num1 = 123;
// let num2 = 456;
// let firstDigitNum1 = parseInt(num1.toString()[0]);
// let firstDigitNum2 = parseInt(num2.toString()[0]);
// if (firstDigitNum1 === firstDigitNum2) {
//     console.log("Первые цифры чисел совпадают");
// } else {
//     console.log("Первые цифры чисел не совпадают");
// }


// // №1
// let number1 = 12345;
// let firstDigit = parseInt(number1.toString()[0]);
// console.log("Первая цифра числа:", firstDigit);

// // №2
// let number2 = 67890;
// let lastDigit = parseInt(number2.toString().slice(-1));
// console.log("Последняя цифра числа:", lastDigit);

// // №3
// let number3 = 98765;
// let sumOfFirstAndLast = parseInt(number3.toString()[0]) + parseInt(number3.toString().slice(-1));
// console.log("Сумма первой и последней цифры числа:", sumOfFirstAndLast);

// // №4
// let number4 = 54321;
// let numberOfDigits = number4.toString().length;
// console.log("Количество цифр в числе:", numberOfDigits);

// // №5
// let num1 = 123;
// let num2 = 456;
// let firstDigitNum1 = parseInt(num1.toString()[0]);
// let firstDigitNum2 = parseInt(num2.toString()[0]);
// if (firstDigitNum1 === firstDigitNum2) {
//     console.log("Первые цифры чисел совпадают");
// } else {
//     console.log("Первые цифры чисел не совпадают");
// }


// // №1
// console.log("Целые числа от 1 до 100:");
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// // №2
// console.log("Целые числа от -100 до 0:");
// for (let i = -100; i <= 0; i++) {
//     console.log(i);
// }

// // №3
// console.log("Целые числа от 100 до 1:");
// for (let i = 100; i >= 1; i--) {
//     console.log(i);
// }

// // №4
// console.log("Четные числа от 1 до 100:");
// for (let i = 2; i <= 100; i += 2) {
//     console.log(i);
// }

// // №5
// console.log("Числа, кратные трем, от 1 до 100:");
// for (let i = 3; i <= 100; i += 3) {
//     console.log(i);
// }


// // №1
// let sum1 = 0;
// for (let i = 1; i <= 100; i++) {
//     sum1 += i;
// }
// console.log("Сумма всех целых чисел от 1 до 100:", sum1);

// // №2
// let sum2 = 0;
// for (let i = 2; i <= 100; i += 2) {
//     sum2 += i;
// }
// console.log("Сумма всех целых четных чисел от 1 до 100:", sum2);

// // №3
// let sum3 = 0;
// for (let i = 1; i <= 100; i += 2) {
//     sum3 += i;
// }
// console.log("Сумма всех целых нечетных чисел от 1 до 100:", sum3);

// // №4
// let num1 = 17;
// let num2 = 5;
// let remainder = num1 % num2;
// console.log("Остаток от деления", num1, "на", num2, "равен", remainder);

// // №5
// let str = "Hello";
// console.log("Символы строки с конца:");
// for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
// }

// // №1
// let arr1 = [1, 2, 3, 4, 5];
// let sumOfSquares = arr1.reduce((acc, num) => acc + num ** 2, 0);
// console.log("Сумма квадратов элементов массива:", sumOfSquares);

// // №2
// let arr2 = [1, 4, 9, 16, 25];
// let sumOfSquareRoots = arr2.reduce((acc, num) => acc + Math.sqrt(num), 0);
// console.log("Сумма квадратных корней элементов массива:", sumOfSquareRoots);

// // №3
// let arr3 = [-2, 3, -5, 7, 10];
// let sumOfPositiveNumbers = arr3.reduce((acc, num) => num > 0 ? acc + num : acc, 0);
// console.log("Сумма положительных элементов массива:", sumOfPositiveNumbers);

// // №4
// let arr4 = [2, 5, 8, 12, 15];
// let sumInRange = arr4.reduce((acc, num) => (num > 0 && num < 10) ? acc + num : acc, 0);
// console.log("Сумма элементов массива от 0 до 10:", sumInRange);

// // №1
// let str1 = 'abcde';
// let lettersArray = Array.from(str1);
// console.log("Массив букв строки:", lettersArray);

// // №2
// let number2 = 12345;
// let digitsArray = Array.from(String(number2), Number);
// console.log("Массив цифр числа:", digitsArray);

// // №3
// let number3 = 12345;
// let reversedNumber = parseInt(String(number3).split('').reverse().join(''));
// console.log("Перевернутое число:", reversedNumber);

// // №4
// let number4 = 12345;
// let sumOfDigits = String(number4).split('').reduce((acc, digit) => acc + Number(digit), 0);
// console.log("Сумма цифр числа:", sumOfDigits);

// // №1
// let arr1 = [];
// for (let i = 1; i <= 10; i++) {
//     arr1.push(i);
// }
// console.log("Массив целых чисел от 1 до 10:", arr1);

// // №2
// let arr2 = [];
// for (let i = 2; i <= 100; i += 2) {
//     arr2.push(i);
// }
// console.log("Массив четных чисел от 1 до 100:", arr2);

// // №3
// let arr3 = [1.456, 2.125, 3.32, 4.1, 5.34];
// let roundedArray = arr3.map(num => Math.round(num * 10) / 10);
// console.log("Округленные дроби:", roundedArray);


// // №1
// let array1 = ["http://example.com", "https://google.com", "ftp://fileserver"];
// let filteredArray1 = array1.filter(str => str.startsWith("http://"));
// console.log("Строки, начинающиеся на http://:", filteredArray1);

// // №2
// let array2 = ["index.html", "styles.css", "script.js", "about.html"];
// let filteredArray2 = array2.filter(str => str.endsWith(".html"));
// console.log("Строки, заканчивающиеся на .html:", filteredArray2);

// // №3
// let array3 = [10, 20, 30, 40, 50];
// let increasedArray = array3.map(num => num * 1.1);
// console.log("Массив чисел, увеличенных на 10%:", increasedArray);

// // №1
// let array1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
// console.log("Массив случайных чисел от 1 до 100:", array1);

// // №2
// let number2 = 12345;
// let strNumber2 = String(number2);
// for (let i = strNumber2.length - 1; i >= 0; i--) {
//     console.log(strNumber2[i]);
// }

// // №3
// let array3 = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < array3.length; i += 2) {
//     console.log(array3.slice(i, i + 2));
// }

// // №4
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let mergedArray = arr1.concat(arr2);
// console.log("Слитый массив:", mergedArray);
