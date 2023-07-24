import { useState } from "react";
import { connect } from "react-redux";
import {
  updateCurrentChatCharacter,
  updateCurrentMiddleBar,
  updateCurrentMainBox,
} from "../../store/actions";


const SideBar = ({
  updateCurrentChatCharacter,
  updateCurrentMiddleBar,
  updateCurrentMainBox,
}) => {
  const [activeButton, setActiveButton] = useState(null);

  const setCurrentChatCharacter = (event) => {
    updateCurrentChatCharacter(event);
  };

  const setCurrentMiddleBar = (event) => {
    updateCurrentMiddleBar(event);
  };

  const setCurrentMainBox = (event) => {
    updateCurrentMainBox(event);
  };

  const clickHandler = (name) => {
    setCurrentMiddleBar(name);
    setActiveButton(name);
    setCurrentMainBox(name);
    setCurrentChatCharacter(undefined);
  };

  return (
    <div className="navigation navbar justify-content-center py-xl-4 py-md-3 py-0 px-3">
      <a href="index.html" title="Postman" className="brand">
        <img src="assets/chat/images/chat.svg" width="46" height="46" />
      </a>

      <div
        className="nav flex-md-column nav-pills flex-grow-1"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          className="mb-xl-3 mb-md-2 nav-link"
          data-toggle="pill"
          href="#nav-tab-user"
          role="tab"
        >
          <img
            src="assets/chat/images/user.png"
            className="avatar sm rounded-circle"
            alt="user avatar"
          />
        </a>
        <a
          className={`mb-xl-3 mb-md-2 nav-link ${
            activeButton === "RecentChat" ? "active" : ""
          }`}
          data-toggle="pill"
          role="button"
          onClick={() => {
            clickHandler("RecentChat");
          }}
        >
          <i className="zmdi zmdi-comment-alt"></i>
        </a>
        {/* <a
          className="mb-xl-3 mb-md-2 nav-link"
          data-toggle="pill"
          href="#nav-tab-phone"
          role="tab"
        >
          <i className="zmdi zmdi-phone"></i>
        </a> */}
        <a
          className={`mb-xl-3 mb-md-2 nav-link ${
            activeButton === "Contact" ? "active" : ""
          }`}
          data-toggle="pill"
          role="button"
          onClick={() => {
            clickHandler("Contact");
          }}
          aria-pressed={activeButton === "Contact"}
        >
          <i className="zmdi zmdi-account-circle"></i>
        </a>
        <a
          className={`mb-xl-3 mb-md-2 nav-link d-none d-sm-block ${
            activeButton === "Doc" ? "active" : ""
          }`}
          data-toggle="pill"
          href="#nav-tab-pages"
          role="tab"
          onClick={() => {
            clickHandler("Article");
          }}
        >
          <i className="zmdi zmdi-layers"></i>
        </a>
      </div>

      <div
        className="nav flex-md-column nav-pills flex-grow-2"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          className="mt-xl-3 mt-md-2 nav-link light-dark-toggle"
          href="javascript:void(0);"
        >
          <i className="zmdi zmdi-brightness-2"></i>
          <input className="light-dark-btn" type="checkbox" />
        </a>
        <a
          className="mt-xl-3 mt-md-2 nav-link d-none d-sm-block"
          href="settings.html"
          role="tab"
        >
          <i className="zmdi zmdi-settings"></i>
        </a>
      </div>

      <button type="submit" className="btn sidebar-toggle-btn shadow-sm">
        <i className="zmdi zmdi-menu"></i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  updateCurrentChatCharacter,
  updateCurrentMiddleBar,
  updateCurrentMainBox,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
