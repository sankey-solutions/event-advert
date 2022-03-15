import './App.css';
import Home from './home/Home';

let countDownDate = "March 16, 2022 17:45:00"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home 
          title = "We are Coming Soon"
          message = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta eaque fuga tempora, aspernatur vitae deleniti mollitia voluptatibus! Dolorem, ullam? Enim explicabo maxime veniam a ex assumenda soluta optio minus. Aut."
          endDate = {new Date(countDownDate)}
        />
      </header>
    </div>
  );
}

export default App;
