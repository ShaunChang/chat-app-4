export const Profile = () => {
  return (
    <div className="sidebar border-end py-xl-4 py-3 px-xl-4 px-3">
      <div className="tab-content">
        <div className="tab-pane fade" id="nav-tab-user" role="tabpanel">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="mb-0 text-primary">Profile</h3>
            <div>
              <a href="signin.html" title="" className="btn btn-dark">
                Sign Out
              </a>
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

          <div className="card border-0 text-center pt-3 mb-4">
            <div className="card-body">
              <div className="card-user-avatar">
                <img src="assets/images/user.png" alt="avatar" />
                <button type="button" className="btn btn-secondary btn-sm">
                  <i className="zmdi zmdi-edit"></i>
                </button>
              </div>
              <div className="card-user-detail mt-4">
                <h4>Michelle Green</h4>
                <span className="text-muted">
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="15787c767d707979703b726770707b557278747c793b767a78"
                  >
                    [email&#160;protected]
                  </a>
                </span>
                <p>+14 123 456 789 - New york (USA)</p>
                <div className="social">
                  <a
                    className="icon p-2"
                    href="#"
                    data-toggle="tooltip"
                    title="Facebook"
                  >
                    <i className="zmdi zmdi-facebook-box"></i>
                  </a>
                  <a
                    className="icon p-2"
                    href="#"
                    data-toggle="tooltip"
                    title="Github"
                  >
                    <i className="zmdi zmdi-github-box"></i>
                  </a>
                  <a
                    className="icon p-2"
                    href="#"
                    data-toggle="tooltip"
                    title="Linkedin"
                  >
                    <i className="zmdi zmdi-linkedin-box"></i>
                  </a>
                  <a
                    className="icon p-2"
                    href="#"
                    data-toggle="tooltip"
                    title="Instagram"
                  >
                    <i className="zmdi zmdi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0">
            <ul className="list-group custom list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>Color scheme</span>
                <ul className="choose-skin list-unstyled mb-0">
                  <li
                    data-theme="indigo"
                    data-toggle="tooltip"
                    title="Theme-Indigo"
                  >
                    <div className="indigo"></div>
                  </li>
                  <li
                    className="active"
                    data-theme="cyan"
                    data-toggle="tooltip"
                    title="Theme-Cyan"
                  >
                    <div className="cyan"></div>
                  </li>
                  <li
                    data-theme="green"
                    data-toggle="tooltip"
                    title="Theme-Green"
                  >
                    <div className="green"></div>
                  </li>
                  <li
                    data-theme="blush"
                    data-toggle="tooltip"
                    title="Theme-Blush"
                  >
                    <div className="blush"></div>
                  </li>
                  <li
                    data-theme="dark"
                    data-toggle="tooltip"
                    title="Theme-Dark"
                  >
                    <div className="dark"></div>
                  </li>
                </ul>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>Desktop notifications</span>
                <label className="c_checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>Sound notifications</span>
                <label className="c_checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li className="list-group-item border-0 mt-3">
                <a className="link" href="#">
                  <i className="zmdi zmdi-chevron-right me-2"></i> Need Help?
                  Let's chat
                </a>
              </li>
              <li className="list-group-item border-0">
                <a className="link" href="#">
                  <i className="zmdi zmdi-chevron-right me-2"></i> Knowledgebase
                </a>
              </li>
              <li className="list-group-item border-0">
                <a className="link" href="#">
                  <i className="zmdi zmdi-chevron-right me-2"></i> english
                  (United States)
                </a>
              </li>
              <li className="list-group-item mb-3">
                <a className="link" href="#">
                  <i className="zmdi zmdi-chevron-right me-2"></i> Browser & App
                  Sessions
                </a>
              </li>
            </ul>

            <div className="card-body text-center border-top">
              <button type="button" className="btn btn-secondary">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
