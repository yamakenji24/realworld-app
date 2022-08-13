import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { isUserLogin, checkUserLogin, userInfo } from "../../store/userStore";

export const Header = () => {
  const isLogined = useStore(isUserLogin);
  const user = useStore(userInfo);
  useEffect(() => {
    checkUserLogin();
  }, []);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/editor">
              <i className="ion-compose"></i>&nbsp;New Article
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/settings">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          {isLogined && user ? (
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                {user.username}
              </a>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Sign up
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
