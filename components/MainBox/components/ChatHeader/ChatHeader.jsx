import React from "react";

function ChatHeader({name, avatar,time}) {
  return (
    <div className="chat-header border-bottom py-xl-4 py-md-3 py-2">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-6 col-xl-4">
            <div className="media">
              <div className="me-3 show-user-detail">
                <span className="status rounded-circle"></span>
                <img className="avatar rounded-circle" src={avatar} alt="avatar" />
              </div>
              <div className="media-body overflow-hidden">
                <div className="d-flex align-items-center mb-1">
                  <h6 className="text-truncate mb-0 me-auto">{name}</h6>
                </div>
                <div className="text-truncate">{time}</div>
              </div>
            </div>
          </div>

          <div className="col-6 col-xl-8 text-end">
            <ul className="nav justify-content-end">
              {/* <li className="nav-item list-inline-item d-none d-md-block me-3">
                  <a
                    href="#"
                    className="nav-link text-muted px-3"
                    data-toggle="collapse"
                    data-target="#chat-search-div"
                    aria-expanded="true"
                    title="Search this chat"
                  >
                    <i className="zmdi zmdi-search zmdi-hc-lg"></i>
                  </a>
                </li> */}
              <li className="nav-item list-inline-item d-none d-sm-block me-3">
                <a
                  href="#"
                  className="nav-link text-muted px-3"
                  title="videocam"
                >
                  <i className="zmdi zmdi-videocam zmdi-hc-lg"></i>
                </a>
              </li>
              <li className="nav-item list-inline-item d-none d-sm-block me-3">
                <a href="#" className="nav-link text-muted px-3" title="Call">
                  <i className="zmdi zmdi-phone-forwarded zmdi-hc-lg"></i>
                </a>
              </li>
              <li className="nav-item list-inline-item add-user-btn">
                <a
                  href="#"
                  className="nav-link text-muted px-3"
                  title="Add Account"
                >
                  <i className="zmdi zmdi-account-add zmdi-hc-lg"></i>
                </a>
              </li>

              <li className="nav-item list-inline-item d-block d-sm-none px-3">
                <div className="dropdown">
                  <a
                    className="nav-link text-muted px-0"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="zmdi zmdi-more-vert zmdi-hc-lg"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      Search chat
                    </a>
                    <a className="dropdown-item" href="#">
                      Attache Image
                    </a>
                    <a className="dropdown-item" href="#">
                      Video call
                    </a>
                    <a className="dropdown-item" href="#">
                      Call
                    </a>
                    <a className="dropdown-item" href="#">
                      Add New
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
