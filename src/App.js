import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Test from "./pages/Test/Test";
import Intro from "./pages/Intro/Intro";
import Fullpage from "./pages/Fullpage/Fullpage";
import Port from "./pages/Port/Port";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/port" element={<Port />} />
        <Route path="/fullpage" element={<Fullpage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
