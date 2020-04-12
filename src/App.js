import React from 'react';


function App() {
  return (

    <div className="App">
      <h1>Rock paper scissors with react</h1>
      <ListFruits/>
      <div>This portion will change based on routing</div>
      
    </div>    
          
  );
}

class AppChild extends React.Component{
  render(){
    return (
      <div>This is app child baby</div>
    )
  }

}

class ListFruits extends React.Component
{

    constructor(props){
      super (props);

      this.state = { data: [
        {
          name: "asad",
          age: 32
        },
        {
          name: "anam",
          age: 26
        },
        {
          name: "umar",
          age: 5
        }
        ] };

       // this.setStateHandler = this.setStateHandler.bind(this);
        
    }

    deleteRow(name){
      console.log("deleteRow called");
      var res = this.state.data.filter(m => m.name != name);
      this.setState({ data: res });        
    }
   
    stateUpdated = 0;

    updateState(){
      console.log(this.stateUpdated);
      this.stateUpdated++;
      
        this.setState({ data: [
          {
            name: "asad-" + this.stateUpdated,
            age: 32
          },
          {
            name: "anam" + this.stateUpdated,
            age: 26
          },
          {
            name: "umar" + this.stateUpdated,
            age: 5
          }
          ] });
         // this.forceUpdate();
    }
      render() {
      return <div>
          <ul>
            <li><button onClick={() => this.updateState()}>UpdateState</button></li>            
           { this.state.data.map(function(person, i) { return <TableRow key={i} data={person} deleteRow={() => this.deleteRow(person.name)} /> }, this) }
            
          </ul>
          </div>;
          }
    
}


class TableRow extends React.Component{

  processName(name){
     this.setState(this.props.data.filter(m => m.name != name));
  }

  render(){
    return <li>
      {this.props.data.name} is of age = {this.props.data.age} if you want to alert name click this 
      <button onClick={() => this.props.deleteRow(this.props.data.name)}>Delete me</button>
      </li>;
  }
}

export default App;
