import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateCurrentChatCharacter } from "../../../store/actions";

const RecentChat = ({ updateCurrentChatCharacter }) => {
  const [ChatHistoryList, setChatHistoryList] = useState([]);

  const setCurrentChatCharacter = (event) => {
    updateCurrentChatCharacter(event);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/chat/chatHistory/user/1`)
      .then((response) => {
        const chatHistory = response.data;
        setChatHistoryList(chatHistory);
      });
  }, []);

  return (
    <div className="sidebar border-end py-xl-4 py-3 px-xl-4 px-3">
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="nav-tab-chat"
          role="tabpanel"
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="mb-0 text-primary">Chat</h3>
            <div>
              <button className="btn btn-dark" type="button">
                New Chat
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
              <span>RECENT CHATS</span>
              <div className="dropdown">
                <a
                  className="btn btn-link px-1 py-0 border-0 text-muted dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="zmdi zmdi-filter-list"></i>
                </a>
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
              <a href="bot-chat.html" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <div className="avatar rounded-circle no-image bg-primary text-light">
                        <span>
                          <i className="zmdi zmdi-comment-text"></i>
                        </span>
                      </div>
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Support ChatBot
                        </h6>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-circle text-success"></i> Online
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>

            {ChatHistoryList.map((chathistory) => (
              <li
                className="online"
                onClick={() => {
                  setCurrentChatCharacter(chathistory.characterGetDto);
                }}
              >
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
                        <span className="status rounded-circle"></span>
                        <img
                          className="avatar rounded-circle"
                          src={`data:image/png;base64, ${chathistory.characterGetDto.avatar}`}
                          alt="avatar"
                        />
                      </div>
                      <div className="media-body overflow-hidden">
                        <div className="d-flex align-items-center mb-1">
                          <h6 className="text-truncate mb-0 me-auto">
                            {chathistory.characterGetDto.name}
                          </h6>
                          <p className="small text-muted text-nowrap ms-4 mb-0">
                            {chathistory.history[0].createTime}
                          </p>
                        </div>
                        <div className="text-truncate">
                          {chathistory.history[0].content}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentChatCharacter: state.currentChatCharacter,
  };
};

const mapDispatchToProps = {
  updateCurrentChatCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentChat);
