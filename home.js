"use strict";

// console.log(NaN * NaN);
// console.log(NaN * false);
// console.log(true + NaN);

// /// -----------  String  ----------------

// let isName='Javascript';
// console.log(isName.toLowerCase());
// console.log(isName.toUpperCase());
// console.log(isName.length);
// console.log(isName.substring(2,5));
// console.log(isName.search('a'));
// console.log(isName.match(/a/g));

// let str='javascript the best programming language';
// console.log(str.charAt(1));



// let a = ['nodejs', 'golang', 'rust', 'C++', 'PHP', 'Java', 'C', 'Python'];


// Push qo'shish
// a.push(123);
// a.push('a');
// a.push(true);

// console.log(a);

// // pop oxiridan o'chiradi
// a.pop();
// a.pop();
// a.pop();

// console.log(a);

// unshift arrayga boshidan qo'shisj

// a.unshift('js');
// a.unshift('123');


// // shift boshidan o'chirib tashedi

// a.shift()


// ctrl + x  splice

// a.splice(5, a.length-1)



// ctrl + c slice

// let b = a.slice(1, a.length - 1);


// let text = 'jandasdn kcwo;ierh we0[rj[rv'.split('')
// let a = ['js', 'js', 'js', 'js', 'js', 'js']



// // let res = a.concat(text)

// let res = [...a, ...text]


// a.includes
// console.log(res)

// console.log(a)
// console.log(b)



// 1-masala

// let a = +prompt('N')
// let n = 15;

// let arr = []

// for (let i = 1; i <= n; i++){
//     arr.push(i)
// }

// console.log(arr)


// 2-masala

// let n = 15;

// let arr = []

// for (let i = 1; i <= n; i++){
//     arr.push(i**2)
// }

// console.log(arr)


// 3-masala

// let n = 15;

// let arr = []

// for (let i = 1; i <= n; i++){
//     arr.push(i)
// }

// let count = 0;
// for (let i = 0; i<n; i++){
//     count += arr[i];
// }

// console.log(arr, count)


// 4-masala

// let n = 15;

// let arr = []

// for (let i = 1; i <= n; i++){
//     arr.push(i)
// }

// let toq = 0;
// let juft = 0;

// for(let i = 0; i < n; i++){
//     if (i % 2 === 0){
//         juft -= arr[i];
//     }else{
//         toq += arr[i];
//     }
// }

// console.log(juft, toq)

// 5-masala

// let n = +prompt("N");

// let arr = []

// for (let i = 1; i <= n; i++){
//     arr.push(i)
// }

// let count = 0;
// for (let i = 0; i<n; i++){
//     count += arr[i];
// }

// console.log(arr, count)


// 6-masalaa

// let n = 15;

// let arr = []

// for (let i = 1; i <= n; i++){
//     arr.push(i)
// }

// for (let i = n-1; i>=0; i--){
//     console.log(arr[i])
// }


// 7-masala

// let a = [["kamol", 28], ["lola", 25], ["John", 15]];
// let b = []

// console.log(`${a[0][0]} va ${a[1][0]} yoshlari orasidagi farq ${a[0][1] - a[1][1]} ga teng`)
// console.log(`${a[0][0]} va ${a[2][0]} yoshlari orasidagi farq ${a[0][1] - a[2][1]} ga teng`)
// console.log(`${a[1][0]} va ${a[2][0]} yoshlari orasidagi farq ${a[1][1] - a[2][1]} ga teng`)


// 8-masala


// let k = +prompt("K");
// let l = +prompt("L");


// let arr = []

// if (k > l){
//     for (let i = l; i<=k; i++){
//         arr.push(i)
//     }
// }else{
//     for (let i = k; i<=l; i++){
//         arr.push(i)
//     }
// }

// let count = 0

// for (let i = 0; i < arr.length; i++){
//     count += arr[i];
// }

// console.log(arr, count)

// 9-10-masala


// let n = 15;

// let arr = []

// for (let i = 1; i <= n; i++){
//     arr.push(i)
// }

// let juft = []

// for (let i = 0; i < arr.length; i++){
//     if (i % 2 === 0){
//         juft.push(arr[i])
//     }
// }
// let max = juft[0];
// let min = juft[0];
// console.log(juft)
// for (let i = 0; i < juft.length; i++){
//     if (juft[i] >= max){
//         max = juft[i]
//     }
//     if (juft[i] <= min){
//         min = juft[i]
//     }
// }

// console.log(`Max = ${max}\nMin = ${min}`)

// 11-masala


// let n = 15;

// let arr = []

// for (let i = 1; i <= n; i++){
//     arr.push(i)
// }

