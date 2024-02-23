import Contact from "./Contact";
import Create from "./Create";
import Faqs from "./Faqs";
import HelpCenter from "./HelpCenter";
import Home04 from "./Home04";
import Login from "./Login";
import SignUp from "./SignUp";
import Team from "./Wallet";
import CompetitionRegistrationForm from "./CompetitionRegistrationForm";
import Hackfest24Info from "./HackFest24Info";
import HackFestRegister from "./HackFestRegister";


const routes = [
  { path: '/', component: <Home04 />},
  { path: '/help-center', component: <HelpCenter />},
  { path: '/faqs', component: <Faqs />},
  { path: '/wallet', component: <Team />},
  { path: '/login', component: <Login />},
  { path: '/signup', component: <SignUp />},
  { path: '/create', component: <Create />},
  { path: '/contact', component: <Contact />},
  { path: '/competitionregistration', component: <CompetitionRegistrationForm />},
  { path: '/hackfest24info', component: <Hackfest24Info />},
  {path: '/hackfestregister', component: <HackFestRegister />}



]

export default routes;