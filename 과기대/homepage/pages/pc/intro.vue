<template>
    <div class="container intro pc">
        <section class="video-wrapper">

            <div class="gradient"></div>
        </section>
        <footer>
            <div><img :src="require('@/assets/img/pc/intro/logo.png')"></div>
            <div>
                <ul>
                    <li>서울과학기술대학교 조형대학</li>
                    <li>디자인학과 산업디자인전공</li>
                    <li>제 40회 졸업전시</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li class="en">SEOULTECH DEPT. OF DESIGN</li>
                    <li class="en">INDUSTRIAL DESIGN PROGRAM </li>
                    <li class="en">40TH GRADUATION EXHIBITION SHOW</li>
                </ul>
            </div>
            <div>
                <nuxt-link :to="'/pc/main'">
                    <img :src="require('@/assets/img/pc/intro/open.png')">
                </nuxt-link>
            </div>

        </footer>
    </div>
</template>

<style lang='scss'>
.intro.pc{
    width: 100%;
    height: 100%;
    background: #F5FF33;
    overflow: hidden;
    .video-wrapper{
        width: 100%;
        height: calc(100% - 120px);
        .gradient{
            background: url('@/assets/img/pc/intro/gradient.png') no-repeat top;
            background-size: 100% 100%;
            z-index: 1;
            width: 100%;
            height: 100%;
        }
    }
    footer{
        width: 100%;
        height: 120px;
        background-color: #000;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        ul{
            margin-left: 100px;
            li{
                color: #fff;
            }
        }
        div:first-child{
            margin-left: 25px;
        }
        div:last-child{
            margin-left: auto;
            margin-right: 30px;
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
    mounted(){

    },
    methods:{
    }
}
</script>
