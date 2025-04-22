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
            path: "/contactus",
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


      ]
    }
]

export default routes;