import { useState } from "react";
import { Content, Footer, Header, TextSection } from "./components";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen  maintext background w-screen">
      <Header />
      <section className="flex h-[85vh]">
        <Content />
        <TextSection />
      </section>
        <Footer />
    </div>
  );
}

export default App;
