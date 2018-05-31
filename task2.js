let arrA =  process.argv[1].replace(/'/g, "").split("");
let arrB =  process.argv[2].replace(/'/g, "").split("");
let JsonB = JSON.stringify(arrB); //to work with JSON obj
let shiftCount = -1;
for(let i = 1; i <= arrA.length; i++ )
{
    arrA = arrA.concat(arrA.shift());

    if(JSON.stringify(arrA) === JsonB)
    {
        shiftCount = ( i > arrA.length/2 )?arrA.length-i:i;
        break;
    }
}

process.stdout.write(shiftCount.toString());
