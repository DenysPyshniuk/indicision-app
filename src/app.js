class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <AddOption />
        <Options />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return(
      <div>
        <h1>Indecision App</h1>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return(
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return(
      <div>
        <ol>
          <Option />
          <Option />
        </ol>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return(
      <li>First option</li>
    )
  }
}

class AddOption extends React.Component{
  render() {
    return(
      <div>
        <form>
          <input type="text" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))