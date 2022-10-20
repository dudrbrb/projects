<template>
    <div class="container place">
        <section id="category">
            <b v-if="nowSpot !== null">{{spotName}} <span class="bold">{{spotEngName}} </span></b>
            <ul>
                <li @click="nowPlace = 3; nowSpot = 1;" :class="['horiz', {act: nowPlace == 3}]">3F</li>
                <li @click="nowPlace = 2; nowSpot = 1;" :class="['horiz', {act: nowPlace == 2}]">2F</li>
                <li @click="nowPlace = 1; nowSpot = 1;" :class="['horiz', {act: nowPlace == 1}]">1F</li>
            </ul>
        </section>
        <section id="place">
            <div class="img-wrapper">
                <div class="information" v-if="nowSpot == null">
                    <img :src="require('@/assets/img/pc/place/pointer.png')">
                    <p class="bold">HOVER THE CIRCLE</p>
                    <p>전시장의 현장 이미지를 확인해보세요</p>
                </div>
                <div class="img-box img1" v-if="nowSpot !== null">
                    <img :src="require(`@/assets/img/pc/place/${nowPlace}/${nowSpot}-1.jpg`)" alt="">
                </div>
                <div class="img-box img2" v-if="nowSpot !== null">
                    <img :src="require(`@/assets/img/pc/place/${nowPlace}/${nowSpot}-2.jpg`)" alt="">
                </div>
                <div class="img-box img3" v-if="nowSpot !== null">
                    <img :src="require(`@/assets/img/pc/place/${nowPlace}/${nowSpot}-3.jpg`)" alt="">
                </div>
            </div>
            <div class="map-wrapper map3" v-if="nowPlace == 3">
                <img :src="require('@/assets/img/pc/place/map/3.png')">
                <div :class="['spot', 'spot1', {act:( nowPlace== 3 && nowSpot ==1 )}]" @mouseover="nowSpot=1"></div>
                <div :class="['spot', 'spot2', {act:( nowPlace== 3 && nowSpot ==2 )}]" @mouseover="nowSpot=2"></div>
                <div :class="['spot', 'spot3', {act:( nowPlace== 3 && nowSpot ==3 )}]" @mouseover="nowSpot=3"></div>
                <div :class="['spot', 'spot4', {act:( nowPlace== 3 && nowSpot ==4 )}]" @mouseover="nowSpot=4"></div>
                <div :class="['spot', 'spot5', {act:( nowPlace== 3 && nowSpot ==5 )}]" @mouseover="nowSpot=5"></div>
            </div>
            <div class="map-wrapper map2" v-if="nowPlace == 2">
                <img :src="require('@/assets/img/pc/place/map/2.png')">
                <div :class="['spot', 'spot1', {act:( nowPlace== 2 && nowSpot ==1 )}]" @mouseover="nowSpot=1"></div>
                <div :class="['spot', 'spot2', {act:( nowPlace== 2 && nowSpot ==2 )}]" @mouseover="nowSpot=2"></div>
            </div>
            <div class="map-wrapper map1" v-if="nowPlace == 1">
                <img :src="require('@/assets/img/pc/place/map/1.png')">
                <div :class="['spot', 'spot1', {act:( nowPlace== 1 && nowSpot ==1 )}]" @mouseover="nowSpot=1"></div>
                <div :class="['spot', 'spot2', {act:( nowPlace== 1 && nowSpot ==2 )}]" @mouseover="nowSpot=2"></div>
            </div>
        </section>
        <footer>
            <img :src="require('@/assets/img/pc/copyright.png')">
        </footer>
    </div>
</template>

