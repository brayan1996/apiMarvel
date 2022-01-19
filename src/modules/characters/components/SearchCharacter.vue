<template class="caja">
        <input 
            type="text"
            v-model="searchCharacter"
            @keyup.enter="getCharacter(searchCharacter)"
        >
        <button @click="getCharacter(searchCharacter)">buscar</button>
        <button @click="clear">alfabetico</button>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    setup(){
        const store = useStore()
        const searchCharacter=ref('')
        const getCharacter = ( name ) =>{
            store.dispatch('characters/getCharacterEspecific',name)
        }
        const clear = () =>{
            searchCharacter.value = ('')
            getCharacter(searchCharacter.value)
        }
        return{
            searchCharacter,
            getCharacter,
            clear
        }
    }
}
</script>

<style>
    .caja{
        margin-left: 5%;
    }
</style>