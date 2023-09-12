class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.onShowDetails = this.onShowDetails.bind(this);
    this.state = {
      visibility: false,
    };
  }

  onShowDetails() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>

        <button onClick={this.onShowDetails}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && <p>Here is some details</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))