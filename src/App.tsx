import './App.css';
import CardPerson from './components/Person';

function App() {
  return (
    <div className="App">
      <CardPerson name='Alex' age={32} hasPet={true} />
    </div>
  );
}

export default App;
