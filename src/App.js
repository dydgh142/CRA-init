import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Test from "./pages/Test/Test";
import Yoonho from "./pages/Yoonho/Yoonho";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/yoonho" element={<Yoonho />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
