// // // import React from 'react';
// // // import ReactDOM from 'react-dom';
// // import './index.css';
// // // import App from './App';
// // import reportWebVitals from './reportWebVitals';
// // import Bike from "./MyIBM";
// // import Footer from "./footer";
// // import MyIBM from './MyIBM';

// // import React from 'react'
// // import ReactDOM from 'react-dom'
// // import App from './App'

// // class Home extends React.Component {
  
// //   render(){
// //   return (
   
// //     <div className="App">
    
    
// //         <h3>Aishwarya Srivastava</h3>
// //         {/* <p> This is a paragraph </p> */}
// //       <ol>
// //         <li> Place 1 <button onClick={myFunction} >Like</button> </li>
        
// //         <li> Place 2 <button onClick={myFunction2}>Like</button></li>
// //         <li> Place 3 <button onClick={myFunction3}>Like</button></li>
// //       </ol>
// // {/* This is a book  <img src="https://48b6yd3iigex2rv7g41h5sts-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/wlac-cover-web.jpg"width="60"  */}
// //      {/* height="80" ></img> */}
// //      {/* <h4> {this.props.home}</h4> */}
     
// //     </div>
// //   );
// // }
// // }
  
    
// // const myelement =<Home home='Shri RamMurti Smarak College of engg and technology'/>;
// // // class Bike extends React.Component{
// // //   constructor(){
// // //     super();
// // //     this.state = {speed:"100KMPH"};
// // //   }
// // //   render(){
    
// // //     return <h1> hey! {this.state.speed} </h1>
// // //   }
// // // }
// // // ReactDOM.render(
// // //   <React.StrictMode>
// // //     <App />
// // //   </React.StrictMode>,
// // //   document.getElementById('root')
// // // );


// // function myFunction() {
// //   alert('Hello! Place 1 is selected');
// // }
 
// // function myFunction2() {
// //   alert('Hello! Place 2 is selected');
// // }

// // function myFunction3() {
// //   alert('Hello! Place 3 is selected');
// // } 
 






// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // // reportWebVitals();
// // // function MyIBM(){
// // //   return(
// // //     <ul>
// // //       <li>1</li>
// // //       <ul>2</ul>
// // //     </ul>
// // //   )
// // // }
// // ReactDOM.render(myelement,document.getElementById('root'));
// // ReactDOM.render(<App />, document.querySelector('root1'));
// // ReactDOM.render(<Footer />,document.getElementById('root2'));




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'

// class MyApp extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={favbook:"XYZ"};
//   }

// componentDidMount(){
//   setTimeout(()=>{
//     this.setState({favbook:"ABC"})

//   },1000)
// }
// getSnapshotBeforeUpdate(prevProps,prevState){
//   document.getElementById("div1").innerHTML="Initial book"+
//   prevState.favbook;

// }
// componentDidUpdate(){
//   document.getElementById("div2").innerHTML="Updated book"+ this.state.favbook;

// }

// render(){
//   return(
//     <div>
//       <h1>My Favourite Book is {this.state.favbook}</h1>
//       <button type="button" onClick={this.changeBook}>change book</button>
//     <div id="div1"></div>
//     <div id="div2"></div>
//     </div>
//   )
// }
// }



  
// ReactDOM.render(<MyApp />, document.querySelector('#root'))

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
//  import {render} from 'react-dom/cjs/react-dom.development';
//  import App from './App';

// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {show: true};
//   }
// delHeader = () => {
// this.setState ({show: false});
// }  
// render() {
//     let myheader;
//     if (this.state.show){
//         myheader = <Child />;   // Unmount the header
//     };
//     return (
//       <div>
//           {myheader}
//        <h1>My Favorite book is {this.state.favbook}</h1> 
//       <button type="button" onClick={this.delHeader}>Delete Header</button>
//       </div>
//     );
//   }
// }
// class Child extends React.Component{
// componentDidUnmount(){
//     alert("It will be unmounted");
// }
// render(){
//     return(
//         <h1>Fav Book! </h1>
//     );
// }
// }
// ReactDOM.render(<MyApp />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
 
//componentWillUnmount()
//Here, the component is removed from the DOM
 
//Example
// 1. Header/Footer/Text is displayed
// 2. We have a button to clear the data
// 3. As soon as the button is clicked, ALERT IS GENERATED
// 4. Once OK is selected, data will be unmounted/cleared!





// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: '' };
//     this.myChangeHandler = this.myChangeHandler.bind(this)
//   }
//   // mySubmitHandler = (event) => {
//   //   event.preventDefault();
//   //   alert("You are submitting " + this.state.username);
//   // }
//   myChangeHandler = (event) => {
//     this.setState({username: event.target.value});
   
//   }
  
//   render() {
//     return (
      
//        <form onClick={this.myChangeHandler}>
//       <h1>Hello {this.state.username}</h1>
//       <p>Enter your name</p>
//       <input
//         type='text'
//         onChange={this.myChangeHandler}
//       />
//   <button onClick={this.myChangeHandler}>change the header!</button>
//       </form>
//     );
//   }
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'));





// import React, { Component } from "react";
// import { render } from "react-dom";
// import Demo1 from "./Demo1";


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React",
//       showHideDemo1: false
//     };
//     this.hideComponent = this.hideComponent.bind(this);
//   }

//   hideComponent(name) {
//     console.log(name);
 
//         this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        
//     }
//   render() {
//     const { showHideDemo1} = this.state;
//     return (
//       <div>
//         {showHideDemo1 && <Demo1 />}
//         <hr />
      
//         <div>
//           <button onClick={() => this.hideComponent("showHideDemo1")}>
//             Click to hide or show Content
//           </button>
         
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));







import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
   
    super(props);
    this.state = {
      username: '',
  
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
   
    this.setState({[nam]: val});
  }
  mySubmitHandler = (event) => {

    alert("You are submitting " + this.state.username);
  
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1> Handle Form in React</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        required 
        name='username'
        onChange={this.myChangeHandler}
      />
      <br>
      </br>
      <br>
      </br>
     <label>
         <input type="checkbox" required/>
         Accept Terms and conditions
       </label>
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
