import axios from "axios";
import React, { useEffect, useState } from 'react';
import ChatContent from "./components/ChatContent.jsx/ChatContent";
import styled from "styled-components";
import ChatInput from "./components/ChatInput";


const ChatBoxContainer = styled.div`
width: 740px;
height: 600px;
display: flex;
flex-direction: column;
align-items: center;
`


export const ChatBox =({currentCharacter,currentChatHistory,seCurrentHistory})=>{
    const [content, setContent] = useState([])
    // const [answer, setAnswer] = useState({})
    
    // useEffect(()=>{
    //     seCurrentHistory((preState)=>[...preState, content])
    // },[content])

    const sendRequest = (input)=>{
        const API_KEY = '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';
        const API_URL = 'https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-1.3B';
        const headers = { 'Authorization': `Bearer ${API_KEY}`,'Content-Type': 'application/json'}
        const data = { 
        "inputs": input,
        "options": {
        "model": "EleutherAI/gpt-neo-1.3B",
        "temperature": 0.5,
        "max_length": 50
    } };
      axios.post(API_URL, data, { headers })
      .then(responseRes => {setContent({historyId:1,question:"hello",answer:"hello",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'})})
      .catch(error => {setContent({historyId:1,question:"hello",answer:"hello",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'})})
    }

    return(
        <ChatBoxContainer>
            <ChatContent currentChatHistory={currentChatHistory} currentCharacter={currentCharacter}/>
            <ChatInput sendRequest={sendRequest} setContent={setContent}/>
        </ChatBoxContainer>
    )
}

export default ChatBox;