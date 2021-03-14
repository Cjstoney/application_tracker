import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/footer";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import Login from "./components/login/login";
import { AppEnums } from "./models/enums";
import { useEffect } from "react";

Amplify.configure(awsconfig);
function App() {
  let isLoggedIn: boolean = !!localStorage.getItem(AppEnums.AppTrackerUser);
  useEffect(() => {
    isLoggedIn = !!localStorage.getItem(AppEnums.AppTrackerUser);
  });
  return (
    <div className="App">
      {!!isLoggedIn ? console.log("please login") : <Login />}
      <Footer />
    </div>
  );
}

export default App;
