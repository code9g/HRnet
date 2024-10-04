function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20 text-3xl">
      <h2 className="text-6xl text-red-800 dark:text-red-100">404</h2>
      <p className="">Sorry, didn&apos;t found this page.</p>
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
