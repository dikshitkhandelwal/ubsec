import Blog01 from "./Blog01";
import Blog02 from "./Blog02";
import BlogDetails01 from "./BlogDetails01";
import BlogDetails02 from "./BlogDetails02";
import Contact from "./Contact";
import Home01 from "./Home01";
import Home02 from "./Home02";
import Home03 from "./Home03";
import Home04 from "./Home04";
import Home05 from "./Home05";
import Home06 from "./Home06";
import Login from "./Login";
// import SignUp from "./SignUp";
// import Wallet from "./Wallet";
import ComingSoon from "./ComingSoon";
import Eboard from "./Eboard";
import DikshitKhandelwal from "./Members/DikshitKhandelwal";
import AustinChen from "./Members/AustinChen";
import LaurenMoore from "./Members/LaurenMoore";
import Steffi from "./Members/Steffi";
import JonathanPestinger from "./Members/JonathanPestinger";

const routes = [
  { path: '/', component: <Home05 />},
  { path: '/coming-soon', component: <ComingSoon />},
  { path: '/home-v2', component: <Home02 />},
  { path: '/home-v3', component: <Home03 />},
  { path: '/home-v4', component: <Home04 />},
  { path: '/home-v5', component: <Home01 />},
  { path: '/home-v6', component: <Home06 />},
  { path: '/login', component: <Login />},
  // { path: '/signup', component: <SignUp />},
  // { path: '/create', component: <Create />},
  { path: '/blog-v1', component: <Blog01 />},
  { path: '/blog-v2', component: <Blog02 />},
  { path: '/blog-details-v1', component: <BlogDetails01 />},
  { path: '/blog-details-v2', component: <BlogDetails02 />},
  { path: '/contact', component: <Contact />},
  {path: '/eboard', component: <Eboard />},
  {path: '/eboard/dikshit-khandelwal', component: <DikshitKhandelwal />},
  {path: '/eboard/austin-chen', component: <AustinChen />},
  {path: '/eboard/lauren-moore', component: <LaurenMoore />},
  {path: '/eboard/steffi', component: <Steffi />},
  {path: '/eboard/jonathan-pestinger', component: <JonathanPestinger />},
]

export default routes;