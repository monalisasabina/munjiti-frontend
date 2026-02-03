import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import Compassion from "./pages/compassion";
import ContactUs from "./pages/contact";
import Sermons from "./pages/sermons";
import Login from "./pages/login";
import Give from "./pages/give";
import Admin from "./pages/admin";
import Pastor from "./pages/pastor";
import History from "./pages/history";
import Maintenance from "./pages/maintenance"
import CompassionAbout from "./pages/CompassionAbout";
import Bakery from "./pages/Bakery";
import Saloon from "./pages/Saloon";
import IT from "./pages/IT";
import School from "./pages/School";
import Missions from "./pages/Missions";
import Visit from "./pages/Visit";


const routes = [
    {
      path: "/",
      element:<App />,
      errorElement:<ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/visit",
            element: <Visit/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/ministries",
            element: <Ministries/>,
        },
        {
            path: "/compassion",
            element: <Compassion/>
        },
        {
            path: "/contacts",
            element: <ContactUs/>
        },
        {
            path: "/sermons",
            element: <Sermons/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/admin",
            element: <Admin/>
        },
        {
            path: "/give",
            element: <Give/>
        },
        {
            path: "/about/history",
            element: <History />
        },
        {
            path: "/about/pastor",
            element: <Pastor />
        },
        {
            path: "/maintainance",
            element: <Maintenance />
        },
        {
            path: "/compassion/about",
            element: <CompassionAbout />
        },
        {
            path: "/compassion/bakery",
            element: <Bakery />
        },
        {
            path: "/compassion/saloon",
            element: <Saloon />
        },
        {
            path: "/compassion/it",
            element: <IT />
        },
        {
            path: "/compassion/school",
            element: < School/>
        },
        {
            path: "/compassion/missions",
            element: <Missions/>
        },
        
      ]
    }
]

export default routes;