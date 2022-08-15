// let number = [12, 2121, 1212, 33, 311, 1, 31,]
// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let k = 0; k < array.length - 1; k++) {
//             if (array[k] > array[k + 1]) {
//                 let a = array[k]
//                 let b = array[k + 1]
//                 array[k] = b
//                 array[k + 1] = a
//             }
//         }
//     }
//     return array
// }
// console.log(bubbleSort(number));

// function min(...args) {
//     if (args.length > 1) {
//         return min(args.map(v => min(v)));
//     }

//     const [arg] = args;
//     if (typeof arg === 'number') {
//         return arg;
//     }

//     if (!Array.isArray(arg)) {
//         return min(Object.values(arg));
//     }

//     return Math.min(...arg);
// }



// console.log(`args`, min(1, 2));
// console.log(`array`, min([1, 2]));
// console.log(`object`, min({ a: 1, b: 2 }));
// console.log(`objects`, min({ a: 1, b: 2 }, { c: -1, d: 100 }));





// let getWork 
// let getDontWork 
// function dontWork(work, dontWork) {
//     if (work === `number`){

//     }
// }
// dontWork(getWork, getDontWork)



let getWork = prompt(`сколько не работуют `)
let getDont = prompt(`сколько в общем `)
function min() {
   min = getWork / getDont  * 100
    
   console.log(min);
}


console.log(`от скольки `, min());
