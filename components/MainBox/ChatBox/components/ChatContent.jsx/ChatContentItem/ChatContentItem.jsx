import styled from "styled-components";

const ChatContentItemContainer = styled.div`
width: 80%;
margin-bottom: 10px;
margin-top: 10px;
display: flex;
`
const IamgeContainer = styled.div`
width: 60px;
height: 60px;
margin-right: 10px;
`
const Iamge = styled.img`
height: 100%;
width: 100%;
border-radius: 50%;
`

const ContentContainer = styled.div`
width: 80%;
background-color: white;
`

export const ChatContentItem = ({currentChatHistory, currentCharacter})=>{
    return(
        <ChatContentItemContainer>
            <IamgeContainer>
                <Iamge src={currentCharacter.img}/> 
            </IamgeContainer>
            <ContentContainer>
                {currentChatHistory.answer}
            </ContentContainer>
        </ChatContentItemContainer>
    )
}

export default ChatContentItem