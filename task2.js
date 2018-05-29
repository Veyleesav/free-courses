/* Task 2 */
let months = { "января": 0, "февраля": 1, "марта": 2, "апреля": 3, "мая": 4, "июня": 5, "июля": 6, "августа": 7, "сентября": 8, "октября": 9, "ноября": 10, "декабря": 11 };
let day = process.argv[1];
let month = months[process.argv[2]];
let year = process.argv[3];
let initialDate = new Date(year, month, day);
let finalDate = new Date(year, 11, 31);
let res = (finalDate - initialDate) / 86400000;
process.stdout.write(res + '\n');
/* Put your code here */
