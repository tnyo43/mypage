import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
} from "@remix-run/react";
import { json } from "@remix-run/node";

import appStylesHref from "./app.css";

import { getContacts } from "./data.js";

export const loader = async () => {
  const contacts = await getContacts();
  return json({ contacts });
};

export const links = () => [{ rel: "stylesheet", href: appStylesHref }];

export default function App() {
  const { contacts } = useLoaderData();

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

        <nav>
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <Link to={`/contacts/${contact.id}`}>
                  {contact.first || contact.last ? (
                    <>
                      {contact.first} {contact.last}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{" "}
                  {contact.favorites && <span>*</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
