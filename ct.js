let price = 10000 ;
let range = "day" ;

if (range == "day") {
    console.log(price + " в день" );
} else if(range == "month") {
   console.log(price + " в месяц" ) ;
} else if(range == "year") {
   console.log(price + " в год" ) ;
} else {
    console.log("вбейте нормальное значение range");
}


let temp = 23;
let weather = "clear";
let activity;

if (temp >= 25 & weather == "clear"){
    activity = "golf";
} else if  ((temp >= 10 & temp<=24) | weather =="cloudy" ){
    activity="bowling";
} else{
    activity = "hiking";
}

console.log(activity);


let a = 6;
let b = 0;
let sign = "/";
if (sign == "+") {
    console.log(a+b)
} else if (sign == "-") {
    console.log(a-b)
} else if (sign == "*") {
    console.log(a*b)
} else if (sign == "/") {
    if (b==0){
    console.log("на ноль делить нельзя");
    } else {
        console.log(a/b);
    }
} else{
    console.log("введите норм значение")
}



let world = "менюu";
let dlina = world.length;
if (Math.sqrt(dlina) % 1 === 0){
    console.log(1);
} else{
    console.log(0);
}
