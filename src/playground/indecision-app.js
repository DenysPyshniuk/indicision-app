console.log("App is running");

// JSX - JavaScript XML

const app = {
  title: "Indecision App",
  subtitle: "Add your options here:",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderFormApp();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const removeOptions = () => {
  app.options = [];
  renderFormApp();
}

const appRoot = document.getElementById("app");

const renderFormApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <ol>
        {
          app.options.map(
            (option) => <li key={option}>{option}</li>
          )
        }
      </ol>
      <button onClick={removeOptions}>Remove all options</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderFormApp();
