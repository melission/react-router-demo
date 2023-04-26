import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error)

    return(
        <div id="error-page">
            <h1><i>{error.statusText || error.meggase}</i></h1>
            <h2>Woah!</h2>
            <p>Something unexpected happened, that's why we can't find the page you're looking for.</p>
            <p>Sorry!</p>
        </div>
    )
}

export default ErrorPage;