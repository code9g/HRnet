import logo from "../assets/logo.png";
function Home() {
  return (
    <div className="flex flex-col items-center gap-16">
      <h1 className="text-center text-3xl font-bold uppercase text-primary">
        Wealth Health
      </h1>
      <img src={logo} alt="logo" width="300" height="300" />
    </div>
  );
}

Home.propTypes = {};

export default Home;
