import { createBrowserRouter } from "react-router-dom";
import UnderDevelopment from "../components/common/UnderDevelopment";
import AppLayout from "../layout/AppLayout";
import SignIn from "../pages/AuthPages/SignIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/OtherPage/NotFound";
const routes = [
  {
    path: "/",
    errorElement: <NotFound />,
    element: (
      // <ProtectedRoutes roles={["super_admin", "admin", "editor", "publisher"]}>
      <AppLayout />
      // </ProtectedRoutes>
    ),

    children: [
      { path: "/", element: <Dashboard /> },

      // Settings Routes
      { path: "*", element: <UnderDevelopment /> },
    ],
  },

  // Fallback Route
  { path: "/404", element: <NotFound /> },
  { path: "/signin", element: <SignIn /> },
];

const router = createBrowserRouter(routes);

export default router;
