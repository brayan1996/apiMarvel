import { createStore } from 'vuex'
import characters from '@/modules/characters/store'
import comics from '@/modules/comics/store'
export default createStore({
  modules:{
    characters,
    comics
  }
})
