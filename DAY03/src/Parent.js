// //----- ex1. Parent.js -----
// import React from 'react';
// import Child from './Child'; 
// class Parent extends React.Component {
//   render() {
//     return (
//       <Child />
//     )
//   }
// }
// export default Parent;

// // <Child /> ==> new Child(), this

// //----- ex2. Parent.js -----
// import React from 'react';
// import Child from './Child'; 

// class Parent extends React.Component {
//   render() {
//     return (
//       <div>
//         <Child name="gomugom" gender="male" />
//         <Child name="iu" gender="female" />
//         <Child />
//       </div>
//     );
//   }
// }
//  export default Parent;

//  // <Child /> => Child.defaultProps 내용이 나온다.

// //----- ex3. Parent.js -----
// import React from 'react';
// import Child from './Child'; 

// class Parent extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			isToggle: false
// 		};
// 	}

// 	handleClick() {
// 		// this.state.isToggle = !this.state.isToggle
// 		// 실제 화면에는 보여주지 않는다. 이렇게 쓰지 말고 아래 표현으로 써야 한다. setState()써줘야 한다. = state를 바꾸려면 setState()써줘야 한다.
// 		this.setState({
// 			isToggle: !this.state.isToggle
// 		});
// 	}

//   render () {
//     const { isToggle } = this.state;
//     return (
//       <div
//         style={{ color: isToggle ? '#f00' : '#00f' }}
//         onClick={this.handleClick.bind(this)}
//       >
//         <Child name="gomugom" gender="male" />
// 		<Child name="iu" gender="female" />
// 		<Child />
//       </div>
//     );
//   }
// }

// export default Parent;


// //----- ex4. Parent.js : `부모/자식 component간의 통신` 예제 -----
// import React from 'react';
// import Child from './Child'; 

// class Parent extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			index: 0
// 		};
// 	}

// 	handleClick(i) {
// 		this.setState({
// 			index: i
// 		});
// 	}

//   render () {
//     const { index } = this.state;
//     return (
// 		<div>
// 			<Child
// 			isSelected={index === 0}
// 			setIndex = {() => this.handleClick(0)}
// 			name="gomugom" gender="male" />

// 			<Child 
// 			isSelected={index === 1}
// 			setIndex = {() => this.handleClick(1)}
// 			name="iu" gender="female" />

// 			<Child 
// 			isSelected={index === 2}
// 			setIndex = {() => this.handleClick(2)}
// 			name="iu2" gender="female" />
// 		</div>
//     );
//   }
// }

// export default Parent;

//----- ex5. Parent.js : `부모/자식 component간의 통신` 예제 -----
import React from 'react';
import Child from './Child'; 

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

export default Parent;