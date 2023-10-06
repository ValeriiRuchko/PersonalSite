import Header from "./components/Header";
import Footer from "./components/Footer";

import MainPage from "./pages/MainPage/MainPage";
import "./styles/App.scss";
import { Outlet, useLocation } from "react-router-dom";

type AppProps = {
  className: string;
};

function App(props: AppProps) {
  // tracking current pathname to know when to render children (different pages)
  let x = useLocation();

  return (
    <div className={`${props.className}`}>
      <Header />
      {x.pathname === "/" ? <MainPage className="main_content" /> : <Outlet />}
      <Footer />
    </div>
  );
}

export default App;
