const search = document.querySelector(".element-2");
let numbers = document.querySelector("input").value;
const element1 = document.querySelector('.element-1');
const element2 = document.querySelector('.element-2');

search.addEventListener('click', findOutlier);
let array = [];

function findOutlier() {
numbers = numbers.split(',').join(' ');
function intoInt() {
    numbers = parseInt(numbers);
}
intoInt();

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] = ' ') {
        array = array.push(array[i+1]);
    } else {
        numbers = array.push(array[i]);
    }
}
console.log(array);
}

/* function findOutlier() {
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

    let eLen = evens.length;
    let oLen = odds.length
    console.log(evens);
    console.log(odds);

    if (oLen > eLen) {
        let documentEvens = document.createTextNode(evens);
       document.body.appendChild(documentEvens);
       
    } else {
        let documentOdds = document.createTextNode(odds);
        document.body.appendChild(documentOdds);
    } 

}
*/








/* 
// SOLUTION WITHOUT USER'S INPUT
const search = document.querySelector(".element-2");
const element1 = document.querySelector('.element-1');
const element2 = document.querySelector('.element-2');


search.addEventListener('click', findOutlier);


let array = [2, 4, 0, 100, 4, 11, 2602, 36];
array = [160, 3, 1719, 19, 11, 13, -21];
console.log(array);


function findOutlier() {
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

    let eLen = evens.length;
    let oLen = odds.length
    console.log(evens);
    console.log(odds);

    if (oLen > eLen) {
        let documentEvens = document.createTextNode(evens);
       document.body.appendChild(documentEvens);
       
    } else {
        let documentOdds = document.createTextNode(odds);
        document.body.appendChild(documentOdds);
    } 
}
*/ 