import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { logout } from "../../../redux/actions/logout/logoutAction";
import { link } from "../../../routes/navigationLink";
import SiteTitleNav from "../../UI/SiteTitleNav/SiteTitleNav";
import UpdateProfile from "./UpdateProfile/UpdateProfile";

const UserProfile = ({ history }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { isLogged } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout())
    history.push(link.main);
  };

  useEffect(() => {
    if (!isLogged) {
      history.push(link.login);
    }
  }, [history, isLogged]);

  return (
    <section className="UserProfile">
      <div className="container">
        <SiteTitleNav />
        <div className="UserProfile-title">
          <h4>{`${user.firstName} ${user.lastName}`}</h4>
        </div>
        <div className="UserProfile-box">
          <div className="UserProfile-box-navigation">
            <ul>
              <li>
                <button>Особисті дані</button>
                <div className="UserProfile-box-navigation-line"></div>
              </li>
              <li>
                <button>Мої вподобання</button>
                <div className="UserProfile-box-navigation-line"></div>
              </li>
              <li>
                <button>Мої покупки</button>
                <div className="UserProfile-box-navigation-line"></div>
              </li>
              <li>
                <button onClick={() => logoutHandler()}>Вихід</button>
                <div className="UserProfile-box-navigation-line"></div>
              </li>
            </ul>
          </div>
          <div className="UserProfile-box-screen">
            <UpdateProfile user={user} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(UserProfile);
