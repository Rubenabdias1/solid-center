import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from './Components/AppContainer/AppContainer';
import { CategoryPage } from './pages/CategoryPage/category.page';
import './App.css';

const PUBLIC_KEY =
  'pk_test_51Gv8S9H5l65jQ7mTfbAPVAurCDF1effKzNiG0Lsw5wsqa8Ctphhuk6pKt3JRQ7c3Qc1HqK8kizsDAGp02o2srsu800MwA5OfrO';

const stripePromise = loadStripe(PUBLIC_KEY);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <div className="App">
          <AppContainer>
            <CategoryPage />
          </AppContainer>
        </div>
      </BrowserRouter>
    </Elements>
  );
}

export default App;
