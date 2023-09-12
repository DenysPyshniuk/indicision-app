class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    let options = ["First option", "Second option", "Third option"];

    return (
      <div>
        <Header title={title} />
        <Action />
        <AddOption />
        <Options options={options} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick")
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
    // alert('handleRemoveAll');
  }
  render() {
    return (
      <div>
        <ol>
          {this.props.options.map((option) => (
            <Option key={option} optionText={option} />
            ))}
        </ol>
        <button onClick={this.handleRemoveAll}>Remove all options</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li key={this.props.option}>{this.props.optionText}</li>;
  }
}

class AddOption extends React.Component {

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim( );
    if (option) {
      alert(option)
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
