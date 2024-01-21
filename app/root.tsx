import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
} from "@remix-run/react";
import { LinksFunction, json } from "@remix-run/node";
import appStylesHref from "./app.css";
import { createEmptyContact, getContacts } from "./data.js";

export const loader = async () => {
  const contacts = await getContacts();
  return json({ contacts });
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
  const { contacts } = useLoaderData<typeof loader>();

  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Remix Contacts</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
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
                    {contact.favorite && <span>*</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
