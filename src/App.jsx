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

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="employees">
        <Route index element={<EmployeeList />} />
        <Route path="create" element={<CreateEmployee />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  </Route>
);

const router = createBrowserRouter(routes, { basename: "/HRnet" });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
