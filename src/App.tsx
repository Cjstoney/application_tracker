import "./App.css";
import { IdentityContextProvider } from "react-netlify-identity";
import Login from "./components/login/login";

function App() {
  const url = "https://appllication-tracker.netlify.app";
  return (
    <IdentityContextProvider url={url}>
      {/* <div className="App">hello word</div> */}
      <Login />
    </IdentityContextProvider>
  );
}

export default App;
