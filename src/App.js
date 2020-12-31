import React, {Component} from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component{
  constructor(){
   super();
   this.state= {
    monsters : [],
    searchField :''
   }
    console.log(this.state.monsters)
  }

PI = 3.14; 
  
 componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>response.json())
    .then(user => this.setState({monsters : user}));
 }

handleChange = (e) => {
  this.setState({searchField : e.target.value})
}
 render(){
 
  const {monsters, searchField} = this.state; 
   var filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
   
 return( <div className="App">
 <h1> Monster Rolex</h1>
 <SearchBox placeholder = "Search for Monster" handleChanges = {this.handleChange}></SearchBox>

 <Cardlist monsters = {filteredMonsters}> </Cardlist>
</div>);
 }

}

export default App;
