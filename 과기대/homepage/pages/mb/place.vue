<template>
    <div class="container place mb">
        <section id="slide">
            <div class="information" v-if="nowSpot == null">
                <img :src="require('@/assets/img/mb/place/info.svg')">
            </div>
            <div class="img-wrapper" v-if="nowSpot !== null">
                <v-carousel cycle hide-delimiter-background delimiter-icon="mdi-round" height="280">
                    <v-carousel-item v-for="(n, i) in 3" :key="i">
                        <v-sheet height="280px" tile>
                            <v-row class="fill-height" align="center" justify="center">
                                <div class="img-box">
                                    <img :src="require(`@/assets/img/pc/place/${nowPlace}/${nowSpot}-${n}.jpg`)" :class="'main-img'">
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </div>
        </section>
        <section id="category">
            <!-- <b v-if="nowSpot !== null">{{spotName}} <span class="bold">{{spotEngName}} </span></b> -->
            <ul>
                <li @click="nowPlace = 3; nowSpot = 1;" :class="['horiz', {act: nowPlace == 3}]">3F</li>
                <li @click="nowPlace = 2; nowSpot = 1;" :class="['horiz', {act: nowPlace == 2}]">2F</li>
                <li @click="nowPlace = 1; nowSpot = 1;" :class="['horiz', {act: nowPlace == 1}]">1F</li>
            </ul>
        </section>
        <section id="place">
            <div class="map-wrapper map3" v-if="nowPlace == 3">
                <img :src="require('@/assets/img/pc/place/map/3.svg')">
                <div :class="['spot', 'spot1', {act:( nowPlace== 3 && nowSpot ==1 )}]" @mouseover="nowSpot=1"></div>
                <div :class="['spot', 'spot2', {act:( nowPlace== 3 && nowSpot ==2 )}]" @mouseover="nowSpot=2"></div>
                <div :class="['spot', 'spot3', {act:( nowPlace== 3 && nowSpot ==3 )}]" @mouseover="nowSpot=3"></div>
                <div :class="['spot', 'spot4', {act:( nowPlace== 3 && nowSpot ==4 )}]" @mouseover="nowSpot=4"></div>
                <div :class="['spot', 'spot5', {act:( nowPlace== 3 && nowSpot ==5 )}]" @mouseover="nowSpot=5"></div>
            </div>
            <div class="map-wrapper map2" v-if="nowPlace == 2">
                <img :src="require('@/assets/img/pc/place/map/2.svg')">
                <div :class="['spot', 'spot1', {act:( nowPlace== 2 && nowSpot ==1 )}]" @mouseover="nowSpot=1"></div>
                <div :class="['spot', 'spot2', {act:( nowPlace== 2 && nowSpot ==2 )}]" @mouseover="nowSpot=2"></div>
            </div>
            <div class="map-wrapper map1" v-if="nowPlace == 1">
                <img :src="require('@/assets/img/pc/place/map/1.svg')">
                <div :class="['spot', 'spot1', {act:( nowPlace== 1 && nowSpot ==1 )}]" @mouseover="nowSpot=1"></div>
                <div :class="['spot', 'spot2', {act:( nowPlace== 1 && nowSpot ==2 )}]" @mouseover="nowSpot=2"></div>
            </div>
        </section>
    </div>
</template>

<style lang='scss'>
.place.mb{
    width: 100%;
    height: 100%;
    #slide{
        .information{
            width: 100%;
            height: 280px;
            display: block;
            background-color: #000;
            @include flex(center, center, column);
            img{
                width: 46%;
            }
        }
        .img-wrapper{
            width: 100vw;
            height: 280px;
            @include flex(space-between, flex-start);
            flex-wrap: wrap;
            overflow: hidden;
            position: relative;
     
            .img-box{
                img{
                    width: 100vw;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .v-window__next,
            .v-window__prev{
                display: none !important;
            }
            .v-carousel__controls{
                justify-content: flex-end;
                position: absolute;
                top: 0;

                .v-item-group{
                    margin-right: 15px;
                    button{
                        margin: 0;
                        width: 20px;
                        &.v-item--active{
                            span{
                                i.v-icon{
                                    background: #F5FF33;
                                    opacity: 1;
                                }
                            }
                        }
                        &::before{
                            display: none;
                        }
                        span{
                            padding: 0 5px;
                            i.v-icon{
                                border-radius: 50%;
                                width: 10px;
                                height: 10px;
                                background: #000000;
                                opacity: 0.2;
                            }
                        }
                    }
                }
            }
        }
    }
   #category{
        width: 100%;
        height: 50px;
        @include flex(flex-end);
        padding: 0 15px;
        b{
            font-size: 16px;
            line-height: 50px;
            height: 50px;
            display: block;
            text-shadow:0px 0px 0.5px #000;
            span{
                font-size: 16px;
                line-height: 140%;
                margin-left: 20px
            }
        } 
        ul{
            @include flex();
            margin-left: auto;
            li{
                opacity: 0.4;
                cursor: pointer;
                font-size: 20px;
                line-height: 24px;     
                &.act{
                    opacity: 1;
                }
                &+li{
                    margin-left: 35px;
                }
            }
        }
    }
    #place{
        .map-wrapper{
            width: 100%;
            max-width: 850px;
            height: 450px;
            padding: 30px;
            position: relative;
            @include flex();
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
                margin-bottom: 50px;
            }
            .spot{
                width: 38px;
                height: 38px;
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
                    transform:translate(113px, 202px)
                }
                .spot2{
                    transform: translate(264px, 177px)
                }
            }
            &.map2{
                .spot1{
                    transform: translate(200px, 260px)
                }
                .spot2{
                    transform: translate(298px, 95px)
                }
            }
            &.map3{
                img{
                    transform: scale(1.075);
                }
                .spot1{
                    transform: translate(78px, 317px)
                }
                .spot2{
                    transform: translate(50px, 150px)
                }
                .spot3{
                    transform: translate(140px, 192px)
                }
                .spot4{
                    transform: translate(260px, 250px)
                }
                .spot5{
                    transform: translate(245px, 95px)
                }
            }
        }
    }
}
</style>

<script>
export default {
    name: 'place',
    layout: 'mobile',
    data(){
        return{
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

    methods:{
        changeSpotName(){
            if(this.nowPlace == 1){
                if(this.nowSpot == 1){
                     this.spotName = '??????'; this.spotEngName = 'FURNITURE'
                } else if(this.nowSpot == 2){
                     this.spotName = '???????????????'; this.spotEngName = 'PORTFOLIO'
                }
            }
            else if(this.nowPlace == 2){
                if(this.nowSpot == 1){
                     this.spotName = '??????'; this.spotEngName = 'SPACE'
                } else if(this.nowSpot == 2){
                     this.spotName = '??????'; this.spotEngName = 'FURNITURE'
                }
            }
            else if(this.nowPlace == 3){
                if(this.nowSpot == 1){
                     this.spotName = '????????? ??????'; this.spotEngName = 'ENTERANCE'
                } else if(this.nowSpot == 2){
                     this.spotName = '?????? UX'; this.spotEngName = 'PRODUCT UX'
                } else if(this.nowSpot == 3){
                     this.spotName = '??????'; this.spotEngName = 'SPACE'
                } else if(this.nowSpot == 4){
                     this.spotName = '??????'; this.spotEngName = 'PRODUCT'
                } else if(this.nowSpot == 5){
                     this.spotName = '??????'; this.spotEngName = 'PRODUCT'
                }
            }
        }
    }
}
</script>
