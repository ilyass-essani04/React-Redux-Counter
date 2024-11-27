import React from "react";
import { Provider } from "react-redux";
import store from "./app/store"; 
import Counter from "./features/compteur/Counter"; // Import the Counter component

const App = () => {
  return (
    <Provider store={store}>
      <div className="App" style={{ padding: '20px' }}>
        <h1>Counter</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
