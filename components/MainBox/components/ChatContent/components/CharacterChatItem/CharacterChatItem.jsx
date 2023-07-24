import React from "react";
import CharacterChatItemContent from "./components/CharacterChatItemContent";

function CharacterChatItem({name, avatar, chatHistory}) {
  const {historyId, createTime, content, file, isBreak} = chatHistory
  const time = createTime.split(' ')[1]
  return (
    <li className="d-flex message">
      <div className="mr-lg-3 me-2">
        <img
          className="avatar sm rounded-circle"
          src={avatar}
          alt="avatar"
        />
      </div>

      <div className="message-body">
        {isBreak && <span className="date-time text-muted">{name}, {time}</span>}
        <CharacterChatItemContent key={historyId} content={content}/>
      </div>
    </li>
  );
}

export default CharacterChatItem;
