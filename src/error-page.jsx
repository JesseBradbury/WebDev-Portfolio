import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Wow!</h1>
            <p>Someone goofed on that one, an unexpected error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <h2>¯\_(ツ)_/¯</h2>
        </div>
    );
}