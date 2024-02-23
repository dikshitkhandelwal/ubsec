import Contact from "./Contact";
import Create from "./Create";
import Home04 from "./Home04";
import Team from "./Wallet";
import HackFest24Info from "./HackFest";



const routes = [
  { path: '/', component: <Home04 />},
  { path: '/wallet', component: <Team />},
  { path: '/create', component: <Create />},
  { path: '/contact', component: <Contact />},
  { path: '/HackFest24Info', component: <HackFest24Info />},
]

export default routes;