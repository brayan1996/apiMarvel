import { useStore } from "vuex"
import {  computed } from 'vue'

const comicsByCharacters = () =>{
    const store = useStore()
    return{
        comics : computed( ()=>store.state.comics.comicsByCharacters )
    }
}
export default comicsByCharacters