function NotFound() {
  return (
    <div className="flex flex-col gap-10 text-3xl justify-center items-center py-20">
      <h2 className="text-6xl text-red-800 dark:text-red-100">404</h2>
      <p className="">Sorry, didn&apos;t found this page.</p>
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
