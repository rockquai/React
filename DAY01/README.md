###### ReactJS

# DAY 01

## Setting
- 프론트엔드 개발 도구 
- git
- node / npm
- package.json
- babel
- webpack
- ES6

### 프론트엔드 개발 도구 
#### [npm] (https://www.npmjs.com/) 
- A package manager for javascript 

#### [bower] (https://bower.io/) 
- A package manager for the web
- component 관리 
- html, css, script, img 관리
- 설치는 npm 으로 설치해야 되고... 경로가 꼬이는 경우가 발생

#### [Grunt] (http://gruntjs.com/)
- 업무 자동화(Automate Tasks)
- The JavaScript Task Runner
- 설정이 어렵고, 업데이트가 잘 안된다. 지금은 잘 사용 안함

#### [gulp] (http://gulpjs.com/)
- 업무 자동화(Automate Tasks)
- Automate and enhance your workflow
- `Grunt`보다 1년 뒤에 나옴.
- `html, css, img` - minification, `script` ugly file
- 미리 동작을 정의하고 정의된 것에 의해서 실행.
- 확장성이 있다.
- sass -> css 변환

#### [browserify] (http://browserify.org/)
- bundler
- 여러개의 script 파일을 하나로 묶어준다.

#### [webpack] (https://webpack.github.io/)
: bundler
: 여러개의 script 파일을 하나로 묶어준다.
: gulp에서 사용하고 있는 기능들을 webpack으로 가져오고 있다
: 모듈을 사용한다.
: commonJS 기반이다.
 
#### [RequireJS] (http://requirejs.org/)
: AMD, Javascripts 파일(모듈) 로더 라이브러리
: 의존성 주입이 강력. 
: 대형 프로젝트에 많이 사용
: node에서 사용 안함

##### [AMD] (https://github.com/amdjs/amdjs-api/blob/master/AMD.md)
- 동적 로딩, 의존성 관리, 모듈화가 톱니바퀴처럼 아름답게 맞물린 API 디자인 제시.
- AMD의 근간이 되는 3가지 개념
    - `동적 로딩`  UI 초기 구현에 필요한 파일만 먼저 불러오고, 나머지는 필요에 따라 개별 호출한다.
    - `의존성 관리`  JS 파일간 의존성 관리를 명시적으로 하여야 한다.
    - `모듈화` 전역 공간을 오염시키지 않아 JS 파일 간 충돌로 인한 오류를 사전에 방지한다.

#### [CommonJS] (http://www.commonjs.org/)
: nodeJS는 commonJS 기반.
: 동기방식
: 불러오는 순서대로
: node에서 사용

