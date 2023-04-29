import { useRouteError } from "react-router-dom";
const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <div>
      <h1>Oops!!!!!!</h1>
      <h2>
        {status} : {statusText}
      </h2>
      <img src="https://lh5.ggpht.com/_9F9_RUESS2E/SpV5Yi8Vv5I/AAAAAAAAA4E/W9-J8eMLokM/s800/50-Cool-and-Creative-404-Error-Pages-25.jpg" />
    </div>
  );
};
export default Error;
