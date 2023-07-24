import React from "react";
import UserChatItemContent from './components/UserChatItemContent'

function UserChatItem({chatHistory}) {
  const {historyId, createTime, content, file, isBreak} = chatHistory
  const imageBase64 = file?`data:image/png;base64, ${file}`:''

  const avatar = "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRNug2nY7GDEG23c7HpAX6pWLWp3dfcQmTxGz50nGt_kAqGyAxoVPLw21v137iB7iAW"

  const time = createTime.split(' ')[1]
  return (
    <li className="d-flex message right">
      <div className="message-body">
        {isBreak && <span className="date-time text-muted">
          {time}<i className="zmdi zmdi-check-all text-primary"></i>
        </span>}
       <UserChatItemContent key={historyId} content={content} file={imageBase64}/>
      </div>
      <br />
      <div className="margin-left ps-2 mr-lg-11 me-2">
        <img
          className="avatar sm rounded-circle"
          src={avatar}
          alt="avatar"
        />
      </div>
      
    </li>
  );
}

export default UserChatItem;
