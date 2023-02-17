import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Verify from "./pages/Verify";
import DashboardHome from "./views/dashboard";
import ManageSBT from "./views/dashboard/manage";
import CloseShop from "./views/dashboard/closeShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "home",
            element: <DashboardHome />,
          },
          {
            path: "manage",
            element: <ManageSBT />,
          },
          {
            path: "close",
            element: <CloseShop />,
          },
        ],
      },
      {
        path: "verify",
        element: <Verify />,
      },
    ],
  },
]);

export default router;
