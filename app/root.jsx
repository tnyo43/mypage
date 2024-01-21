import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

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
        <Link to="/">Top</Link>
        <h1>Hello world!</h1>
        <Outlet />

        <Scripts />
        <LiveReload />

        <ul>
          <li>
            <Link to="/contacts/1">Alice</Link>
          </li>
          <li>
            <Link to="/contacts/2">Bob</Link>
          </li>
        </ul>
      </body>
    </html>
  );
}
