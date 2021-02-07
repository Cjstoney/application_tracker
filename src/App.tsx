import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/footer";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import Login from "./components/login/login";

Amplify.configure(awsconfig);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Login />
      <Footer />
    </div>
  );
}

export default App;
