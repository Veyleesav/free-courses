/* Task 1 */
//First attempt with default functions of js :)
let initialNum = process.argv[1];
let initialNotation =  parseInt(process.argv[2]);
let neededNotation =  parseInt(process.argv[3]);
let notatedNum = parseInt(initialNum, initialNotation);
let ans = notatedNum.toString(neededNotation);
process.stdout.write(ans);
/* Put your code here */
