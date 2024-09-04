// // src/index.tsx
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { store } from './store/store';
import App from './App.js';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Provider store={store}>
      <App />
      <ToastContainer/>
  </Provider>,
);