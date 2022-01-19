
    export const setCharacter= ( state , characters) =>{
        state.character=[...state.character,...characters]
    }
    export const setCharacterSpecific = ( state , character ) =>{
        state.characterEspecific = character
    }