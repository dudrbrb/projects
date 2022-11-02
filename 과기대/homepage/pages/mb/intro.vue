<template>
    <div class="container intro mb">
        <section class="video-wrapper" @click="$router.push({ path: '/mb/main' });">
            <!-- <video  :src="require('@/assets/img/pc/pc.mp4')" autoplay loop type="video/mp4"> 이상있음</video> -->
 
            <video src="@/assets/img/mb/mb.mp4" type="video/mp4" ref="video" autoplay loop muted >
            </video>
        </section>


    </div>
</template>

<style lang='scss'>
.intro.mb{
    .video-wrapper{
        position: relative;
        video{
            position: relative;
            width: 100%;
            height: 100%;
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
