import React, { createContext, useEffect, useState } from "react";
import Child from "./components/Child";

import { Route, Routes, Link } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { CounterPages } from "./pages/CounterPages";
import { CounterToolkit } from "./components/CounterToolkit";
import { FormToolkit } from "./components/FormToolkit";

export const AppContext = createContext();

function App() {
  useEffect(() => {
    return () => {};
  }, []);

  const [first, setfirst] = useState(null);

  let handle = (info) => {
    setfirst(info);
  };

  console.log(first);

  return (
    <div>
      {/* <AppContext.Provider value={{ first, setfirst }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/n" element={<NavBar />} />
          <Route path="/counter" element={<CounterPages />} />
        </Routes>
        <Child sendData={handle} />
        <Link to="/">
          <button>Hero</button>
        </Link>
        <Link to="/n">
          <button>Navbar</button>
        </Link>
      </AppContext.Provider> */}
      <CounterToolkit />
      <FormToolkit />
    </div>
  );
}

export default App;
