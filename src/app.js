class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      title: "Indecision",
      options: [],
    };
  }

  handleRemoveAll() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Please enter a valid value!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exist!'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    })
  }

  render() {
    return (
      <div>
        <Header
          title={this.state.title}
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Action = (props) => {
    return (
      <div>
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
}

const Options = (props) => {
    return (
      <div>
        <ol>
          {props.options.map((option) => (
            <Option key={option} optionText={option} />
          ))}
        </ol>
        <button onClick={props.handleRemoveAll}>Remove all options</button>
      </div>
    );
}

const Option = () => {
    return <li key={props.option}>{props.optionText}</li>;
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    e.target.elements.option.value = "";

    this.setState(() => {
      return { error }
    })
  }
  render() {
    return (
      <div>
        {this.state.error && <p style={{color: "red"}}>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
