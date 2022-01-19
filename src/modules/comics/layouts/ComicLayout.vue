<template>
    <h2>Comics de {{ nameCharacter }} </h2>
    <div class="comics-grid">
        <div 
        class="comics"
        v-for="comic in comics"
        :key="comic.id"
        >
            <img  
                :src="getImageUrl(comic)" 
                :alt="comic.title"
            >
            <p class="comic__title">{{ comic.title }}</p>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import comicsByCharacterComposable from '../composables/useComicsByCharacter'
export default {
    
    setup(){
        const router = useRoute()
        const nameCharacter = ref(router.query.name)
        const {  comics } = comicsByCharacterComposable()
        const getImageUrl = ( { images } ) =>{
            if( images.length > 0 ) return images[0]['path'] + '/portrait_uncanny.' +images[0]['extension']
            return 'https://i.annihil.us/u/prod/marvel/i/mg/f/40/5a8c9d8be1c0b/standard_incredible.jpg'
        }
        return{
            comics,
            getImageUrl,
            nameCharacter
        }
    }
}
</script>

<style lang="scss" scoped>
    h2{
        text-align: center;
        margin-bottom: 30px;
        color: #fff;
        font-size: 2.5rem;
        font-weight: bold;
    }
    .comics-grid{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px 180px;
    }
      .comics{
            margin-bottom: 20px;
            height: 280px;
            width: 100%;
            position: relative;
            cursor: pointer;
            &::after{
                content: '';
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.501);
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;
            }
            img{
                display: inline-block;
                height: 100%;
                width: 100%;
                background-color: rgba(0, 0, 0, 0.226);
              
            }
            .comic__title{
                position: absolute;
                top: 50%;
                left: 50%;
                z-index: 20;
                transform: translate(-50%,-50%);
                color: #fff;
                font-weight: bold;
            }
        }
         @media screen and (max-width:1200px){
            .comics-grid{
                gap: 20px 100px;
            }
        }
    @media screen and (max-width:800px){
      .comics-grid{
        grid-template-columns: repeat(2, 1fr);
      }
    }
</style>