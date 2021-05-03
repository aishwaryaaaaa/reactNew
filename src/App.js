import React, { Component } from 'react'
  
// class App extends Component {
//   constructor(props){
//     super(props)
      
  
//     this.state = {color : ' red!'}
      
    
//     this.handleClick = this.handleClick.bind(this)
//   }
  
//   handleClick(){
    
   
//     this.setState({color : ' yellow!'})
//   }
    
//   render(){
//     return (
//       <div>
//         <h2> The name of fruit is Apple</h2>
          
// <p>The color is {this.state.color}</p>
  
//         <button onClick={this.handleClick}>
//           Color change
//         </button>
//       </div>
//     )
//   }
// }
  
// export default App



// import './App.css';
// import Developer from './Developer';

// function App()
// {
//     return(
//         <div className="App">
//             <h1>Props in React</h1>
//             <Developer />
//         </div>
//     );
// }
// export default App




class App extends Component{

  state = {
     isActive:false
  }

  handleShow = ()=>{
      this.setState({
          isActive: true
      })
  }

  handleHide = () =>{
      this.setState({
          isActive: false
      })
  }

   render(){
       return(
           <div>
             <h1>This is Content</h1>
           {this.state.isActive ? <h2>Hello </h2> : null }
             <button onClick={this.handleShow}>Show Message  </button>
            
             <button onClick={this.handleHide}>Hide Message</button>
           </div>
       )
   }
}

export default App;