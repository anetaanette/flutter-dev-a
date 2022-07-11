console.log("kajdnsk");


const search = document.querySelector(".element-2");
let numbers = document.querySelector("input");
const element1 = document.querySelector('.element-1');
const element2 = document.querySelector('.element-2');

search.addEventListener('click', searchNumber);

function searchNumber() {
    let numbersValue = numbers.value;
    let array = [];
    array = numbersValue.replaceAll(',', ', ');
    console.log(array); 
    element1.style.display = "none";
    element2.style.display = "none";

    var evens = [];
    var odds = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2) {
            evens.push(array[i]);
        } else {
            odds.push(array[i]);
        }
    }
    let elen = evens.length;
    let olen = odds.length;

    if (elen > olen) {
        let documentEvens = document.createTextNode(evens);
       document.body.appendChild(documentEvens);
       
    } else {
        let documentOdds = document.createTextNode(odds);
        document.body.appendChild(documentOdds);
    }

    //let number = document.createTextNode(theNumber);

}