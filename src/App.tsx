import "./App.css";
import { IdentityContextProvider } from "react-netlify-identity";

function App() {
  const url = "https://youthful-goodall-7241a1.netlify.app";
  return (
    <IdentityContextProvider url={url}>
      <div className="App">hello word</div>
    </IdentityContextProvider>
  );
}

export default App;
