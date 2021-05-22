import "./App.css";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Table from "./components/table/table";

// this needs to set the state to either a user or false. Then conditionally render the correct component
// const []
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
