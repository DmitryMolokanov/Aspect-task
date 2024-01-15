import "./App.css";
import Form from "./components/Form";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <div className="form-field">
        <div className="form-content-conteiner">
          <Form />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
