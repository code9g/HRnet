import logo from "../assets/logo.png";
function Home() {
  return (
    <div className="flex flex-col items-center gap-16">
      <h1 className="text-center text-6xl font-medium">Wealth Health</h1>
      <img src={logo} alt="logo" width="300" height="300" />
      <p className="text-center text-xl font-thin">
        Welcome to HRnet! This is our company&apos;s internal application to
        create and view employee records
      </p>
    </div>
  );
}

Home.propTypes = {};

export default Home;
