import './App.css';
import Subscribers from './components/subscribers';
import { Provider } from 'react-redux';
import store from './redux/store';
import Display from './components/Display';
import Views from './components/Views';

function App() {
  return (
    <Provider store={store}>
    {/* Provider 를 이용하여 props로 store를 넘겨받음 */}
    <div className="App">
      <Subscribers />
      <Views />
      <Display />
    </div>
    </Provider>
  );
}

export default App;
