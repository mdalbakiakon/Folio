import React, { useState } from "react";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Preloader from "./pages/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <main className="bg-(--bg-primary)">
            <Hero />
          </main>
        </>
      )}
    </>
  );
};

export default App;
