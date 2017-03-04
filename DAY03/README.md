###### ReactJS

# DAY 03

## React 기초 1
- reflow & repaint
- Setting
- Component
- ReactDOM.render(VirtualDOM, targetElement)
- jsx 문법
- props
- state
- 부모/자식 component간의 통신

### reflow & repaint
#### reflow
- 좌표, 위치를 계산
- `reflow`가 최소화 되어야 성능이 좋다. good performance! 
- 예) Hamburger button : 전체적으로 좌표 위치가 계산 되어 reflow 많이 발생 (Animations)
- 예) 네이버 검색창 : 자동완성기능 영역만 reflow 발생이 되어 reflow가 최소화

#### repaint
- 시각적 요소(visibility, outline, background-color 등)가 표현되는 과정
- 예) 버튼에 마우스 오버시 컬러 변화 

> [Reflow와 Repaint] (https://github.com/nhnent/fe.javascript/wiki/Reflow%EC%99%80-Repaint)

### Virtual DOM
- React의 Virtual DOM을 통해 `reflow를 최소화`하여 비용을 발생 시키지 않는다. 효율적. 

```js
$('#a').text('bbb');
$('#b').text('bbb');
$('#c').text('bbb');
```
==> 계속 DOM 탐색을 하므로 reflow 발생하여 비용 발생

### react
- `update` 내용 수정이 빈번하게 일어나는 경우 react를 사용하는 것이 좋다
- `creat` 내용이 추가되는 경우 react는 느리다. <br>
  => 예) 무한스크롤링 : 어느 시점에서 추가 되는데. 처음부터 (필요한 없는 부분을 까지) 비교하여 랜더링하여 느리다. Animations

### Component
- 리액트는 Component로 이루어져있다
- class (React.Component를 상속하는 클래스)
- render 메소드를 실행한 결과값(virtual dom)을 반환하는 역할.
- render 메소드는 state, props가 바뀔 때마다 실행된다.


#### original type : `React.CreateClass`
```js
//----- Parent.js -----
import React from 'react';
import Child from './Child';
const Parent = React.createClass({
  render: function() {
    return (
      <Child />
    )
  }
});
export default Parent;
```

```js
//----- Child.js -----
import React from 'react';
const Child = React.createClass({
  getInitialState: function(){
    return {
      isToggle: false
    }
  },
  handleClick: function() {
    this.setState({
      isToggle: !this.state.isToggle
    });
  },
  render: function() {
    const { isToggle } = this.state;
    return (
      <h1
        style={{ color: isToggle ? '#f00' : '#00f' }}
        onClick={this.handleClick}
      >
        Hello!!
      </h1>
    );
  }
});
export default Child;
```

#### es6 type : `class extends React.Component`

```js
//----- Parent.js -----
import React from 'react';
import Child from './Child';
class Parent extends React.Component {
  render() {
    return (
      <Child />
    )
  }
}
export default Parent;
```

```js
//----- Child.js -----
import React from 'react';
class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggle: false
    }
  }
  handleClick() {
    this.setState({
      isToggle: !this.state.isToggle
    });
  }
  render () {
    const { isToggle } = this.state;
    return (
      <h1
        style={{ color: isToggle ? '#f00' : '#00f' }}
        onClick={this.handleClick.bind(this)}
      >
        Hello!!
      </h1>
    );
  }
}
export default Child;
```

###  `ReactDOM.render(VirtualDOM, targetElement)`

- VirtualDOM을 실제 html의 targetElement에 그려주는 역할.

```js
//----- main.js -----
import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './Parent'
ReactDOM.render(
    (<Parent />),
    document.getElementById('root')
);
```

