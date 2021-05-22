import "./App.css";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";

// this needs to set the state to either a user or false. Then conditionally render the correct component
// const []
function App() {
  return (
    <div className="App">
      <Login />
      <Footer />
    </div>
  );
}

export default App;
