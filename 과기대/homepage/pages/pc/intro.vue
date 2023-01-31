<template>
    <div class="container intro pc">
        <section class="video-wrapper">
            <!-- <video :src="require('@/assets/img/pc/pc.mp4')" type="video/mp4" ref="video" autoplay loop muted > </video> -->
            <iframe src="https://www.youtube.com/embed/WEL7BpwNkNw?autoplay=1&mute=1&loop=1&controls=0" 
                title="Intro" frameborder="0"  style="width:100%; height: 100%; object-fit: contain;"
                allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
            </iframe>
            <div class="btn" @click="$router.push({ path: '/pc/main' });"></div>
        </section>

    </div>
</template>

<style lang='scss'>
.intro.pc{
    background-color: #000;
    width: 100%;
    height: 100%;
    .video-wrapper{
        overflow-y: hidden;
        width: 100%;
        height: 100vh;
        position: relative;
        video{
            margin: - auto -10px;
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
