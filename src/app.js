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
  // console.log(option.target.elements.option.value);
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    console.log("options", app.options);
    renderFormApp();
  }
};

const removeOptions = () => {
  app.options = [];
  console.log("options", app.options);
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
      <p>
        {app.options.length > 0
          ? `You have ${app.options.length} options.`
          : "You don't have any options yet"}
      </p>
      <ol>
        <li>options...</li>
      </ol>
      <button onClick={removeOptions}>Remove all options</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderFormApp();
