import { useState } from "react";
import "./App.css";
import { Suspense } from "react";
import Home from "./Components/Home";
import React from "react";

const About = React.lazy(() => import("./Components/About"));

function App() {
  let [page, setPage] = useState("home");

  return (
    <>
      <h1>Page Toggle</h1>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
      </nav>
      {page === "home" && <Home />}
      {page === "about" && (
        <Suspense fallback={<div>loading .....</div>}>
          <About />
        </Suspense>
      )}
    </>
  );
}

export default App;
