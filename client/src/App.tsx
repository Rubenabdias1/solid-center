import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppContainer } from './Components/AppContainer/AppContainer';
import { CartPage } from './pages/Cart/cart.page';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContainer>
          <CartPage />
        </AppContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