<style lang='scss'>
.place{
    background-color: #fefefe;
    #category{
        width: 100%;
        height: 120px;
        @include flex(space-between);
        padding: 20px 90px 0;
        b, b span{
            font-size: 24px;
            line-height: 140%;
        }
        b span{
            margin-left: 30px
        }
        ul{
            @include flex();
            margin-left: auto;
            li{
                opacity: 0.4;
                cursor: pointer;
                font-size: 24px;
                line-height: 29px;          
                &.act{
                    opacity: 1;
                }
                &+li{
                    margin-left: 80px;
                }
            }
        }
    }
    #place{
        padding: 20px 90px;
        height: 700px;
        @include flex(space-between);
        .img-wrapper{
            width: 48%;
            max-width: 850px;
            height: 100%;
            @include flex(space-between);
            flex-wrap: wrap;
            .information{
                width: 100%;
                height: 100%;
                display: block;
                background-color: #000;
                @include flex(center, center, column);
                p{
                    color: #F5FF33;
                    &.bold{
                        font-weight: 700;
                        font-size: 25px;
                        line-height: 30px;
                    }
                }
            }
            .img1{
                width: 100%;
                height: 440px;
                background-color: #D9D9D9;
                margin-bottom: 30px;
            }
            .img2, .img3{
                width: 48%;
                height: 210px;
                background-color: #D9D9D9;
            }
            .img-box{
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        .map-wrapper{
            width: 49%;
            max-width: 850px;
            height: 100%;
            position: relative;
            @include flex();
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
            .spot{
                width: 140px;
                height: 140px;
                opacity: 0.8;
                border-radius: 50%;
                background-color: #D9D9D9;
                position: absolute;
                left: 0;
                top: 0;
                &:hover,
                &.act{
                    background-color: #F5FF33;
                }
            }
            &.map1{
              
                .spot1{
                    transform: translate(322px, 265px);
                }
                .spot2{
                    transform: translate(552px, 265px);
                }
            }
            &.map2{
                .spot1{
                    transform: translate(492px, 103px);
                }
                .spot2{
                    transform: translate(670px, 341px);
                }
            }
            &.map3{
                img{
                    transform: scale(1.075);
                }
                .spot1{
                    transform: translate(150px, 530px);
                }
                .spot2{
                    transform: translate(92px, 243px);
                }
                .spot3{
                    transform: translate(210px, 5px);
                }
                .spot4{
                    transform: translate(443px, 190px);
                }
                .spot5{
                    transform: translate(612px, 422px);
                }
            }
        }
    }
    footer{
        margin-top: 100px;
        padding-bottom: 40px;
        @include flex();
    }
}
</style>

<script>
export default {
    name: 'place',
    data(){
        return {
            nowPlace: 3,
            nowSpot: null,
            spotName: null,
            spotEngName: null
        }
    },
    mounted(){

    },
    watch:{
        nowPlace:{
            handler(e){
               this.changeSpotName()
            }
        },
        nowSpot:{
            handler(e){
               this.changeSpotName()
            }
        }
    },
    
    filters:{
    },
    methods:{
        changeSpotName(){
            if(this.nowPlace == 1){
                if(this.nowSpot == 1){
                     this.spotName = '가구'; this.spotEngName = 'FURNITURE'
                } else if(this.nowSpot == 2){
                     this.spotName = '포트폴리오'; this.spotEngName = 'PORTFOLIO'
                }
            }
            else if(this.nowPlace == 2){
                if(this.nowSpot == 1){
                     this.spotName = '공간'; this.spotEngName = 'SPACE'
                } else if(this.nowSpot == 2){
                     this.spotName = '가구'; this.spotEngName = 'FURNITURE'
                }
            }
            else if(this.nowPlace == 3){
                if(this.nowSpot == 1){
                     this.spotName = '전시장 입구'; this.spotEngName = 'ENTERANCE'
                } else if(this.nowSpot == 2){
                     this.spotName = '제품 UX'; this.spotEngName = 'PRODUCT UX'
                } else if(this.nowSpot == 3){
                     this.spotName = '공간'; this.spotEngName = 'SPACE'
                } else if(this.nowSpot == 4){
                     this.spotName = '제품'; this.spotEngName = 'PRODUCT'
                } else if(this.nowSpot == 5){
                     this.spotName = '제품'; this.spotEngName = 'PRODUCT'
                }
            }
        }
    }
}
</script>
