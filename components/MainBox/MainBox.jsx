import ChatHeader from './components/ChatHeader'
import ChatContent from './components/ChatContent'
import ChatInput from './components/ChatInput'
import { useEffect } from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import {updateHistory} from "../../store/actions";


const MainBox = ({currentChatCharacter, history, updateHistory}) => {
  const {characterId, name, time, avatar} = currentChatCharacter
  const imageBase64 = "data:image/png;base64," + avatar;
  
  const setHistory=(event)=>{
    updateHistory(event)
  }

  const getHistory = async function() {
    const res = await axios.get(`http://localhost:8080/api/v1/chat/history/user/1?characterId=${characterId}`)
    const data = res.data
    setHistory(data)
  }

  useEffect(()=>{
    getHistory()
  } ,[currentChatCharacter])

  return (
    <div className="main px-xl-5 px-lg-4 px-3">
      <div className="chat-body">
        <ChatHeader name={name} avatar={imageBase64} time={time}/>
        <ChatContent chatHistoryArray={history} name={name} avatar={imageBase64}/>
        <ChatInput setHistory={setHistory} currentChatCharacter={currentChatCharacter}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentChatCharacter: state.currentChatCharacter,
    history: state.history
  };
};

const mapDispatchToProps = {
  updateHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBox);
