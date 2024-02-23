import Contact from "./Contact";
import Create from "./Create";
import HelpCenter from "./HelpCenter";
import Home04 from "./Home04";
import Login from "./Login";
import SignUp from "./SignUp";
import Team from "./Wallet";
import Hackfest24Info from "./HackFest24Info";


const routes = [
  { path: '/', component: <Home04 />},
  { path: '/help-center', component: <HelpCenter />},
  { path: '/wallet', component: <Team />},
  { path: '/login', component: <Login />},
  { path: '/signup', component: <SignUp />},
  { path: '/create', component: <Create />},
  { path: '/contact', component: <Contact />},
  { path: '/hackfest24info', component: <Hackfest24Info />},



]

export default routes;