import React, { Component } from 'react';
import JsonDataDisplay from './practice/table'
import JsonDataDisplay1 from './practice/tablea'
import JsonDataDisplay2 from './practice/tableb'
import JsonDataDisplay3 from './practice/tablec'
import JsonDataDisplay4 from './practice/tabled'
import JsonDataDisplay5 from './practice/tablee'

import './App.css';

const head = {
  color: 'rgb(225, 17, 17)',
  textAlign: 'center',
  fontSize: '60px',
  fontWeight: 'bolder',
  marginTop: '60px',
  fontFamily: 'Roboto'
}
  
class App extends Component {
  render() {
    return (
      <div  className="name">
        <h1 style={head} >Football League Management System</h1>
        <div className='button'><button className = 'btn' onClick={teams}>Teams</button>
          <button className = 'btn' onClick={players}>Players</button>
          <button className = 'btn' onClick={win}>Win/Lose</button>
          <button className = 'btn' onClick={manager}>Managers</button>
          <button className = 'btn' onClick={match}>Match</button>
          <button className = 'btn' onClick={referee}>Referee</button>
        </div>

        <div className="App">
          <h4>Teams</h4>
          <JsonDataDisplay/>
       </div>

       <div className="App1">
          <h4>Match Referees</h4>
          <JsonDataDisplay1/>
       </div>

       <div className="App2">
          <h4>Referees</h4>
          <JsonDataDisplay2/>
       </div>

       <div className="App3">
          <h4>Managers</h4>
          <JsonDataDisplay3/>
       </div>

       <div className="App4">
          <h4>Players</h4>
          <JsonDataDisplay4/>
       </div>

       <div className="App5">
          <h4>Match</h4>
          <JsonDataDisplay5/>
       </div>
      </div>
      
    );
  }
}

function teams() {
  alert('Teams!');
}
function players() {
  alert('Players!');
}
function win() {
  alert('Win/Lose!');
}
function manager() {
  alert('Managers!');
}
function match() {
  alert('Match!');
}
function referee() {
  alert('Referees!');
}
export default App;

























































































// class DisplayTable extends React.Component{
//   constructor(props){
//     this.state = {
//       list:[]
//     }
//     this.callAPI = this.callAPI.bind(this)
//     this.callAPI();
//   }

//   callAPI() {
//     fetch("http://localhost:5000/teams").then(
//       (response) => response.json()
//     ).then((data) =>{
//       console.log(data)
//     })
//   }

//   render(){
//     return(
//       <div>

//       </div>
//     )
//   }
// }

// export default DisplayTable;
