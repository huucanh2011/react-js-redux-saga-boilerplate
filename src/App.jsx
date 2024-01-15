import { Provider as ReduxStoreProvider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';

import { store, history } from './redux';
import HomePage from '@/pages/Home';

function App() {
  return (
    <ReduxStoreProvider store={store}>
      <HistoryRouter history={history}>
        <HomePage />
      </HistoryRouter>
    </ReduxStoreProvider>
  );
}

export default App;
