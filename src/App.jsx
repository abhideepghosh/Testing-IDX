import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import RegisterComponent from "./components/RegisterComponent/RegisterComponent";
import DashboardComponent from "./components/DashboardComponent.jsx/DashboardComponent";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        path: "/",
        element: <LoginComponent />,
      },
      {
        path: "/register",
        element: <RegisterComponent />,
      },
      {
        path: "/dashboard",
        element: <DashboardComponent />,
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
