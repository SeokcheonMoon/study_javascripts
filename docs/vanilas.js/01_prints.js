let name =  "seokcheon"                                 // 변수선언
// undefined
console.log(name)                                       // name을 입력하니 seokcheon을 반환
// VM323:1 seokcheon
// undefined

let welcome = "Hello World!"
// undefined
welcome
// 'Hello World!'
console.log(welcome)
// VM555:1 Hello World!
// undefined
let numbers = 55
// undefined
numbers
// 55

"String:" + welcome
// 'String:Hello World!'
let concat = "String : " + welcome + ", Number : " + numbers
// undefined
concat
// 'String : Hello World!, Number : 55'

`String : ${welcome}`                                                         //  '' 이 아니라 `` 로 적용 시 $표시를 통해 문자가 아닌 변수로 인식을 한다.
// 'String : Hello World!'
`String : ${welcome}, Number : ${numbers}`
// 'String : Hello World!, Number : 55'
let concats_tilt = `String : ${welcome}, Number : ${numbers}`
// undefined
concats_tilt
// 'String : Hello World!, Number : 55'
console.log(concats_tilt)                                                     // console.log()는 자바스크립트 언어를 html 로 해석한다.
// VM1528:1 String : Hello World!, Number : 55

document.querySelector("#first_id")