### git
- [(gui) sourceTree 설치](https://www.sourcetreeapp.com/)
- [git 간편안내서](https://rogerdudler.github.io/git-guide/index.ko.html)
- [직접 따라하며 git 브랜치 배우기](http://learnbranch.urigit.com/)
- [Git 실습교육](http://www.slideshare.net/flyskykr/github-46014813)

### [nodejs](https://nodejs.org/ko/)

```bash
$ node -v
$ npm -v
$ [sudo] npm i -g npm webpack babel-core
```

### [npm] (https://www.npmjs.com/) 

```bash
$ [sudo] npm install --global npm
$ [sudo] npm i -g npm // 줄여서 쓸 수 있다.
```

### [yarn](https://yarnpkg.com/)
- npm와 기능은 같다. 속도가 빠르다 
- npm의 `package.json` 동일하게 사용한
-`yarn.lock`파일을 만든다. 

> `$ yarn add jquery` -> devDependencies 로 들어간다.

```bash
$ [sudo] npm i -g yarn
```

>  Mac일 경우 `sudo` (pseudo를 의미.)를 붙여준다. 

### package.json

- [모두 알지만 모두 모르는 package.json](http://programmingsummaries.tistory.com/385)

```bash
$ mkdir [folderName] && cd [folderName]

$ npm init -y // creating a package.json file.
// yarn init -y

$ npm i jquery       ( i  === install )

$ npm i -S jquery    ( -S === --save )
// yarn add jquery

$ npm i -D jquery    ( -D === --save-dev )
// yarn add jquery -D

$ npm un jquery      ( un === uninstall )

$ npm un -S jquery
$ npm un -D jquery

$ npm i -S react react-dom
$ npm i -D react react-dom babel-core

$ npm un -S react react-dom
$ npm un -D react react-dom babel-core

$ yarn add jquery
$ yarn add react react-dom
$ yarn add react react-dom babel-core -D
$ yarn remove react react-dom babel-core
```

```js
//------ package.json ------
{
  "name": "npmTest",    // 필수
  "version": "1.0.0",   // 필수
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "6.13.0"
  }
}
```

표기                | 설명
:---                | :---
version             | version 과 일치.
&gt;version         |
&gt;=version        |
&lt;version         |
&lt;=version        |
~version            | version 과 근사한 버전.
^version            | version 과 호환되는 것.
1.2.x               | 1.2.0, 1.2.1, 등등. 1.3.0은 제외
*                   | 모든 버전
""                  | * 와 같음
version1 - version2 | &gt;= version1 &lt;= version2 과 같음.
range1 || range2    | range1 또는 range2


> `rm -rf`  하위에 모든 파일을 지워라. (r : recursive, f : false)


#### dependencies VS devDependencies
#### dependencies 
- 실행(런타임) 중에 필요

```bash
$ npm install --save {Package name}  

```
#### devDependencies
- 개발 과정 중에만 필요

```bash
$ npm install --save-dev {Package name}
```

#### 버전별 설치 
```bash
$npm i -D webpack@1 // 버전 1
$ npm un jquery@1 // 버전 1
$ npm un jquery@1.12.3 // 특정한 버전으로 설치를 할 있다 
````

```js
"devDependencies": {
  "babel-core": "^6.13.0",
  "babel-preset-es2015": "^6.14.0"
},
"dependencies": {
  "react": "^15.3.2",
  "react-dom": "^15.3.2"
}
```

> `^` 호환되는 최신버전으로 설치가 된다. 


### [babeljs.io](https://babeljs.io/)
- Use next generation JavaScript, today.
- [compat table] (http://kangax.github.io/compat-table/es5/)

```js
//------ .babelrc ------
{
  "presets": ["es2015"]
}
```

> [plugin/preset ordering](http://babeljs.io/docs/plugins/)
> - 플러그인들이 프리셋보다 먼저 실행된다.
> - 플러그인 실행 순서 : 처음 -> 나중
> - 프리셋 실행 순서 : 나중 -> 처음

```js
{
  "plugins": [
    "transform-decorators-legacy"  // 1번째로 실행됨
  ],
  "presets": [
    "es2015", // 4번쨰로 실행됨
    "react",  // 3번째로 실행됨
    "stage-1" // 2번쨰로 실행됨
  ],
}
```

```js
//----- test.js -----
console.log([1,2,3].map(n => n + 1));
```

```bash
> [sudo] npm i -g babel-cli
> babel test.js
> babel test.js -d bundle
```

### [webpack] (https://webpack.github.io/)
- [webpack module bundler](https://webpack.github.io/)
- [javascript 모듈화도구 webpack](http://d2.naver.com/helloworld/0239818)
- [초보자용 webpack 튜토리얼 part1](https://firejune.com/1798/%EC%B4%88%EB%B3%B4%EC%9E%90%EC%9A%A9+Webpack+%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC+%ED%8C%8C%ED%8A%B81+-+Webpack+%EC%9E%85%EB%AC%B8)
- [Webpack - The Confusing Parts (원본)](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.zgbts1puu)
- [Webpack의 혼란스런 사항들 (번역)](https://github.com/FEDevelopers/tech.description/wiki/Webpack%EC%9D%98-%ED%98%BC%EB%9E%80%EC%8A%A4%EB%9F%B0-%EC%82%AC%ED%95%AD%EB%93%A4)
- [webpack configurations](https://webpack.github.io/docs/configuration.html)
- [list of plugins](https://github.com/webpack/docs/wiki/list-of-plugins)
- [입문자를 위한 Webpack 튜토리얼](https://github.com/arahansa/WebpackTutorial/tree/master/ko-arahansa)

- [webpack dev tools](https://webpack.github.io/docs/configuration.html#devtool)

```bash
> [sudo] npm i -g webpack
> npm i -D webpack babel-loader
```

```js
//----- webpack.config.js -----
module.exports = {
  devtool: 'eval',                    // 개발용 디버깅 기능
  entry: './main.js',                 // 진입파일
  output: {                           // 결과파일
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [                        // 모듈별 핸들링 정의
      {
        test: /\.js$/,                // 정규표현식(조건 설정)
        exclude: [ /node_modules/ ],  // 제외할 경로
        include: [ /src/ ],           // 포함할 경로
        loader: 'babel'               // 적용할 로더
      }
    ]
  }
}
```

```js
//----- main.js -----
const a = 1;
const b = 2;
console.log(`${a} + ${b} = ${a+b}`);
```

```bash
> webpack
```

---

### ES6

## 1. block scope
- 기존의 함수에 의한 스코프처럼 `{ }`으로 감싼 내부에 별도의 스코프가 생성된다.

```js
{
  let a = 10;
  {
    let a = 20;
    console.log(a);    // (1) 20
  }
  console.log(a);      // (2) 10 
}
console.log(a);        // (3) a is not defined
```

```js
let sum = 0;
for(let j = 1 ; j <= 10 ; j++){
  sum += j;
}
console.log(sum);     // (1) 55
console.log(j);       // (2) j is not defined
```

```js
if(Math.random() < 0.5) {
  let j = 0;
  console.log(j);     // (1) 0
} else {
  let j = 1;
  console.log(j);     // (2) undefined
}
console.log(j);       // (3) j is not defined
```

## 2. block scoped variables
`let`은 기존의 `var`를 대체하는 블락변수이고, `const`는 그 중 한 번 선언 및 정의되고 나면 값을 변경할 수 없는 변수이다.
블락 스코프 내부에서 선언된 `let`, `const`는 해당 스코프 내에서만 존재하며, 이들에 대해서는 'TDZ'가 존재한다.
> `TDZ (temporal dead zone, 임시사각지대)` : 블락 스코프 내에서는 지역변수/상수에 대한 호이스팅이 이뤄지기는 하나, 선언된 위치 이전까지는 해당 변수/상수를 인식하지 못한다.


```js
console.log(a);    // (1) a is not defined
let a = 2;
console.log(a);    // (2) 2
```

```js
var a = 10;
let b = 20;
console.log(a, b);               // (1) 10 20
console.log(window.a, window.b); // (2) 10 undefined
console.log(this.a, this.b);     // (3) 10 undefined
```

```js
for(let j = 0; j < 5; j++){
  console.log(j);
}
console.log(j);  // (1) j is not defined
```

```js
const PI = 3.141593;
PI = 3.14;         // (1) Uncaught TypeError: Assignment to constant variable.
```