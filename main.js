const search = document.querySelector(".element-2");
let numbers = document.querySelector("input");
const element1 = document.querySelector('.element-1');
const element2 = document.querySelector('.element-2');

search.addEventListener('click', findOutlier);


//numbers = parseInt()
 let numbersNumbers = numbers.value.split(',').map(function(item) {
    return parseInt(item, 10);
}) 
console.log(typeof numbersNumbers);
 function findOutlier() {
    element1.style.display = "none";
    element2.style.display = "none";
    let array = [];
    array = array.push(numbersNumbers);
    //array = array.push(numbers.split(', ').join(''));

    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
       // array[i] = array.push(numbers);
       array = array.push(numbers.split(', ').join(''));

    }

   //array = array.push(numbers).split(', ').join('')
    console.log(array);
   /* let evens = [];
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
    } */
}