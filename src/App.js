import "./App.css";
import User from "./User";

function App() {
  return (
    <div className='App'>
      <h1>Redux App</h1>
      <User data={{ name: "Ankush Wankar", age: 42 }} />
    </div>
  );
}

export default App;
