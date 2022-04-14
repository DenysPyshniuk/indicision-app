console.log('App is running');

// JSX - JavaScript XML

var app = {
  title: 'Indecision App',
  subtitle: 'This is some info'
}

var user = {
  name: 'Denys Pyshniuk',
  age: 30,
  location: 'North Vancouver',
};

var template = (
        <div>
          <h1>{app.title}</h1>
          <p>{app.subtitle}</p>
          <ol>
            <li>Item one</li>
            <li>Item two</li>
          </ol>
        </div>
          );

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)


        var appRoot = document.getElementById('app');

        ReactDOM.render(template, appRoot);