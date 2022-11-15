<template>
    <div class="container intro mb">
        <section class="video-wrapper">
        <!-- <section class="video-wrapper" @click="$router.push({ path: '/mb/main' });"> -->
            <video :src="require('@/assets/img/mb/mb.mp4')" type="video/mp4" ref="video" autoplay loop muted playsinline > </video>
        </section>

    </div>
</template>

<style lang='scss'>
.intro.mb{
    background-color: #000;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding-top: 0 !important;
    .video-wrapper{
        position: relative;
        width: 100%;
        height: 100vh;
        video{
            position: absolute;
            width: 100%;
            object-fit: contain;
        }
    }
}
</style>

<script>
export default {
    name: 'intro',
    layout: 'mobile',
    data(){
        return{
        }
    },
    mounted(){

    },
    methods:{
    }
}
</script>
