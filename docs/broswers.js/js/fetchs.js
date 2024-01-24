// fetch() 기본 구조

// async (params) => {
//     try {
//         let response = await fetch(url, options)
//     } catch(error) {
//         console.log(`Error Message : ${error.message}`)
//     }
// }

// data go .kr-postman에서 get방식으로 url에 params가 전부 다 담겨 있을때
let rate_list = document.querySelector("#rent-loan-rate-info_rate-list");
rate_list.addEventListener("click", async (event) => {
    let url = `https://apis.data.go.kr/B551408/rent-loan-rate-info/rate-list?serviceKey=NOwc2KnKKdZo0fTq9El1RuGx4DFKdnmlFSUQo0cbdgPEG7mjugWiJgvNxAQHGRAjOoCpmMg4FuvnrjUqRVzQ6A%3D%3D&pageNo=1&numOfRows=30&dataType=JSON`;
    let options = {}; // python에서의 dict과 유사
    try {
        let response = await fetch(url, options); // send
        let result = await response.json();               // response
        console.log(`response result : ${result} `)
        let contents = document.querySelector("#rent-loan-rate-info_rate-list_contents");
        contents.innerHTML = result["header"]["resultMsg"];
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});

// datalab_shoppinginstie-postman에서 post 방식일때
let datalab_shoppinginstie = document.querySelector("#datalab_shoppinginstie");
datalab_shoppinginstie.addEventListener("click", async (event) => {
    let url = `https://openapi.naver.com/v1/datalab/shopping/categories`;
    let data = {
        "startDate": "2023-08-01",
        "endDate": "2023-09-30",
        "timeUnit": "month",
        "category": [
            {"name": "패션의류", "param": [ "50000000"]},
            {"name": "화장품/미용", "param": [ "50000002"]}
        ],
        "device": "pc",
        "gender": "f",
        "ages": [ "20",  "30"]
    };
    let options = {
        method : "POST",                                     // post 방식임을 나타내줘야함.
        headers : {
            "Content-Type":"application/json",
            "X-Naver-Client-Id":"FgRcI134o3JcUtBEYT8v",
            "X-Naver-Client-Secret":"kdq7Y9wHFh"
        },
        body: JSON.stringify(data)                                          // body의 data를 json방식으로 표현해줌
    }; // python에서의 dict과 유사
    try {
        let response = await fetch(url, options); // send
        let result = await response.json();               // response
        console.log(`response result : ${result} `)
        let contents = document.querySelector("#datalab_shoppinginstie_contents");
        contents.innerHTML = result["endDate"];
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});