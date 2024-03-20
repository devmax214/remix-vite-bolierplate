import {
  Links,
  Meta,
  Link, 
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div style={{ 
      fontFamily: "system-ui, sans-serif", 
      lineHeight: "1.8",
      display: "flex", 
    }}>
      <aside style={{ flexGrow: 1 }}>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/demo'}>Demo</Link></li>
          <li><Link to={'/demo/counter'}>Demo/Counter</Link></li>
          <li><Link to={'/demo/counter/10'}>Demo/Counter with param 10</Link></li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </aside>
      <section style={{ flexGrow: 2 }}>
        <h1>Welcome to Remix</h1>
        <Outlet />
      </section>
    </div>
  );
}
