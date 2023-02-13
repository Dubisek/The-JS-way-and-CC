// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.


// let musketeers = ['Athos','Porthos', 'Aramis']

// function forLoop() {
//     for(a = 0; a < musketeers.length; a++){
//         console.log(musketeers[a])
//     }
// }

// forLoop()

// musketeers.push('D Arthagan')

// function forEachM() {
//     musketeers.forEach(ele => console.log(ele))
// }

// forEachM()

// musketeers.pop()

// function forOfM() {
//     for( element of musketeers) {
//         console.log(element)
//     }
// }

// forOfM()

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

// const values = [3, 11, 7, 2, 9, 10];

// let values = [3, 11, 7, 2, 9, 10]

// function calcSum() {
//     let summ = 0
//     values.forEach(element => summ += element)
//     console.log(summ)
//     }

//     calcSum()




// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

// const values = [3, 11, 7, 2, 9, 10];


// let values = [3, 11, 7, 2, 9, 10, 50]


// function maxVal() {
//     let value = 0
//     values.forEach(element => {if(element > value){value = element}})






//     console.log(value)
// }

// maxVal()




// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

// function wordPrompt() {
//     let arr = []
//     let pr = 'f'

//     while(pr !== 'stop'){
//         pr = prompt('enter a word', 'stop')
//         if(pr === 'stop'){
//             console.log(arr)
//         } else {arr.push(pr)}
//     }


// }


// wordPrompt()

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
 if(n < 0 || m < 0){
    return 0
 } else {return m*n}
}

// Very simple, given an integer or a floating-point number, find its opposite.

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
 return number * -1
  }