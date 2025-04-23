import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes.jsx'
import ReactDOM from "react-dom/client"

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
