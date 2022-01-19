<template>
    <SearchCharacter 
    />
    <hr>
    <div 
        class="img-grid" 
        id="elementLazy" 
    >
    <div 
        class="img"
        v-for="character in characterResult"
        :key="character.id"
    >
        <img  
            :src="character.thumbnail.path + '/portrait_uncanny.' + character.thumbnail.extension" 
            alt="imagen"
            @click="goComics(character)"
        >
        <p>{{ character.name }}</p>
        <button class="redirection" @click="goComics(character)">
            Ver comics
        </button>
    </div>
  </div>
</template>
<script>
import charactersComposable from '../composables/useCharacters'
import characterEspecificComposable from '../composables/useCharacterEspecific'
import { computed, defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
        SearchCharacter:defineAsyncComponent( ()=> import('../components/SearchCharacter.vue') )
    },
  setup() {
    const { characters , goComics} = charactersComposable()
    const {  characterEspecific } = characterEspecificComposable( characters )
    let characterResult = computed( ()=>{
        if(characterEspecific.value.length > 0) return characterEspecific.value
        return characters.value
    } )
    return{
        goComics,
        characters,
        characterResult
    }
  },
}
</script>
<style lang="scss" scoped>
    .img-grid{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: repeat(3, 25%);
        gap: 20px 180px;
        .img{
            margin-bottom: 20px;
            box-shadow: 0 0 3px 2px #fff;
            cursor: pointer;
            position: relative;
            p{
                position: absolute;
                left: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.4);
                color: #fff;
                text-align: center;
                width: 100%;
                height: 40px;
                padding-top: 20px;
                margin-bottom: 0;
            }
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
            .redirection{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                background-color: rgba(0, 0, 0,0.8);
                border: 0;
                cursor: pointer;
                color: #fff;
                text-align: center;
                padding: 15px;
                opacity: 0;
                transition: opacity 1s;
            }
            &:hover .redirection{
                opacity: 1;
            }
        }
    }
     @media screen and (max-width:1200px){
      .img-grid{
        gap: 20px 100px;
      }
    }
    @media screen and (max-width:800px){
      .img-grid{
        grid-template-columns: repeat(2, 1fr);
      }
    }
</style>