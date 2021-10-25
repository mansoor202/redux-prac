import logo from './logo.svg';
import store from './Store';
import './App.css';
import { Provider } from 'react-redux';
import  ReduxCalculator  from './components/Calculator';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <ReduxCalculator/>
    </div>
    </Provider>
  );
}

export default App;
