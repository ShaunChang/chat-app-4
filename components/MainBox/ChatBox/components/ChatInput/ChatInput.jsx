import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const ChatInputContainer = styled.div`
width: 85%;
height: 30px;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 30px;
`
const Input = styled.input`
width: 85%;
height: 100%;
display: flex;
`
const Button = styled.button`
width: 13%;
height: 80%;
background-color: green;
color: white;
display: flex;
justify-content:center;
align-items: center;
`

export const ChatInput = ({sendRequest})=>{
    const [inputs,setInputs] = useState("");

    const changeInputsHandler = (event)=>{
        setInputs(event.target.value)
    }

    const saveRequest = (question)=>{
        axios.put(`http://localhost:8080/api/v1/chat/user/2?question=${question}`)
    }

    const clickHandler = () =>{
        sendRequest(inputs);
        saveRequest(inputs)
        setInputs("")
    }

    return(
        <ChatInputContainer>
            <Input onChange={changeInputsHandler} value={inputs} placeholder="Please type your question"/>
            <Button onClick={clickHandler}>Send</Button>
        </ChatInputContainer>
    )
}

export default ChatInput;