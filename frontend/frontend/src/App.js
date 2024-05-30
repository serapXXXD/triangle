import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import Authorization from './components/Authorization';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h4>Авторизация</h4>
          <Authorization/>
          <h4>Регистрация</h4>
          <Registration/>
        </div> 
      </header>
    </div>
  );
}

export default App;
