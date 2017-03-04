// //----- ex1. Child.js -----
// import React from 'react';
// class Child extends React.Component {
//   constructor() {
//     super();
//     //   this.state :  this는 child 인스턴스
//     this.state = {
//       isToggle: false
//     }
//   }
//   handleClick() {
//     this.setState({
//       isToggle: !this.state.isToggle
//     });
//   }
//   render () {
//     const { isToggle } = this.state;
//     // 위와 동일.
//     // const { isToggle: isToggle } = this.state;
//     // const isToggle  = this.state.isToggle;
//     // {{}} => 밖{}: 값, 안{}: 객체
//     return (
//       <h1
//         style={{ color: isToggle ? '#f00' : '#00f' }}
//         onClick={this.handleClick.bind(this)}
//       >
//         Hello!!
//       </h1>
//     );
//   }
// }
// export default Child;

// //----- ex2. Child.js -----
// import React from 'react';
// class Child extends React.Component {
//   render() {
//     const { name, gender } = this.props;
//     return (
//       <div>
//         <h2>{name}</h2>
//         <strong>{gender}</strong>
//       </div>
//     );
//   }
// }
// Child.defaultProps = {
//   name: '이름없음',
//   gender: '성별없음'
// };

// export default Child;


// //----- ex2-2. Child.js : stage-2단계의 static을 프로퍼티로 사용 가능. -----
// import React from 'react';
// class Child extends React.Component {
//   static defaultProps = {
//       name: '이름없음',
//       gender: '성별없음'
// }
//   render() {
//     const { name, gender } = this.props;
//     return (
//       <div>
//         <h2>{name}</h2>
//         <strong>{gender}</strong>
//       </div>
//     );
//   }
// }

// export default Child;

// //----- ex4. Child.js :  `부모/자식 component간의 통신` 예제 -----
// import React from 'react';
// class Child extends React.Component {
//   static defaultProps = {
//       name: '이름없음',
//       gender: '성별없음'
//   };
//   render() {
//     const { 
//         name, 
//         gender, 
//         setIndex,
//         isSelected
//     } = this.props;
//     return (
//       <div
//         style={{ 
//             color: isSelected ? '#f00' : '#00f' 
//         }}
//         onClick={setIndex}
//       >
//         <h2>{name}</h2>
//         <strong>{gender}</strong>
//       </div>
//     );
//   }
// }

// export default Child;


//----- ex5. Child.js :  `부모/자식 component간의 통신` 예제 -----
import React from 'react';

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

export default Child;