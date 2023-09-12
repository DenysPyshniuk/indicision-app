class Counter extends React.Component {
  constructor(props) {
    super(props);
    //this.handler = this.handler.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);
    this.state = {
      count: 0,
    };
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  handleResetButton() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleResetButton}>RESET</button>
        <button onClick={this.handleAddOne}>+1</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;

// const addOne = () => {
//   count ++;
//   renderCounterApp();
// }

// const minusOne = () => {
//   count --;
//   renderCounterApp();
// }

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const template = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>RESET</button>
//       <button onClick={addOne}>+1</button>
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// }

// renderCounterApp();
