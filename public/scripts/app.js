console.log('App is running');

// JSX - JavaScript XML

// var template = <p>This is JSX from app.js</p>;
var template = React.createElement(
  "h1",
  {id: "someid"},
  "Testing ES5"
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);