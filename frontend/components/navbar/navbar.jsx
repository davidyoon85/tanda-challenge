import React from "react";

const Nav = props => {
  return (
    <div>
      {props.currentUser ? (
        <div className="dropdown">
          <div className="logo_container">
            <div className="dropdown_message">
              <ul className="dropdown_list">
                <li>
                  <button onClick={props.logout}>Log out</button>
                </li>
                <li>
                  <button onClick={() => props.history.push("/reset")}>
                    Update Account
                  </button>
                </li>
              </ul>
            </div>
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
        </ul>
      )}
    </div>
  );
};

export default Nav;
