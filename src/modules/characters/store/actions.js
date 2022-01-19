
import axios from 'axios'
const apikey='ts=1&apikey=450ef79b4a48844146ddca1d1c030c50&hash=75618275fd2303c60668630a2d40d77b'
const urlBasic='https://gateway.marvel.com/v1/public/characters?'
    export const getCharacter = async({ commit },{  offset })=>{
        try {
            const { data }= await axios.get(`${urlBasic}limit=20&offset=${ offset }&${ apikey }`)
            const characters=data.data.results
            commit('setCharacter',characters)
        } catch (error) {
            console.log(error.message)
        }
    }
    export const getCharacterEspecific = async( { commit } ,name ) =>{
        if(name.length > 0){
            const { data } = await axios.get(`${ urlBasic }nameStartsWith=${ name }&${ apikey }`)
            const characterEspecific= data.data.results
            commit('setCharacterSpecific' , characterEspecific)
        } else{
            commit('setCharacterSpecific' , [])
        }
    }