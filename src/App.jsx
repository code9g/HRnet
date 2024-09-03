import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import EmployeesAdd from "./pages/EmployeesAdd";
import EmployeesView from "./pages/EmployeesView";
import Error from "./pages/Error";
import Home from "./pages/Home";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="employees">
        <Route index element={<Navigate to="/employees/view" />} />
        <Route path="view" element={<EmployeesView />} />
        <Route path="add" element={<EmployeesAdd />} />
      </Route>
    </Route>
  </Route>
);

const router = createBrowserRouter(routes, { basename: "/HRnet" });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
