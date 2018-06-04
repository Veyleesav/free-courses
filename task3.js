/* Task 3 */
let t1 = parseInt(process.argv[2]);
let t2 = parseInt(process.argv[3]);
let timeSum = t1+t2;
let sec_num = parseInt(timeSum); //second parameter is 10 by default so no need in it
let hours   = Math.floor(sec_num / 3600);
let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
let seconds = sec_num - (hours * 3600) - (minutes * 60);
let secondsTitle='';
switch (seconds.toString().split('').pop()){
    case '1':
        secondsTitle='секунда';
        break;
    case '2':
    case '3':
    case '4':

        secondsTitle='секунды';
        break;
    default:
        secondsTitle='секунд';

}
let minutesTitle='';
switch (minutes.toString().split('').pop()){
    case '1':
        minutesTitle='минута';
        break;
    case '2':
    case '3':
    case '4':
        minutesTitle='минуты';
        break;
    default:
        minutesTitle='минут';
}
if(minutes==11 || minutes==12 || minutes==13 || minutes==14){ //fixes 10-20 trouble
    minutesTitle='минут';
}
let hoursTitle='';
switch (hours.toString().split('').pop()){
    case '1':
        hoursTitle='час';
        break;
    case '2':
    case '3':
    case '4':
        hoursTitle='часа';
        break;
    default:
        hoursTitle='часов';

}

//if-else statements to use hours, minutes or seconds only when necessary
if (hours>0) {
    if (minutes>0) {
        if (seconds>0)
        process.stdout.write(hours + ' '+hoursTitle+' ' + minutes + ' '+minutesTitle+' '+ seconds + ' '+secondsTitle);
        else{
            process.stdout.write(hours + ' '+hoursTitle+' ' + minutes + ' '+minutesTitle);
        }
    } else {
        process.stdout.write(hours + ' '+hoursTitle);
    }

}
else if (minutes>0){
    if (seconds>0) {
        process.stdout.write(minutes + ' '+minutesTitle+' '+ seconds + ' '+secondsTitle);
    }
    else{
        process.stdout.write(minutes + ' '+minutesTitle);
    }
}
else{
    process.stdout.write(seconds + ' '+secondsTitle);
}

/* Put your code here */
