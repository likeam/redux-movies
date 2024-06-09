import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MoviDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/movie/:imdbID" Component={MoviDetail} />
          <Route Component={PageNotFound} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
