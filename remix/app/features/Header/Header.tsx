import type { ReactElement } from 'react';
import { Link } from '@remix-run/react';

export function Header(): ReactElement {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="ion-compose" />
              &nbsp;New Article
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="ion-gear-a" />
              &nbsp;Settings
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login" prefetch="intent">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register" prefetch="intent">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
