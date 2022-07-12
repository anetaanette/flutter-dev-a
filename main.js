console.log("kajdnsk");


const search = document.querySelector(".element-2");
let numbers = document.querySelector("input");
const element1 = document.querySelector('.element-1');
const element2 = document.querySelector('.element-2');

search.addEventListener('click', findOutlier);

function findOutlier() {
    let array = [];
    array = numbers.value.split(', ').join('');
    console.log(array);
    element1.style.display = "none";
    element2.style.display = "none";
    let evens = [];
    let odds = [];

     for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evens.push(array[i]);
        } else {
            odds.push(array[i]);
        }
        
    }
    console.log(evens);
    console.log(odds);
    if (odds.length > evens.length) {
        let documentEvens = document.createTextNode(evens);
       document.body.appendChild(documentEvens);
       
    } else {
        let documentOdds = document.createTextNode(odds);
        document.body.appendChild(documentOdds);
    } 
}

