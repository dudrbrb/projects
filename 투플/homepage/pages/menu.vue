<template>
    <div class="container menu-page">
        <section id="section1">
            <h1>메뉴안내</h1>
        </section>
        <section id="section2" class="pc">
            <ul>
                <li :class="{act:(category == 'beefTripe')}" @click="changeCate('beefTripe')">소 곱창</li>
                <li :class="{act:(category == 'porkTripe')}" @click="changeCate('porkTripe')">돼지 곱창</li>
                <li :class="{act:(category == 'porkEntrails')}" @click="changeCate('porkEntrails')">돼지 막창</li>
                <li :class="{act:(category == 'riceSoup')}" @click="changeCate('riceSoup')">돼지 국밥</li>
            </ul>
        </section>
        <section id="section2" class="mb">
            <div class="tab-title" @click="tab = !tab" :class="{open: tab}">
                {{category | cateFilter}} 
                <span></span>
            </div>
            <ul v-if="tab">
                <li :class="{act:(category == 'beefTripe')}" @click="changeCate('beefTripe')">소 곱창</li>
                <li :class="{act:(category == 'porkTripe')}" @click="changeCate('porkTripe')">돼지 곱창</li>
                <li :class="{act:(category == 'porkEntrails')}" @click="changeCate('porkEntrails')">돼지 막창</li>
                <li :class="{act:(category == 'riceSoup')}" @click="changeCate('riceSoup')">돼지 국밥</li>
            </ul>
        </section>
        <section id="section3">
            <div class="category-title">
                <h2>
                    {{category | cateFilter}}
                </h2>
            </div>
            <div class="large">
                <div class="prev btn" @click="prevSlide" v-if="showImg !== 0">
                    <img :src="require(`@/assets/img/menu/prev.webp`)" alt="">
                </div>
                <img :src="require(`@/assets/img/menu/${category}/${showImg}.webp`)" alt="">
                <div class="next btn" @click="nextSlide" v-if="showImg !== imgNum[category]">
                    <img :src="require(`@/assets/img/menu/next.webp`)" alt="">
                </div>
            </div>
            <div class="thumb-wrapper">
                <div class="thumbs" :class="{move:(showImg >= 5)}" >
                    <div v-for="n in imgNum[category]" :key="n" :class="['thumb', {act: (showImg == n)}]" @click="showImg = n" >
                        <img :src="require(`@/assets/img/menu/${category}/${n}.webp`)" />
                    </div>
                </div>
            </div>
        </section>
        <section id="section4" v-if="category == 'riceSoup'">
            <div class="recipe">
                <h3>명품 국밥의 비결</h3>
                <div class="compare-box">
                    <div class="normal">
                        <b>일반 국밥 고기</b>
                        <ul>
                            <li>순수 머릿고기10% + 비속고기 90%
                                <span>*비속고기 = 혓바닥, 귓대기 등</span>
                            </li>
                            <li>
                                비계가 많고 살코기가 없어서 <br/>
                                부드러운 식감이 없음        
                            </li>
                        </ul>
                    </div>
                    <div class="our">
                        <b>투쁠 국밥 고기</b>
                        <ul>
                            <li>순수 머릿고기10% + 비속고기 90%<br/>
                                <span>*비속고기 = 혓바닥, 귓대기 등</span>
                            </li>
                            <li>비계 분리 작업이 되어있어<br/>
                                쫄깃함과 부드러움이 공존하는 식감
                            </li>
                            <li>
                                모두 완제품으로 손질한 후 드려<br/>
                                조리시간이 짧고 방법이 간편합니다
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="recipe">
                <h3>맛있는 육수의 비밀</h3>
                <div class="compare-box">
                    <div class="normal">
                        <b>일반 육수</b>
                        <ul>
                            <li>물(액상)이기 때문에 점도가 연하다<br/>(육수 맛이 연하다)</li>
                            <li>무겁고 부피가 커서 보관하기 불편하다</li>
                            <li>냉장보관이라 유통기한이 짧다</li>
                        </ul>
                    </div>
                    <div class="our">
                        <b>투쁠 육수</b>
                        <ul>
                            <li>물(액상)이기 때문에 점도가 연하다<br/>(육수 맛이 연하다)</li>
                            <li>무겁고 부피가 커서 보관하기 불편하다</li>
                            <li>냉장보관이라 유통기한이 짧다</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section id="section4" v-else>
            <article>
                <div class="left">
                    <h3>믿을 수 있습니다.</h3>
                </div>
                <div class="right">
                    <p>
                        참나무 훈연을 담아 잡내없고 불맛나는 돼지 곱창 ! <br/>
                        5대째 내려오는 돼지곱창 맛집의 비결로 최고 품질과 맛으로 승부합니다 !
                    </p>
                    <p>
                        저가 가격경쟁으로 퀄리티와 맛을 떨어뜨리는 음식이 아닙니다.  <br/>
                        품질경쟁으로 승부하겠습니다!
                    </p>
                    <p>
                        저희 투뿔은 소비자분들이 안심하고 드실 수 있도록 <br/>
                        최상의 품질을 보장하고 고품질 인증을 해드리고 있습니다.
                    </p>
                    <v-btn depressed elevation="2" rounded dark class="item" @click="popup=true">HACCP 인증 보러가기</v-btn>
                </div>
            </article>
            <article>
                <div class="left">
                    <h3>조리가 쉽습니다.</h3>
                </div>
                <div class="right">
                    <div class="list item">
                        <div>
                            <img :src="require(`@/assets/img/menu/icon1.webp`)">
                            <p>약한 불로<br/>강한 불맛을 냅니다.</p>
                        </div>
                        <div>
                            <img :src="require(`@/assets/img/menu/icon2.webp`)">
                            <p>전자레인지로<br/>조리가 가능합니다.</p>
                        </div>
                        <div>
                            <img :src="require(`@/assets/img/menu/icon3.webp`)">
                            <p>인건비 절감에<br/>도움을 줄 수 있습니다.</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section id="section5">
            <h2>투뿔의 경영방식</h2>

            <p>‘투뿔’은 가격으로 경쟁하지 않습니다. <br/>
                무분별한 가맹점 늘리기 사업은 하지않습니다.
            </p>
            <p>돈보다 고품질의 제품을 합리적인 가격으로 만들어 드리는 것에 집중하여 
                장님께서 안심하고 편하게 일하시도록 함으로,  
            </p>

            <h4 class="item">서로가 상생하는 것 입니다.</h4>

            <span>* 배민로고/레시피/이미지 무료제공</span>
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
.menu-page{
    .mb{
        display: none;
    }
    section{
        padding: 100px 0;
        *{
            transition: all 0.4s;
        }
        >div{
            max-width: 1200px;
            left: 0;
            right: 0;
            margin: 0 auto;
        }
    }
    .popup{
        img{
            max-height: 90vh;
        }
    }
    #section1{
        width: 100%;
        height: 500px;
        background: url('@/assets/img/menu/bg.webp') no-repeat center;
        @include center;
        h1{
            color: #fefefe;
            font-size: 40px;
            font-weight: 100;
            text-align: center;
        }
    }
    #section2{
        padding: 20px 0;
        border-bottom: 1px solid #e8e8e8;

        ul{
            @include center;
            li{
                padding: 0 50px;
                position: relative;
                cursor: pointer;
                &.act{
                    color: #cb905d;
                }
                &+li{
                    &::before{
                        content: '';
                        width: 8px;
                        height: 8px;
                        background-color: #cb905d;
                        border-radius: 50%;
                        position: absolute;
                        top: 12px;
                        left: -4px;
                    }
                }
            }
        }
        &.mb{
            border-bottom: 0;
            .tab-title{
                text-align: center;
                border-bottom: 1px solid #e8e8e8;
                padding-bottom: 20px;
                position: relative;
                span{
                    position: absolute;
                    right: 20px;
                    width: 30px;
                    height: 30px;
                    background: url('@/assets/img/menu/down.webp') no-repeat center;
                    background-size: 20px;
                }
                &.open{
                    span{
                        transform: rotate(180deg);
                    }    
                }
            }
            ul{
                flex-direction: column;
                padding-left: 0;
                background-color: #f4f1eed9;
                li{
                    width: 100%;
                    text-align: center;
                    border-bottom: 1px solid #e8e8e8d6;
                    padding: 15px 0;
                    &:before{
                        display: none;
                    }
                }
            }
        }
    }
    #section3{
        .category-title{
            margin-bottom: 50px;
            border-bottom: 2px solid #333;
            max-width: 1200px;
            width: 100%;
            h2{
                font-size: 34px;
                margin-bottom: 10px;
            }
        }
        .large{
            max-width: 1200px;
            height: 720px;
            width: 100%;
            position: relative;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
            }
            .btn{
                position: absolute;
                top: 50%;
                cursor: pointer;
                &.prev{
                    left: 20px;
                }
                &.next{
                    right: 20px;
                }
                img{
                    width: 30px;
                }
            }
        }
        .thumb-wrapper{
            max-width: 1200px;
            width: 100%;
            overflow: hidden;
            .thumbs{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
                margin-top: 25px;
                -ms-overflow-style: none;
                &::-webkit-scrollbar{
                   opacity: 0;
                }
                &.move{
                    transform: translateX(-1200px);
                }
                .thumb{
                    min-width: calc(1200px / 4);
                    width: calc(1200px / 4);
                    height: 190px;
                    filter: brightness(0.6);
                    &+.thumb{
                        padding-left: 16px;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 5px;
                    }
                    &.act{
                        filter: brightness(1);
                    }
                    
                }
            }
        }
    }
    #section4{
        .recipe{
            text-align: center;
            &+.recipe{
                margin-top: 100px;
            }
            h3{
                font-size: 34px;
            }
            .compare-box{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 50px;
                width: 100%;
                div{
                    max-width: 400px;
                    width: 50%;
                    ul{
                        width: 100%;
                        height: 350px;
                        margin-top: 30px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        padding-left: 0;
                        li{
                            &+li{
                                margin-top: 20px;
                            }
                            span{
                                display: block;
                                font-size: 18px;
                            }
                        }
                    }
                    &.normal{
                        ul{
                            background-color: #efefef;
                        }
                    }
                    &.our{
                        b{
                            color: #cb905d;
                        }
                        ul{
                            background-color: #cb905d;
                            li, span{
                                color: #fefefe;
                            }
                        }
                    }
                }
            }
        }
        article{
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1200px;
            left: 0;
            right: 0;
            margin: 0 auto;
            &+article{
                margin-top: 70px;
            }
            .left{
                padding-right: 80px;
            }
            .right{
                border-left: 1px solid #333;
                padding-left: 80px;
                p{
                    word-break: keep-all;
                }
                button{
                    height: 60px;
                    padding: 0 30px;
                    border-radius: 30px;
                    margin-top: 40px;
                    span{
                        font-size: 20px;
                    }
                }
                .list{
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    div{
                        text-align: center;
                        &+div{
                            margin-left: 50px;
                        }
                    }
                }
            }
        }
    }
    #section5{
        max-width: 1200px;
        left: 0;
        right: 0;
        margin: 0 auto;
    
        h2{
            font-size: 34px;
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

}
@media screen and (max-width: 1024px){
.menu-page{
    section{
        padding: 50px 30px;
    }
    #section3{
        .large{
            margin: 0;
            width: 100%;
            height: 480px;
        }
        .thumb-wrapper{
            .thumbs{
                &.move{
                    transform: translateX(-708px);
                }
                .thumb{
                    min-width: calc(708px / 4);
                    width: calc(708px / 4);
                    height: 110px;
                    
                }
            }
        }
    }
    #section4{
        article{
            width: 100%;
            overflow: hidden;
            flex-direction: column;
            .left{
                width: 100%;
                border-bottom: 2px solid #333;
                padding-bottom: 20px;
                padding-right: 0;
            }
            .right{
                padding-top: 20px;
                border-left: 0;
                padding-left: 0;
                width: 100%;
                button{
                    margin-top: 20px;
                }
                .list{
                    justify-content: space-between;
                    width: 100%;
                    div{
                        img{
                            width: 70%;
                        }
                        &+div{
                            margin-left: auto;
                        }
                    }
                }
            }
        }
    }
}
}
@media screen and (max-width: 540px) {
.menu-page{
    .pc{
        display: none;
    }
    .mb{
        display: block;
    }
    section{
        padding: 50px 10px;
    }
    #section1{
        height: 350px;
        background-size: cover;
    }
    #section3{
        .large{
            margin: 0;
            width: 100%;
            height: 215px;
            .btn{
                img{
                    height: 20px;
                }
            }
        }
        .thumb-wrapper{
            .thumbs{
                martop
                &.move{
                    transform: translateX(-300px );
                }
                .thumb{
                    min-width: calc(355px / 4);
                    width: calc(355px / 4);
                    height: 50px;
                    &+ .thumb{
                        padding-left: 5px;
                    }
                    
                }
            }
        }
    }
    #section4{
        .recipe {
            .compare-box{
                flex-direction: column;
                >div{
                    width: 100%;
                    &+div{
                        margin-top: 40px;
                    }
                    ul{
                        height: auto;
                        padding: 30px 0;
                        margin-top: 20px;
                    }
                }
            }
        }
    }
    #section5{
        h4{
            font-size: 24px;
        }
    }
}

}
</style>

