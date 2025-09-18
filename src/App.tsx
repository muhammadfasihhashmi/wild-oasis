import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cabins from "./pages/Cabins";
import Settings from "./pages/Settings";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import AppLayout from "./layout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/cabins",
        element: <Cabins />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
