import Create from "./Create";
import Home04 from "./Home04";
import Eboard from "./Eboard";
import HackFest24Info from "./HackFest";



const routes = [
  { path: '/', component: <Home04 />},
  { path: '/eboard', component: <Eboard />},
  { path: '/create', component: <Create />},
  { path: '/HackFest24Info', component: <HackFest24Info />},
]

export default routes;