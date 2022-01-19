import axios from "axios";

export const getComicsFromCharacters = async( { commit },comics ) =>{
    const apiKey='?ts=1&apikey=450ef79b4a48844146ddca1d1c030c50&hash=75618275fd2303c60668630a2d40d77b'
    let getComics=[]
    comics.forEach( async( { resourceURI } )=>{
        const { data } = await axios.get( resourceURI + apiKey )
        getComics.push( data.data.results[0] )
    } )
    commit('setComicsByCharacters',getComics)
}