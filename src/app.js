console.log('App is running');

// JSX - JavaScript XML

var template = (

        <div>
          <h1>Indecision App</h1>
          <p>This is some info</p>
          <ol>
            <li>Item one</li>
            <li>Item two</li>
          </ol>
        </div>
          );

var userName = 'Denys Pyshniuk';
var userAge = 30;
var userLocation = 'North Vancouver';
var templateTwo = (
  <div>
    <h1>{userName}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
)


        var appRoot = document.getElementById('app');

        ReactDOM.render(templateTwo, appRoot);