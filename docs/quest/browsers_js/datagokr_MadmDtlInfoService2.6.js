let list = document.querySelector("#list_up");
list_up.addEventListener("click", async (event) => {
    let url = `https://apis.data.go.kr/B551182/MadmDtlInfoService2.6/getSpclDiagInfo2.6?serviceKey=NOwc2KnKKdZo0fTq9El1RuGx4DFKdnmlFSUQo0cbdgPEG7mjugWiJgvNxAQHGRAjOoCpmMg4FuvnrjUqRVzQ6A%3D%3D&ykiho=JDQ4MTYyMiM1MSMkMSMkMCMkODkkMzgxMzUxIzExIyQxIyQzIyQ2MiQyNjE4MzIjNDEjJDEjJDgjJDgz&pageNo=1&numOfRows=10&_type=json`;
    let options = {}; // python에서의 dict과 유사
    try {
        let response = await fetch(url, options); // send
        let result = await response.json();               // response

        let srchCd_array = result['response']['body']['items']['item'];
        let srchCd_list = "";
        for (let srchCd_count_object of srchCd_array) {
            srchCd_list = `${srchCd_list}<tr>
            <td>${srchCd_count_object["srchCd"]}</td>
            <td>${srchCd_count_object["srchCdNm"]}</td>
            </tr>`;
            }

        let srchCd_element = document.querySelector("#srchCd_contents");
        srchCd_element.innerHTML = srchCd_list;
    } catch (error) {
        console.log(`Error Message: ${error.message}`);
    }
});
