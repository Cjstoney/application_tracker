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
      <Login />
      <Footer />
    </div>
  );
}

export default App;
