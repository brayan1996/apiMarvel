import { useStore } from "vuex"
import { computed  } from "vue"
const characterEspecific = (  ) =>{
    const store = useStore()
    const characterEspecific = computed( ()=>store.state.characters.characterEspecific )
    return{
        characterEspecific
    }

}
export default characterEspecific