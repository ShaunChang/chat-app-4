import styled from "styled-components"

const CharacterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 80px;
background: linear-gradient(8deg, rgba(80,175,77,1) 0%, rgba(125,143,74,1) 100%);

&:hover {
    -webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 0.6);
  }
// -moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
`

const IamgeContainer = styled.div`
width: 45px;
height: 50%;
margin-right: 10px;
`
const Iamge = styled.img`
height: 100%;
width: 100%;
border-radius: 50%;
`
const NameContainer = styled.div`
height: 100%;
width: 50%;
border-radius: 50%;
display: flex;
align-items: center;
`

export const CharacterItem=({character, setCurrentCharacter,reLoadHistory })=>{
    const {id, name, img} = character

    const changeCurrentCharacter=()=>{
        setCurrentCharacter({
            name: name,
            img: img
        })
        reLoadHistory(id)
    }
    return(
        <div>
            <CharacterContainer onClick={changeCurrentCharacter}>
                <IamgeContainer>
                    <Iamge src={img}/> 
                </IamgeContainer>
                <NameContainer>
                    {name}
                </NameContainer>
            </CharacterContainer> 
        </div>
    )
}

export default CharacterItem