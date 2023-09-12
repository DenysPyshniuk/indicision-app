class Counter extends React.Component {
  constructor(props) {
    super(props);
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
        count: 0,
      };
    });
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
