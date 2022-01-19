import axios from "axios";

export const getComicsFromCharacters = async( { commit },id ) =>{
    const apiKey='?ts=1&apikey=450ef79b4a48844146ddca1d1c030c50&hash=75618275fd2303c60668630a2d40d77b'
    const urlBase = `https://gateway.marvel.com/v1/public/characters/${ id }/comics`
    const { data } = await axios.get( urlBase + apiKey )
    const getComics = data.data.results
    commit('setComicsByCharacters',getComics)
}