<template>
    <div class="container intro pc">
        <section class="video-wrapper">
            <video :src="require('@/assets/img/pc/pc.webm')" type="video/mp4" ref="video" autoplay loop muted> </video>

            <div class="btn" @click="$router.push({ path: '/pc/main' });"></div>
        </section>

    </div>
</template>

<style lang='scss'>
.intro.pc{
    .video-wrapper{
        position: relative;
        video{
            margin-bottom: -10px;
            width: 100%;
            height: 100%;
        }
        .btn{
            width: 300px;
            height: 140px;
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 5;
            cursor: pointer;
        }
    }
}
</style>

<script>
export default {
    name: 'intro',
    data(){
        return{
        }
    },
    computed:{
 
    },
    mounted(){

    },
    methods:{
    }
}
</script>
