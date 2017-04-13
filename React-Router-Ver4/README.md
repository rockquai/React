###### React-Router Ver.4

#### [출처: velopert](https://velopert.com/3275)

# 강의 내용
- 01. 리액터 라우터 v4 사용법
    - 소개 및 프로젝트 셋업
    - 리액트 라우터 기본 설정
    - 링크 컴포넌트 사용법
    - URL 파라미터 설정
    - 서브 라우트 설정
    - NavLink 를 사용한 액티브 라우트 스타일 설정
    - Redirect 컴포넌트로 리디렉팅하기
    - history.push 를 사용하여 메소드에서 리디렉팅하기
    - 쿼리 파라미터 불러오기
    - Switch 를 사용한 404 페이지


## 01-리액터 라우터 v4 사용법
### `리액터 라우터`는 왜 쓰는 것이냐?
- 리액터를 사용해서 여러 페이지들 존재하는 서비스를 만들때 필요하다.
- 라우터의 역활은 `URL 주소`나 `특정 상태`에 따라서 뷰를 나누기 위해 사용.
- `리액터 라우터`는 하나의 라이브러리다. 유일한 대안은 아니며 다른 라우터 라이브러리도 있으며 직접 구현도 가능하다.
- `리액터 라우터`가 페이스북에서 만든 것을 아니지만 많은 사람들이 사용하고 있다.<br>
    - [npm react-router](https://www.npmjs.com/package/react-router) : 통계를 보면 많은 사람들이 다운로드 하고 있다고 볼 수 있다.

### yarn
- [yarn](https://yarnpkg.com/lang/en/) : 자바스크립트의 새로운 패키지 매니저

### create-react-app <br>
: 리액트 프로젝트를 손쉽게 준비해 주는 도구.<br>

#### 1. create-react-app 설치 (npm, yarn 각각 사용하는 도구를 이용해서 설치)

```
$ npm install -g create-react-app
```

```
$ yarn global add create-react-app
```

#### 2. `create-react-app` 프로젝트 이름 생성

```
$ create-react-app 프로젝트이름
```

#### 3. 서버 실행

```
$ yarn start
```

#### 4. `react-router-dom` 설치(npm, yarn 각각 사용하는 도구를 이용해서 설치)

```
$ npm i -S react-router-dom
```

```
$ yarn add react-router-dom
```

---

### `url parameter`, `exact`, `activeClassName="active"`

```js
// App.js
const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/about/:username" component={About}/>
                <Route path="/posts" component={Posts}/>
            </div>
        </Router>
    );
};
```

```js
// header.js
const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active">홈</NavLink>
            <NavLink to="/about/aboutname" className="item" activeClassName="active">소개</NavLink>
            <NavLink to="/posts" className="item" activeClassName="active">포스트</NavLink>
        </div>
    );
};
```

```js
const About = ({match}) => {
    return (
        <div>
            {match.params.username} 의 소개
        </div>
    );
};

export default About;
```

---

### Redirect 컴포넌트로 리디렉팅하기

```js
// Mypage.js
import { Redirect } from 'react-router-dom';

const logged = false; // 로그인 안된 상태. `true`이면 마이페이지 로그인이 된 상태

const Mypage = () => {
    return (
        <div>
            {
                !logged && <Redirect to="./login"/>
            }
            마이페이지: 로그인 된 상태
        </div>
    );
};
```

---

### history.push 를 사용하여 메소드에서 리디렉팅하기
- `Home` 컴포넌트가 받는 Props 3가지 (`history`, `location`, `match`)
- `{history}` Props를 사용해서 여러 브라우저 history 메소드를 사용할 수 있다.  
- `push` 메소드를 사용하면. 임의로 `Redirect`를 할 수 있다.

#### ex.) `history` Props 중 `push` 메소드를 이용하여 `포스트 페이지로 이동` 버튼 생성

```js
// Home.js
const Home = ({history}) => {
    return (
        <div>
            Home
            <button onClick={ () => {history.push('/posts')}}>
                포스트 페이지로 이동
            </button>
        </div>
    );
};
```

---

### 쿼리 파라미터 불러오기
- Search.js의 파라미터 값으로 `{location}` 넣고 Props를 보면 URL뒤에 특정한 검색어를 입력하면 `search` 메소드에 값이 들어가 있다. `{location.search}`
- 파싱을 하려면 내장함수인 `new URLSearchParams()` 사용

```js
const Search = ({location}) => {
    return (
        <div>
            {new URLSearchParams(location.search).get('keyword')} 검색
        </div>
    );
};
```

---

### Switch 를 사용한 404 페이지
#### <Switch>
- 기본적으로 라우터는 `path`를 하나 하나 비교한다. 여러개 매칭되면 여러게 보여준다.
- `<Switch>`가 있으면 처음 매칭되는 것만 보여준다.
- 매칭되는 것이 없으면 `{NoMatch}`를 보여준다.

```js
//App.js : Switch 추가
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about/:username" component={About}/>
                        <Route path="/posts" component={Posts}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/mypage" component={Mypage}/>
                        <Route path="/search" component={Search}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
```
