<template>
    <div class="footer">
        <img :src="require('@/assets/img/mb/grad-bot.png')" class="ft-grad">
        <div class="image">
            <img :src="require('@/assets/img/mb/footer/icon.png')">
        </div>
        <div class="text">
            <p>서울과학기술대학교<br>
                디자인학과 산업디자인전공<br>
                제 40회 졸업전시회
            </p>
            <p>2022.11.21 - 2022.11.27<br>
                100주년기념관 목산갤러리
            </p>
            <img :src="require('@/assets/img/mb/footer/copyright.png')">

        </div>
    </div>
</template>

<style lang='scss' scoped>
.footer{
    background-color: #000;
    @include flex(flex-start);
    width: 100%;
    min-height: 70vw;
    position: relative;
    .ft-grad{
        position: absolute;
        bottom: 70vw;
        left: 0;
        width: 100%;
    }
    >div{
        height: 100%;
        @include flex(center, center, column);
        p{
            font-size: 14px;
            line-height: 131%;
            color: #fff;
        }
        &.image{
            width: 47%;
            align-items: center;
            img{
                margin: -70px 35px 0 0;
            }
        }
    }
}
</style>

<script>
export default {
    name: 'Footer',
    data(){
        return{
        }
    },
    mounted(){
    },
    watch:{
    },
    methods: {

    }
}
</script>
