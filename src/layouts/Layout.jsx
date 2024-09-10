import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {};

export default Layout;
