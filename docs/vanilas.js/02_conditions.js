// if 기본 구문
if (true) {
}   else if (true) {
}   else{
}

let numbers = 10 ;

if (numbers > 0) {
    console.log("숫자는 양수");
}  else if (numbers < 0) {
    console.log("숫자는 음수")
}  else{
    console.log("0입니다.")
}
// VM1081:2 숫자는 양수
// undefined

// 삼항 연산자

if (true) {
}   else{
}

result = (true) ? "as true" : "as false"; 
result = (numbers > 0) ? '양수' : "음수";
// '양수'
console.log(`숫자는 ${result}`);
// VM636:1 숫자는 양수