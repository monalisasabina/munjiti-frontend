import App from "./App";
import Home from "./pages/home";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
      path: "/",
      element:<App />,
      errorElement:<ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home />,
        },

      ]
    }
]

export default routes;