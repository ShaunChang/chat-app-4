import React from "react";

function CharacterChatItemContent({content}) {
  return (
    <div className="message-row d-flex align-items-center">
      <div className="message-content p-3">
        {content}
      </div>

      <div className="dropdown">
        <a
          className="text-muted ms-1 p-2 text-muted"
          href="#"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="zmdi zmdi-more-vert"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="#">
            Edit
          </a>
          <a className="dropdown-item" href="#">
            Share
          </a>
          <a className="dropdown-item" href="#">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}

export default CharacterChatItemContent;
