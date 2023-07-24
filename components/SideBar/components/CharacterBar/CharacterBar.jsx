import styled from "styled-components"
import CharacterItem from "./components/CharacterItem"

const CharacterBarContainer = styled.div`
width: 180px;
height: 100%;
padding: 0;
margin: 0;
// background-color: pink;
// filter: blur(10px);
// -webkit-filter: blur(10px);
// z-index: -2;
`
export const CharacterBar = ({mockData, setCurrentCharacter,reLoadHistory})=>{
    
    return(
        <CharacterBarContainer>
            {mockData.map(character => {
                return(<CharacterItem key={character.id}  setCurrentCharacter={setCurrentCharacter} character={character} reLoadHistory={reLoadHistory}/>)
            })}
        </CharacterBarContainer>
    )
}

export default CharacterBar