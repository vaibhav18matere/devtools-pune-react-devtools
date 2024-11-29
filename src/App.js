import "./App.css";
import { useState, useEffect, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const [counter, setCounter] = useState(8);
  //  console.log("Peerlist")
  //  console.log("Devtools")
  // debugger

  useEffect(() => { }, []);

  const increaseCountBy1 = () => {
    setCounter(count => count + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>COUNTER IS: {counter}</div>
        <button onClick={increaseCountBy1}>Add</button>
        <p>App component</p>
      </header>
      <ErrorBoundary fallback={<h2>Error aala re! Error</h2>}>
        <Suspense fallback="Loading...Wait kara">
          <User name="Johnrao Doekar" />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

function User({ name }) {
  return <h1>{name}</h1>
}

export default App;
