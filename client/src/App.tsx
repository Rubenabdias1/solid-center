import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from './Components/AppContainer/AppContainer';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { CategoryPage } from './pages/CategoryPage/category.page';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
});

const PUBLIC_KEY =
  'pk_test_51Gv8S9H5l65jQ7mTfbAPVAurCDF1effKzNiG0Lsw5wsqa8Ctphhuk6pKt3JRQ7c3Qc1HqK8kizsDAGp02o2srsu800MwA5OfrO';

const stripePromise = loadStripe(PUBLIC_KEY);

function App() {
  return (
    <ApolloProvider client={client}>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <div className="App">
            <AppContainer>
              <CategoryPage />
            </AppContainer>
          </div>
        </BrowserRouter>
      </Elements>
    </ApolloProvider>
  );
}

export default App;
