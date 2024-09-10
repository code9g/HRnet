function Footer() {
  return (
    <footer>
      <div className="container mx-auto py-4 text-center text-green-900 dark:text-green-100 font-bold">
        Copyright (c) Wealth Health {new Date().getFullYear()}
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
