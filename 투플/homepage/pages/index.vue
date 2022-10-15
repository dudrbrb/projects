<template>
    <div class="container main-page">
        <section id="section1">
            <div class="title item">
                <img :src="require(`@/assets/img/logo-white.webp`)" class="logo">
                <h1>5대 계승맛집 곱창의 맛<br>곱창 고품질 인증점</h1>
            </div>
            <v-carousel cycle hide-delimiter-background delimiter-icon="mdi-minus" height="750">
                <template v-slot:prev="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" :class="'slide-btns'" >
                        <img :src="require(`@/assets/img/main/prev.webp`)" :class="'prev-btn'">
                    </v-btn> 
                </template>
                <template v-slot:next="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" :class="'slide-btns'">
                        <img :src="require(`@/assets/img/main/next.webp`)" :class="'next-btn'">
                    </v-btn>
                </template>
                <v-carousel-item v-for="(n, i) in 5" :key="i">
                    <v-sheet height="100%" tile>
                        <v-row class="fill-height" align="center" justify="center">
                            <div>
                                <img :src="require(`@/assets/img/main/${n}.webp`)" :class="'main-img'">
                            </div>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </section>
        <section id="section2" class="item">
            <h3>
                저가 가격경쟁으로 퀄리티와 맛을 떨어뜨리는 음식이 아닙니다. <br />
                품질경쟁으로 승부하겠습니다!</h3>
            <h3>
                저희 투뿔은 소비자분들이 안심하고 드실 수 있도록<br />
                최상의 품질을 보장하고 고품질 인증을 해드리고 있습니다.<br />
            </h3>
            <v-btn depressed elevation="2" rounded dark class="item" @click="popup=true">HACCP 인증 보러가기</v-btn>
        </section>
        <section id="section3">
            <div>
                <div class="text-box">
                    <p>대중들의 마음을 사로잡는</p>
                    <h2 class="item">5대 계승 곱창</h2>
                    <p>100번 이상의 테스트를 거쳐 <br/>
                        양념배합과 훈연방식을 연구했습니다.
                    </p>
                    <p>적은 잡내와 철저한 위생으로 <br/>
                        안정성을 인정받아<br/>
                        HACCP(품질관리인증)을 통과했습니다.
                    </p>
                </div>
                <div class="img-box item">
                    <div class="left">
                        <img :src="require(`@/assets/img/main/menu1.webp`)">
                        <img :src="require(`@/assets/img/main/menu2.webp`)">
                    </div>
                    <div class="right">
                        <img :src="require(`@/assets/img/main/menu3.webp`)">
                        <img :src="require(`@/assets/img/main/menu4.webp`)">
                    </div>
                </div>
            </div>
        </section>
        <section id="section4">
            <h2>참나무 숯불 초벌로<br/>간단한 조리</h2>
            <div class="list item">
                <div>
                    <img :src="require(`@/assets/img/main/icon1.webp`)">
                    <p>약한 불로<br/>강한 불맛을 냅니다.</p>
                </div>
                <div>
                    <img :src="require(`@/assets/img/main/icon2.webp`)">
                    <p>전자레인지로<br/>조리가 가능합니다.</p>
                </div>
                <div>
                    <img :src="require(`@/assets/img/main/icon3.webp`)">
                    <p>인건비 절감에<br/>도움을 줄 수 있습니다.</p>
                </div>
            </div>
        </section>
        <section id="section5">
            <div>
                <h2>투뿔의 경영방식</h2>

                <p>‘투뿔’은 가격으로 경쟁하지 않습니다.<br/>
                무분별한 가맹점 늘리기 사업은 하지 않습니다.</p>
                
                <p>돈보다 고품질의 제품을 합리적인 가격으로 만들어 드리는 것에 집중하여<br/> 
                사장님께서 안심하고 편하게 일하시도록 함으로, </p>

                <h4 class="item">서로가 상생하는 것 입니다.</h4>

                <span>* 배민로고/레시피/이미지 무료제공</span>
            </div>
        </section>
        <div class="popup-wrapper" v-if="popup">
            <div class="popup">
                <div class="close-popup" @click="popup=false"></div>
                <img :src="require(`@/assets/img/haccp.webp`)">
            </div>
        </div>
    </div>