<script>
export default {
    name: 'MenuPage',
    data(){
        return{
            model: null,
            multiple: false,
            mandatory: false,
            showArrows: true,
            prevIcon: false,
            nextIcon: false,
            centerActive: false,
            
            category: 'beefTripe',
            showImg: 1,
            imgNum: {
                beefTripe : 4,
                porkTripe : 8,
                porkEntrails: 8,
                riceSoup: 5
            },
            popup: false,
            tab: false
        }
    },
    mounted(){
        this.getParams();
        window.addEventListener('scroll', this.addMotion);
    },
    watch:{
		'$route' (to, from) {
            this.getParams();
		}
    },
    filters:{
        cateFilter(c){
            if(c == 'beefTripe') return c = '소 곱창'
            if(c == 'porkTripe') return c = '돼지 곱창'
            if(c == 'porkEntrails') return c = '돼지 막창'
            if(c == 'riceSoup') return c = '돼지 국밥'
        }
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
        changeCate(cate){
            this.category = cate;
            this.showImg = 1;
            this.tab = false;

            this.$router.push({ path: '/menu?category='+ cate })
        },
        prevSlide(){
            if(this.showImg == 1) return
            else this.showImg--
        },
        nextSlide(){
            var cate = this.category;
            if(this.showImg == this.imgNum[cate]) return
            else this.showImg++
        },
        getParams(){
            this.category = this.$route.query.category
        }
    }
}
</script>
