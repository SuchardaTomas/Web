import ReactDOM from 'react-dom/client'
import App from './Routes/AppRoutes'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './pages/Cart/configureStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