</template>

<style lang='scss' >
$gray: #f5f5f5;
@mixin center ($justify : center, $align: center, $direction: row){
    display: flex;
    justify-content: $justify;
    align-items: $align;
    flex-direction: $direction;
}
@keyframes show{
    0%{
        opacity: 0;
        transform: translateY(50px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
}
@mixin beforeOp (){
    opacity: 0;
    transform: translateY(50px);
}
@mixin afterOp ($delay : 0s){
    animation: show 0.4s forwards;
    animation-delay: $delay;
}
.main-page{
    section{
        padding: 100px 0;
        *{
            transition: all 0.4s;
        }
    }
    #section1{
        position: relative;
        padding: 0;
        .title{
            position: absolute;
            z-index: 1;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -70%);
            img{
                margin-bottom: 50px;
                @include beforeOp();
            }
            h1{
                font-weight: 100;
                color: #fefefe;
                text-align: center;
                @include beforeOp();
            }
            &.act{
                img{
                    @include afterOp();
                }
                h1{
                    @include afterOp(0.4s);
                }
            }
        }
        .main-img{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .v-window__container{
            .v-window__prev, .v-window__next{
                background: none !important;
                top: calc(50% - 50px);
                .slide-btns{
                    min-height: 60px;   
                    img{
                        height: 60px;
                        &.prev-btn{
                            margin-right: 8px;
                        }
                        &.next-btn{
                            margin-left: 8px;
                        }
                    }
                }
            }
            .v-btn{
                width: 100px;
                height: 100px;
                border-radius:50%;
                padding: 20px;
            }
            .theme--dark.v-btn.v-btn--has-bg{
                background: none;
            }
            .v-btn--is-elevated{
                box-shadow: none;
            }
        }
        .v-carousel__controls{
            margin-bottom: 120px;
            .v-btn{
                margin: 0 30px;
                &.v-item--active{
                    i.v-icon{
                        opacity: 1 !important;
                    }
                }
                &::before{
                    display: none !important;
                }
                i.v-icon{
                    font-size: 100px !important;
                    transform: scaleY(0.3);
                }
                .v-ripple__container{
                    display: none;
                }
            }
    
        }
    }
    #section2{
        h3, button{
            @include beforeOp();
            text-align: center;
            word-break: keep-all;
        }
        h3+h3{
            margin-top: 20px;
        }
        button{
            height: 60px;
            padding: 0 30px;
            left: 50%;
            right: 0;
            margin: 50px 0 0 -130px;
            border-radius: 30px;
            span{
                font-size: 20px;
            }
        }
        &.act{
            h3{
                &:first-child{
                    @include afterOp();
                }
                &:nth-child(2){
                    @include afterOp(0.4s);
                }
            }
            button{
                @include afterOp(0.8s);
            }
        }
    }
    #section3{
        background-color: $gray;
        >div{
            @include center;
            justify-content: space-between;
            max-width: 1200px;
            left: 0;
            right: 0;
            margin: 0 auto;
        }
        .text-box{
            h2{
                font-size: 38px;
                margin-bottom: 20px;
                @include beforeOp();
                &.act{
                    @include afterOp();
                }
                
            }
        }
        
        .img-box{
            @include center;
            .left{
                margin-top: -70px;
                margin-right: 10px;
            }
            .right{
                margin-top: 70px;
            }
            img{
                width: 300px;
                @include center;
                flex-direction: columns;
                @include beforeOp();
                &+img{
                    margin-top: 10px;
                }
            }
            &.act{
                div:first-child{
                    img:nth-child(1){
                        @include afterOp();
                    }
                    img:nth-child(2){
                        @include afterOp(0.6s);
                    }
                }
                div:last-child{
                    img:nth-child(1){
                        @include afterOp(0.3s);
                    }
                    img:nth-child(2){
                        @include afterOp(0.9s);
                    }
                }
            }
        }
    }
    #section4{
        background: url('@/assets/img/main/bg.webp') no-repeat center;
        h2, p{
            color: #fefefe;
            text-align: center;
            font-weight: 100
        }
        h2{
            font-size: 38px;
        }
        .list{
            @include center;
            align-items: flex-end;
            margin-top: 60px;
            >div{
                @include center;
                flex-direction: column;
                img{
                    margin-bottom: 30px;
                    width: 120px;
                    @include beforeOp();
                }
                &+div{
                    margin-left: 150px;
                }
            }
            &.act{
                >div{
                    &:nth-child(1) img{
                        @include afterOp();
                    }
                    &:nth-child(2) img{
                        @include afterOp(0.3s);
                    }
                    &:nth-child(3) img{
                        @include afterOp(0.6s);
                    }
                }
            }
            
        }
    }
    #section5{
        >div{
            max-width: 1200px;
            left: 0;
            right: 0;
            margin: 0 auto;
        }
        h2{
            font-size: 38px;
            border-bottom: 2px solid #333;
            padding-bottom: 15px;
            margin-bottom: 30px;
        }
        h4{
            font-size: 28px;
            display: inline-block;
            background: url('@/assets/img/main/line.png') no-repeat;
            background-size: 0% 15px;
            background-position: left bottom;
            &.act{
                background-size:  100% 15px;
            }
        }
        span{
            display: block;
            font-size: 20px;
            margin-top: 30px;
        }
    }
    .popup{
        img{
            max-height: 90vh;
        }
    }

}
@media screen and (max-width: 1024px) {
.main-page{
    section{
        padding: 100px 30px;
    }
    #section3{
        >div{
            flex-direction: column;
            .text-box{
                margin-bottom: 50px;
                h2, p{
                    text-align: center;
                }
            }
        }
    }
    #section4{
        .list{
            > div{
                justify-content: space-between;
                &+ div{
                    margin-left: auto;
                }
            }
        }
    }
}
}
@media screen and (max-width: 540px) {
.main-page{
    section{
        padding: 100px 10px;
        h2{
            font-size: 32px !important;
        }
        h4{
            font-size: 24px !important;
        }
        span{
            font-size: 18px !important;
        }
    }
    #section1{
        .title{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            img{
                width: 150px;
                margin-bottom: 40px;
            }
            h1{
                font-size: 22px;
            }
        }
        .v-window__container{
            .v-btn{
                width: 50px;
                padding: 10px;
            }
        }
        .v-carousel__controls{
            margin-bottom: 120px;
            .v-btn{
                margin: 0 20px;
                i.v-icon{
                    font-size: 80px !important;
                }
            }
    
        }

    }
    #section2{
        h3{
            font-size: 22px;
        }
    }   
    #section3{
        >div{
            .text-box{
                margin-bottom: 30px;
            }
            .img-box{
                width: 100%;
                >div{
                    width: 50%;
                    margin: 0;
                    img{
                        width: 100%;
                    }
                    &.left{
                        margin-right: 3px;
                    }
                    &.right{
                        margin-left: 3px;
                    }
                }
            }
        }
    }
    #section4{
        .list{
            justify-content: space-between;
            margin-top: 30px;
            div{
                img{
                    width: 65%;
                }
                p{
                    word-break: keep-all;
                }
            }
        }
    }
}
}
</style>

<script>
export default {
    name: 'MainPage',
    data(){
        return{
            popup: false
        }
    },
    mounted(){
        setTimeout(() => {
            this.addMotion();
        }, 300);
        window.addEventListener('scroll', this.addMotion);
    },
    methods:{
        addMotion(){
             const io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    // entry의 target으로 DOM에 접근합니다.
                    const $target = entry.target;

                    // 화면에 노출 상태에 따라 해당 엘리먼트의 class를 컨트롤 합니다.
                    if (entry.isIntersecting) {
                        $target.classList.add("act");
                    }
                });
            });
            const $items = this.$el.querySelectorAll(".item");
            $items.forEach((item) => {
                io.observe(item);
            });

        },
    }
}
</script>
