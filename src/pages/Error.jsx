import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  console.error(error);

  return (
    <div className="flex items-center justify-center">
      <h2 className="text-3xl">Oups ! Une erreur innatendue a eu lieu</h2>
      <p className="text-xl">{error.statusText || error.message}</p>
    </div>
  );
}

Error.propTypes = {};

export default Error;
