import React,{Component} from 'react';
import CardList from './Components/card-list/card-list.jsx';
import SearchField from './Components/searchfield/searchfield.jsx';
import './App.css';

class App extends Component{
  testFunc=a=>a**2;
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:'',
      title:'Monsters Rolodex'
    }
  }
  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>this.setState({monsters:data}));
  }
  onInputChange=(evt)=>{
    this.setState({searchField:evt.target.value.toLowerCase()},()=>console.log(this.state.searchField));
  }
  onClick=(evt)=>{
    console.log(evt);
    evt.target.id?this.setState({title:evt.target.id}):this.setState({title:'Monsters Rolodex'});
  }
  render(){
    const {monsters,searchField,title}=this.state;
    const filterdMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField));
    return (
      <div className="App" onClick={this.onClick}>
        <h1>{title}</h1>
        <SearchField onInputChange={this.onInputChange}/>
        <CardList title={title} monsters={filterdMonsters}/>
      </div>
    );
  }
  
}

export default App;
