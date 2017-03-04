// main.js
// 전부를 lib로 가져오라. './lib'; 파일로부터
// lib는 객체형태로 담긴다.

// ex1.
// import * as lib from './lib';
// console.log(lib);             // (1)
// console.log(lib.square(5));   // (2) 25
// console.log(lib.sqrt(4));     // (3) 2
// lib.default();

// ex2.
// import { square, sqrt } from './lib';
// console.log(square(5));       // (4)
// console.log(sqrt(4));         // (5)

// ex3.
// import { square, sqrt } from './lib';
// console.log(lib.square(5));   // (2) 25
// console.log(lib.sqrt(4));     // (3) 2
// default(); // 예약어 `default` 에러..

// ex4.
// import lib, { square, sqrt } from 'lib';
// console.log(lib);             // (4)
// console.log(square(5));       // (5)
// console.log(sqrt(4));         // (6)

// ex3 - 에러
// import lib from './lib';
// console.log(lib);             // (1)
// console.log(lib.square(5));   // (2) 25
// console.log(lib.sqrt(4));     // (3) 2

// ex5. 트리 쉐이킹 : 해당 요소만 가져온다. webpack 버전 2
import lib, { square as rt } from 'lib';
console.log(rt(4));         // (6)
