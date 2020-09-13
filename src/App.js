import React from "react";
import { Cheese } from "./components/cheese/Cheese";
import { Login } from "./components/login/Login";
import { Navbar } from "./components/navbar/Navbar";
import "./App.css";

class App extends React.Component {
  /* Function to change state by passing args to function and change state based upon args, this was attached to a click property on below component which was able to be called from within the component with onClick={prop.click}

  switchNameHandler = (newname) => {
    this.setState({
      Cheese: [
        { name: newname, age: 5 },
        { name: "Gouda", age: 6 },
        { name: "PepperJack", age: 3 },
        { name: "Molertino", age: 12 },
      ],
    });
  };
      <Cheese
            name={this.state.Cheese[0].name}
            age={this.state.Cheese[0].age}
            click={this.switchNameHandler.bind(this, "Jamaal")}
          /> 
    
    Below gets values from input field and updates the state with the value

  nameChangeHandler = (event) => {
    this.setState({
      Cheese: [
        { name: "Brie", age: 5 },
        { name: event.target.value, age: 6 },
        { name: "PepperJack", age: 3 },
        { name: "Molertino", age: 12 },
      ],
    });
  };
         <Cheese
            name={this.state.Cheese[1].name}
            age={this.state.Cheese[1].age}
            changed={this.nameChangeHandler}
          />

          <Cheese
            name={this.state.Cheese[2].name}
            age={this.state.Cheese[2].age}
            click={this.switchNameHandler.bind(this, "reddit")}
          />  
*/

  state = {
    Cheese: [
      { name: "Brie", age: 3 },
      { name: "Cheddar", age: 7 },
      { name: "Swiss", age: 10 },
      { name: "Molertino", age: 5 },
    ],
    showCheese: false,
  };

  deleteCheese = () => {};

  toggleCheeseHandler = () => {
    const doesShow = this.state.showCheese;
    this.setState({
      showCheese: !doesShow,
    });
  };

  render() {
    const style = {
      backgroundColor: "blue",
      font: "inherit",
      border: "1px solid red",
      padding: "8px",
    };

    let cheeses = null;

    if (this.state.showCheese) {
      cheeses = (
        <div>
          {this.state.Cheese.map((cheese, index) => {
            return (
              <Cheese
                click={this.deleteCheese(index)}
                name={cheese.name}
                age={cheese.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <header className='App-header'>
          <h1> App Component</h1>
          <Navbar />
          <Login />
          <button style={style} onClick={this.toggleCheeseHandler}>
            Toggle Cheeses
          </button>

          {cheeses}
        </header>
      </div>
    );
  }
}

export default App;
