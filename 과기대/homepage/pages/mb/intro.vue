<template>
    <div class="container intro mb">
        <section class="video-wrapper" @click="$router.push({ path: '/mb/main' });">
            <img :src="require('@/assets/img/mb/intro/bg.png')">

        </section>
        <footer>
            <ul>
                <li>서울과학기술대학교 조형대학</li>
                <li>디자인학과 산업디자인전공</li>
                <li>제 40회 졸업전시</li>
            </ul>
            <ul>
                <li class="en">SEOULTECH DEPT. OF DESIGN</li>
                <li class="en">INDUSTRIAL DESIGN PROGRAM </li>
                <li class="en">40TH GRADUATION EXHIBITION SHOW</li>
            </ul>
        </footer>
        <div class="gradient">
            <img :src="require('@/assets/img/mb/grad-bot.png')" >

        </div>

    </div>
</template>

<style lang='scss'>
.intro.mb{
    width: 100%;
    height: 100%;
    background: #F5FF33;
    overflow: hidden;
    .video-wrapper{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    footer{
        position: absolute;
        bottom: 50px;
        left: 20px;
        ul{
            padding-left: 0;
            li{
                font-size: 16px;
                line-height: 24px;
                font-weight: 800;
                &.en{
                    font-size: 15px;
                    line-height: 26px;
                }
            }
            
            &+ul{
                margin-top: 15px;
            }
        }

    }
    .gradient{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20px;
        background-color: rgb(0, 0, 0);
        img{
            position: absolute;
            width: 100%;
            bottom: 20px;
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
