import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <div>
      <Link className="home-link" to={"/"}>
        Adnat
      </Link>
      {props.currentUser ? (
        <div>
          <div>
            <div>
              <ul>
                <li>
                  <span>Logged in as {props.currentUser.name}</span>
                  <button onClick={props.logout}>Log out</button>
                </li>
                <li>
                  <button onClick={() => props.history.push("/reset")}>
                    Update Account
                  </button>
                </li>
              </ul>
            </div>
            {!props.currentUser.organization_id && (
              <div>
                <p>You aren't a member of any organizations.</p>
                <p>Join an existing one or create a new one.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <ul className="user_session">
          <li>
            <button onClick={() => props.history.push("/signup")}>
              Sign up
            </button>
          </li>
          <li>
            <button onClick={() => props.history.push("/login")}>Log in</button>
          </li>
          <li>
            <button onClick={() => props.history.push("/forgot_password")}>
              Forgot Password?
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
