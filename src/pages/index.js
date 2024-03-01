import Contact from "./Contact";
// import Home01 from "./Home01";
// import Home02 from "./Home02";
// import Home03 from "./Home03";
// import Home04 from "./Home04";
// import Home05 from "./Home05";
import Home06 from "./Home06";
import Eboard from "./Eboard";
import About from "./About";
import Spring24 from "./Events/Spring24";

const routes = [
  { path: '/', component: <Home06 />},
  // { path: '/home-v2', component: <Home02 />},
  // { path: '/home-v3', component: <Home03 />},
  // { path: '/home-v4', component: <Home04 />},
  // { path: '/home-v5', component: <Home05 />},
  // { path: '/home-v6', component: <Home01 />},
  { path: '/contact', component: <Contact />},
  {path: '/eboard', component: <Eboard />},
  {path: '/events/spring-2024', component: <Spring24 />},
  {path: '/about-us', component: <About />}
]

export default routes;