console.log("kajdnsk");


const search = document.querySelector(".element-2");
let numbers = document.querySelector("input");

search.addEventListener('click', searchNumber);

function searchNumber() {
    let numbersValue = numbers.value;
    let array = [];
    array = numbersValue.replaceAll(',', ', ');
    console.log(array); 
}