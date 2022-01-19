import {  computed , onMounted ,watch} from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const characters = ()=>{
    const store = useStore()
    const router = useRouter()
    const characters = computed( ()=>store.state.characters.character )
    onMounted(async() => {
      await store.dispatch('characters/getCharacter',{ offset:characters.value.length })
      let unique = 0
      watch(characters, (newValue, oldValue) => {
        unique=0
        console.log(newValue,oldValue)
      })
      window.addEventListener('scroll',()=>{
        const lazy = Math.round(document.getElementById('elementLazy').offsetHeight * 0.5)
        let scroll=window.pageYOffset
        if( scroll >= lazy && unique===0){
            store.dispatch('characters/getCharacter',{ offset:characters.value.length })
            unique=1
        } 
    })
    })

    return{
      characters,
      goComics:( character )=>{
        store.dispatch('comics/getComicsFromCharacters',character.id)
        setTimeout( ()=>{
            router.push({ name:'comicsLayout' , query:{ name:character.name } })
        },400 )
      }
    }
}
export default characters