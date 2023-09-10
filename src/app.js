console.log('App is running');

// JSX - JavaScript XML

const app = {
  title: 'Indecision App',
  subtitle: 'This is some info'
}


const onFormSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted!')
}


const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
    </form>
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);