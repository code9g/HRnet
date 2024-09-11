import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";
import Error from "./pages/Error";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="employee-list" element={<EmployeeList />} />
      <Route path="create-an-employee" element={<CreateEmployee />} />
      <Route path="settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Route>
);

const router = createBrowserRouter(routes, { basename: "/HRnet" });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