// let toq = []

// for (let i = 0; i < arr.length; i++){
//     if (i % 2 === 1){
//         toq.push(arr[i])
//     }
// }
// let max = toq[0];
// let min = toq[0];
// console.log(toq)
// for (let i = 0; i < toq.length; i++){
//     if (toq[i] >= max){
//         max = toq[i]
//     }
//     if (toq[i] <= min){
//         min = toq[i]
//     }
// }

// console.log(`Max = ${max}\nMin = ${min}`)


// 12-masala

// let n = +prompt("N")
// let arr = []
// for (let i = 1; i<=n; i++){
//     arr.push(i)
// }

// let count = 0

// for (let i = 0; i < arr.length; i++){
//     count += arr[i]
// }


// console.log(`O'rta arifmetik ${count/n}`)



// 13-masala


// let n = +prompt("N")
// let arr = []
// for (let i = 1; i<=n; i++){
//     arr.push(i)
// }

// for (let i = 0; i < arr.length; i++){
//     if (i % 2 === 1){
//         console.log(arr[i]);
//     }
// }


// 14-masala

// let n = +prompt("N")
// // let n = 15;
// let arr = []
// for (let i = 1; i<=n; i++){
//     arr.push(i)
// }
// let count = 0
// for (let i = 0; i < arr.length; i++){
//     count = 0
//     for (let j = 1; j <= arr[i]; j++){
//         if (arr[i] % j === 0){
//             count++;
//         }
//     }
//     if (count > 2){
//         console.log(arr[i])
//     }
// }

// 15-masala

// let n = +pr  ompt("N")
// let n = 15; 
// let arr = []
// for (let i = 1; i<=n; i++){
//     arr.push(i)
// }


// for (let i = 0; i<arr.length; i++){
//     if (arr[i] % 2 === 1 ){
//         console.log(arr[i])
//     }
// }

// 16-masala


// let arr = [1, 2, 3, "salom", "dunyo", true, false, NaN, "Js", 5, 8, "python"]
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === "string"){
//         console.log(arr[i])
//     }
// }


// 17-masala

// let a = [1, 2, 3, 4, 5, 6, 7, 8]
// let b = [12, 2, 33, 44, 65, 26, 7, 38, 3]

// var union = [...new Set([...a, ...b])];

// console.log(union)


// 18-masala

// let n = +prompt("N")

// let a = []
// let k;
// for (let i = 0; i < n; i++){
//     k = +prompt(`${i+1}-element`)
//     a.push(k)
// }

// console.log(a)



// 19-masala

// let n = +prompt("N")

// let a = []
// let k, count = 0;
// for (let i = 0; i < n; i++){
//     k = +prompt(`${i+1}-element`)
//     count += k;
//     a.push(k)
// }

// console.log(`Array- ${a}, Yig'indi - ${count}`)


// 20-masala

// let n = +prompt("N")

// let a = []
// let k;
// for (let i = 0; i < n; i++){
//     k = +prompt(`${i+1}-element`)
//     a.push(k)
// }
// let str = prompt("Juft yoki Toq");

// if (str === "toq" || str === "Toq"){
//     for (let i = 0; i < a.length; i++){
//         if ( a[i] % 2 === 1){
//             console.log(a[i])
//         }
//     }
// }

// if (str === "juft" || str === "Juft"){
//     for (let i = 0; i < a.length; i++){
//         if ( a[i] % 2 === 0){
//             console.log(a[i])
//         }
//     }
// }



// 21-masala

// let n = +prompt("N")

// let a = []
// let k;
// for (let i = 0; i < n; i++){
//     k = +prompt(`${i+1}-element`)
//     a.push(k)
// }

// console.log(a[a.length-1])


// 22-masala

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]


// console.log([...new Set(a)]) 

let a = "match() searches for a match in a string"

let k = a.match("sea")

console.log(k)

let text = "       Hello World!     sdsdasd   dasd a   "; // output : Hello World!
let result = text.trim();
console.log(result.length, text.length)

let str = new String("This is string"); 
console.log("str.charAt(0) is:" + str[0]); 
console.log("str.charAt(1) is:" + str.charAt(1)); 
console.log("str.charAt(2) is:" + str.charAt(2)); 
console.log("str.charAt(3) is:" + str.charAt(3)); 
console.log("str.charAt(4) is:" + str.charAt(4)); 
console.log("str.charAt(5) is:" + str.charAt(5));


const printText = "The quick brown fox jumps";
const printSplit = printText.split(" ")
console.log(printSplit);
//output:[ 'The', 'quick', 'brown', 'fox', 'jumps' ]
console.log(printSplit[4]);