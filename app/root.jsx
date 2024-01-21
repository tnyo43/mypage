import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";

import appStylesHref from "./app.css";

export const links = () => [{ rel: "stylesheet", href: appStylesHref }];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>
        <Outlet />

        <Scripts />
        <LiveReload />

        <button>click!</button>
      </body>
    </html>
  );
}