### jsx 문법
- 기본 xml 
- nested Element : 최상단에는 반드시 하나의 엘리먼트만 존재해야 한다. 즉, 여러 형제요소들은 반드시 부모요소로 감싸야 한다.
- 모든 태그는 닫는 태그가 존재해야 한다.
- 모든 태그는 단일태그로도 표현이 가능하다. (ex. `<div></div>` === `<div />`)
- 리액트 컴포넌트를 태그처럼 사용할 수 있다. (ex. `<Parent> <Child /> </Parent>`)
- 리액트 컴포넌트는 html 태그와 구분하기 위해 관행적으로 첫글자를 대문자로 써준다.
- 주석은 {/* ... */} 식으로, container의 안쪽에서만 가능.
- 표현식 처리 : { }으로 감싸준다. ('문'형태는 불가!) => '문'형태 : for, if... 반환값이 없기 때문에 불가. 함수는 가능, 객체, 숫자, 문자 가능.
- html의 hyphens -> camelCase 로 표기해야 한다. => font-size를 fontSize로 표기해아 한다.
- class => className 표기해야 한다. ES6의 class가 있기 때문에.
- [JSX 깊이보기](https://facebook.github.io/react/docs/jsx-in-depth.html)


```js
// wrong!!
(
  <Header />
  <Contents />
  <Footer />
)

// correct!!
(
  <div>
    <Header />
    <Contents />
    <Footer />
  </div>
)
```
```js
const price = 2000;
const amount = 3;
const total = price * amount;

(
  {/* 이 위치에 주석이 오면 안됨. (주석도 하나의 Node이기 때문)*/}
  <div>
    {/* 여기부터는 주석 가능. */}

    <div>가격: {price}원</div> {/* 변수나 표현식은 { }로 묶어준다. */}
    <div>수량: {amount}개</div>
    <div>할인가: {total > 7000 ? total * 0.9 : total}</div>
    <label
      className="label" {/* class는 className으로 */}
      htmlFor="Input" {/* 'for'는 'htmlFor'로 */}
      style={{
        color: '#000',
        fontSize: '16px',
        marginTop: 20,
        lineHeight: 1.3
      }}
    > {/* 각 property들은 expand 형태로 작성.*/}
      <input
        id="Input"
        type="text"
        disabled={this.props.isFocused ? true : false}
        onClick={this.handleClickInput}
      />
      {/* 하위요소가 불필요한 경우 단일태그로 처리할 수 있음. */}
      {/* 이벤트 핸들러 등록은 위와같이. */}
    </label>
  </div>
)
```

>  javascript의 for와 같아서 htmlFor 표기
```js
// wrong!!
<label for="id">라벨</label>
// correct!!
<label htmlFor="id">라벨</label>
```
> 이벤트도 camelCase로 표기 해야 한다. => onClick, onMouseEnter, onMouseLeave 등...


### props : 읽기 전용 - read only
컴포넌트 자신이 직접 변동에 관여하지 않고, 상위 컴포넌트(html에 상에서)에서 전송받아 활용하는 목적으로만 쓰이는 데이터. 어떤 값을 부모 컴포넌트에서 자식 컴포넌트에 전달하기 위한 수단.
- parent 컴포넌트에 의해 값이 변경됨.
- 컴포넌트 내부에서 값 변경 불가. : 읽기 전용 0

```js
//----- Parent.js -----
class Parent extends React.Component {
  render() {
    return (
      <div>
        <Child name="gomugom" gender="male" />
        <Child name="iu" gender="female" />
      </div>
    )
  }
}
```

```js
//----- Child.js -----
class Child extends React.Component {
  render() {
    const { name, gender } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <strong>{gender}</strong>
      </div>
    )
  }
}
Child.defaultProps = {
  name: '이름없음',
  gender: '성별없음'
};
```

### state : 내가 만든 데이터. 
컴포넌트 내부에서 값을 변경, 활용하기 위한 데이터. 클릭에 따른 토글상태값 기억 등 국소범위만을 위한 데이터에 유용.
- parent 컴포넌트에 의해 값이 변경되지 않음.
- 컴포넌트 내부에서 값 변경 가능.

```js
//----- Parent.js -----
class Parent extends React.Component {
  constructor() {
    this.state = {
      isToggle: false
    };
  }
  handleClick() {
    this.setState({
      isToggle: !this.state.isToggle
    });
  }
  render () {
    const { isToggle } = this.state;
    return (
      <h1
        style={{ color: isToggle ? '#f00' : '#00f' }}
        onClick={this.handleClick.bind(this)}
      >
        Hello!!
      </h1>
    );
  }
}
```

### 부모/자식 component간의 통신

React의 data flow는 위에서 아래로 흐르는 일방통행이 원칙!

- Parent => Child :
  - Parent의 state 또는 props 등을 Child의 props로 지정.

- Child => Parent :
  - Parent에 Child의 상태변화를 위한 메소드 정의.
  - 위에 정의한 메소드를 Child의 props로 지정.
  - Child의 상태변화시 앞서 지정된 메소드를 호출.

```js
//----- Parent.js -----
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [{
        name: 'gomugom',
        phone: '010-1111-2222',
        show: false
      }, {
        name: 'iu',
        phone: '010-2222-3333',
        show: false
      }, {
        name: 'akmu',
        phone: '010-1133-3245',
        show: false
      }]
    };
  }
  handleClick(i) {
    console.log(this.state);
    const newPeople = this.state.people;
    newPeople[i].show = !newPeople[i].show;
    this.setState({
      people: newPeople
    });
  }
  render() {
    const people = this.state.people;
    return (
      <ul>
        <Child
          name={ people[0].name }
          phone={ people[0].phone }
          show={ people[0].show }
          handleClick={this.handleClick.bind(this, 0)}
        />
        <Child
          name={ people[1].name }
          phone={ people[1].phone }
          show={ people[1].show }
          handleClick={this.handleClick.bind(this, 1)}
        />
        <Child
          name={ people[2].name }
          phone={ people[2].phone }
          show={ people[2].show }
          handleClick={this.handleClick.bind(this, 2)}
        />
      </ul>
    );
  }
}
```

```js
//----- Child.js -----
class Child extends React.Component {
  render() {
    const { name, phone, show, handleClick } = this.props;
    return (
      <li onClick={handleClick}>
        <p>name: {name}</p>
        <p style={{
          display: show ? 'inline' : 'none'
        }}>
          {phone}
        </p>
      </li>
    );
  }
}
```