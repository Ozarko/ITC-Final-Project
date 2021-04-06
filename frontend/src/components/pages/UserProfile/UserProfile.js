import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { getUserDetails, logout } from "../../../redux/actions/user/userAction";
import { USER_UPDATE_PROFILE_RESET } from "../../../redux/types/user/userTypes";
import { link } from "../../../routes/navigationLink";
import Loader from "../../UI/Loader/Loader";
import SiteTitleNav from "../../UI/SiteTitleNav/SiteTitleNav";
import UpdateProfile from "./UpdateProfile/UpdateProfile";

const UserProfile = ({ history }) => {
  
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, user } = useSelector((state) => state.userDetails);

  const logoutHandler = () => {
    dispatch(logout());
    history.push(link.main);
  };

  useEffect(() => {
    if (!userInfo) {
      history.push(link.signin);
    } else {
      if (!user ||!user.name) {
        dispatch({type:USER_UPDATE_PROFILE_RESET})
        dispatch(getUserDetails("profile"));
      }
    }
  }, [dispatch, history, userInfo, user]);

  if(loading) {
    return <Loader loading={loading}/>
  }else {
    return (
      <section className="UserProfile">
        <div className="container">
          <SiteTitleNav />
          <div className="UserProfile-title">
            <h4>{userInfo && userInfo.name}</h4>
          </div>
          <div className="UserProfile-box">
            <div className="UserProfile-box-navigation">
              <ul>
                <li>
                  <button>Особисті дані</button>
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
  }
};

export default withRouter(UserProfile);
