import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  return (
    <div id="error-page" style={{display: 'flex', height: '100vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
        Page Not Found
      </p>
    </div>
  );
}