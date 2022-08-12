import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Footer } from '~/features/Footer/Footer';
import { Header } from '~/features/Header/Header';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Conduit',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: '//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
    type: 'text/css',
  },
  {
    rel: 'stylesheet',
    href: '//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic',
    type: 'text/css',
  },
  {
    rel: 'stylesheet',
    href: '//demo.productionready.io/main.css',
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: any }) {
  console.error('errorboundary: ', error);
  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}
