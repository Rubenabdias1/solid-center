import { Button } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <p>Ruben</p>
          <Button variant="contained">Hello</Button>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
