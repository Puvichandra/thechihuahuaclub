
import { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
import './index.css';
import Slider from './components/Slider'
import ReactGa from "react-ga";

// import { lazy, Suspense } from "react";
// import Loading from "./components/Loading";

// Below Imports using React.lazy and Suspence

// const Navigation = lazy(() => import("./components/Navigation"));
// const Home = lazy(() => import("./components/sections/Home"));
// const About = lazy(() => import("./components/sections/About"));
// const Roadmap = lazy(() => import("./components/sections/Roadmap"));
// const Team = lazy(() => import("./components/sections/Team"));
// const Showcase = lazy(() => import("./components/sections/Showcase"));
// const Faq = lazy(() => import("./components/sections/Faq"));
// const Footer = lazy(() => import("./components/Footer"));
// const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Roadmap from "./components/sections/Roadmap";
import Team from "./components/sections/Team";
import Footer from "./components/Footer";
import Showcase from "./components/sections/Showcase";
import Faq from "./components/sections/Faq";
import ScrollToTop from "./components/ScrollToTop";
import Mintingsection from "./components/Mintingsection";
import Partners from "./components/Partners";


const TRACKING_ID = "UA-239760889-1";
ReactGa.initialize(TRACKING_ID);

useEffect (() => {
  ReactGa.pageview(window.location.pathname);
},[]);

function App() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        {/* <Suspense fallback={<Loading />}> */}
          <Navigation />
          <Home />
          {/* <Partners /> */}
          <About />
          <Roadmap />
          <Showcase />
          <Team />
          <Faq />
          <Footer />
          {/* <ScrollToTop scrollPosition={y}/> */}
          <ScrollToTop />{" "}
        {/* </Suspense> */}
      </ThemeProvider>
    </main>
  );
}

export default App;
