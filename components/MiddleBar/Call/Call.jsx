import React from "react";

function Call(props) {
  return (
    <div className="sidebar border-end py-xl-4 py-3 px-xl-4 px-3">
      <div className="tab-content">
        <div className="tab-pane fade" id="nav-tab-phone" role="tabpanel">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="mb-0 text-primary">Call</h3>
            <div>
              <button className="btn btn-dark" type="button">
                New Call
              </button>
            </div>
          </div>

          <div className="form-group input-group-lg search mb-3">
            <i className="zmdi zmdi-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>

          <ul className="chat-list">
            <li className="header d-flex justify-content-between ps-3 pe-3 mb-1">
              <span>RECENT CALL</span>
              <div className="dropdown">
                <a
                  className="btn btn-link px-1 py-0 border-0 text-muted dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar10.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Michelle Green
                        </h6>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-phone-missed me-1"></i>{" "}
                        Yesterday at 6:08 PM
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar9.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Jane Hunt
                        </h6>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-phone-missed me-1"></i>{" "}
                        Yesterday at 6:08 PM
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar8.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Susie Willis
                        </h6>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-phone-missed me-1"></i>{" "}
                        Yesterday at 6:08 PM
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar1.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Marshall Nichols
                        </h6>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-phone-forwarded me-1"></i>{" "}
                        Yesterday at 6:08 PM
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar8.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Jason Porter
                        </h6>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-phone-missed me-1"></i>{" "}
                        Yesterday at 6:08 PM
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div className="hover_action">
                <button type="button" className="btn btn-link text-info">
                  <i className="zmdi zmdi-eye"></i>
                </button>
                <button type="button" className="btn btn-link text-warning">
                  <i className="zmdi zmdi-star"></i>
                </button>
                <button type="button" className="btn btn-link text-danger">
                  <i className="zmdi zmdi-delete"></i>
                </button>
              </div>
              <a href="#" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar1.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Darryl Day
                        </h6>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-phone-forwarded me-1"></i>{" "}
                        Yesterday at 6:08 PM
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Call;
