import "./App.css";
import Footer from "./components/footer/footer";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import Login from "./components/login/login";
import Table from "./components/table/table";

Amplify.configure(awsconfig);
function App() {
  return (
    <div className="App">
      <Table />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
