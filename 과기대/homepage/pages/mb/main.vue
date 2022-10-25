<template>
    <div class="container main mb">
        <section id="introduction">
            <div class="menu">
                <p :class='["horiz", {open: menu.introduction}]' @click="menu.introduction = !menu.introduction">INTRODUCTION <span class="arrow"></span></p>
            </div>
            <div :class="['contents', {open: menu.introduction}]">
                <img :src="require('@/assets/img/mb/main/nh.png')">

                <p>
                    디자인의 세계는 개인의 창의력과 우리가 살고있는 세계에 대한 이해를 바탕으로 수 많은 완성과 미완성들이 탄생하고 소멸한다. 
                    이러한 탄생과 소멸은 무수한 가능성 안에서 디자이너의 심도 깊은 탐색, 그리고 그것들을 종합적으로 정리하는 과정으로부터 발생한다. 
                    우리는 지난 4년간의 여정 중 다양한 가능성 속에서 자신만의 행성을 탐색해왔다. 
                </p>
                <p>
                    본 전시는 현재까지의 탐색과 그 결과에 대한 기록이며 동시에 새로운 출발을 위한 도약점이다. 
                    지금 우리는 앞으로의 새로운 출발을 준비하기 위해 한 자리에 모였다. 
                    7일간의 전시를 마친 후 우리는 미지의 영역으로 나아가 더 넓고 다양한 세계를 경험하게 될 것이다. 
                </p>
                <p>
                    서울과학기술대학교 산업디자인학과 제 40회 졸업전시  &lt;New Horizons&gt;는 
                    새로운 지평을 열어줄 53명의 전시자들과 각각의 여정이 생생히 담긴 전시이다. 
                    정해진 과정을 함께 밟아왔지만 53개의 각기 다른 열정과 개성으로 여정을 마무리하였다. 
                </p>
                <p>
                    우리의 다음 행선지는 어디일까?
                </p>

                <span>
                    뉴 호라이즌스호(New horizons)는 NASA가 쏘아올린 첫 번째 명왕성 무인 탐사선이다. 
                    뉴 호라이즌스호는 시작부터 여러 난항을 겪었지만 힘차게 새로운 지평을 향한 여정을 시작했다. 
                    2021년 4월 30일을 기점으로 계획된 탐사가 종료되었으며, 이제는 태양계를 벗어나 미지의 우주로 나아갈 예정이다.
                    뉴 호라이즌스의 두 번째 확장 임무의 핵심은 기존의 우주를 벗어난 미지의 것에 대한 광범한 분야에 걸친 다양한 관찰이다.
                </span>
            </div>
           
        </section>
        <section id="promotion">
            <div class="menu">
                <p :class='["horiz", {open: menu.promotion}]' @click="menu.promotion = !menu.promotion">PROMOTION VIDEO <span class="arrow"></span></p>
            </div>
            <div :class="['contents', {open: menu.promotion}]">
                <div class="video"></div>
            </div>

        </section>
        <section id="tracks">
            <div class="menu">
                <p :class='["horiz", {open: menu.tracks}]' @click="menu.tracks = !menu.tracks">TRACKS <span class="arrow"></span></p>
            </div>
            <div :class="['contents', {open: menu.tracks}]">
                <div class="track-box">
                    <b class="horiz">TRACK A <span class="horiz">(PRODUCT</span></b>
                    <p>제품, 생산물, 상품의 외관을 구성하는 모양·형상·색채·장식·양식 등의 심미성 이외에도 개성, 기능성 등 다양한 요소를 소비자의 미적 감각이나 욕구에 부응하게 결합하여 구매선호를 일으키게 하는 것이다. 사용자에게 특별한 경험을 제안하기도 하며 사용자 경험을 더욱 훌륭하게 만들어 우리의 삶을 편리하고 윤택하게 만들기도 한다. 이는 사회적 트렌드를 반영하고 보다 혁신적이고 매력적인 방식으로 소비자의 주목을 끄는 상품을 만드는 것이 목적이다. </p>
                    <div class="section-box">
                        <div>
                            <b class="horiz">A1 <span class="horiz">(PRODUCT</span></b>
                            <img :src="require('@/assets/img/mb/main/icon1.png')">
                        </div>
                        <div>
                            <b class="horiz">A2 <span class="horiz">(MOBILITY</span></b>
                            <img :src="require('@/assets/img/mb/main/icon2.png')">
                        </div>
                    </div>
                </div>
                 <div class="track-box">
                    <b class="horiz">TRACK B <span class="horiz">(INTERACTION</span></b>
                    <p>인터페이스, 인간요소, 커뮤니케이션 디자인 등 사용자 경험에 관한 체계적이고 분석적인 기획을 바탕으로 디지털 제품을 기능적이고 심미적으로 디자인한다. 그 후 사용자 경험 설계를 바탕으로 제품(사물)과 사람 간의 연결, 상호 작용의 경험을 도출해낸다.</p>
                   <div class="section-box">
                        <div>
                            <b class="horiz">B1 <span class="horiz">(PRODUCT UX</span></b>
                            <img :src="require('@/assets/img/mb/main/icon3.png')">
                        </div>
                    </div>
                </div>
                <div class="track-box">
                    <b class="horiz">TRACK C <span class="horiz">(ENVIRONMENT</span></b>
                    <p>다양한 디지털 제품의 통합적 기획 및 개발과정을 학습하고,  문화 및 사람과 사물의 상호작용과 그를 이용한 사용자 경험을 디자인한다.다양한 디지털 제품의 통합적 기획 및 개발과정을  학습하고, 문화 및 사람과 사물의 상호작용과 그를 이용한 사용자 경험을 디자인한다.</p>
                    <div class="section-box">
                        <div>
                            <b class="horiz">C1 <span class="horiz">(FURNITURE</span></b>
                            <img :src="require('@/assets/img/mb/main/icon4.png')">
                        </div>
                        <div>
                            <b class="horiz">C2 <span class="horiz">(SPACE</span></b>
                            <img :src="require('@/assets/img/mb/main/icon5.png')">
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section id="credits">
            <div class="menu">
                <p :class='["horiz", {open: menu.credits}]' @click="menu.credits = !menu.credits">CREDITS <span class="arrow"></span></p>
            </div>
            <div :class="['contents', {open: menu.credits}]">
                <div class="professor">
                    <b>지도 교수</b>
                    <ul>
                        <li>
                            <b>김원섭</b>
                            <p>제품 인터렉션 디자인</p>
                        </li>
                        <li>
                            <b>이상진</b>
                            <p>제품 환경 디자인</p>
                        </li>
                        <li>
                            <b>김상규</b>
                            <p>제품 문화컨텐츠 디자인</p>
                        </li>
                        <li>
                            <b>최정민</b>
                            <p>제품 UX 디자인</p>
                        </li>
                        <li>
                            <b>최웅</b>
                            <p>제품 조형 디자인</p>
                        </li>
                        <li>
                            <b>이영은</b>
                            <p>제품 리빙 디자인</p>
                        </li>
                    </ul>
                </div>
            
                <div class="committee">
                    <b>졸업전시<br>준비위원회</b>
                    <ul>
                        <li>
                            <b>이유진</b>
                            <p>위원장</p>
                        </li>
                        <li>
                            <b>송민영</b>
                            <p>부위원장</p>
                        </li>
                        <li>
                            <b>이유진 김소희 허준석</b>
                            <p>시각 디자인</p>
                        </li>
                        <li>
                            <b>송민영 송선우 최민경</b>
                            <p>공간 디자인</p>
                        </li>
                        <li>
                            <b>김혜빈 양다혜 이정무</b>
                            <p>웹 디자인</p>
                        </li>
                        <li>
                            <b>김희성</b>
                            <p>회계 사무</p>
                        </li>
                    </ul>
                </div>
                <div class="participants">
                    <b>전시참여자</b>
                    <ul>
                        <li><b>강인수</b></li>
                        <li><b>공민준</b></li>
                        <li><b>궈춘휘</b></li>
                        <li><b>권유정</b></li>
                        <li><b>김다인</b></li>
                        <li><b>김다혜</b></li>
                        <li><b>김민준</b></li>
                        <li><b>김병정</b></li>
                        <li><b>김소희</b></li>
                        <li><b>김예성</b></li>
                        <li><b>김정용</b></li>
                        <li><b>김정은</b></li>
                        <li><b>김태경</b></li>
                        <li><b>김태환</b></li>
                        <li><b>김하은</b></li>
                        <li><b>김현태</b></li>
                        <li><b>김혜빈</b></li>
                        <li><b>김희성</b></li>
                        <li><b>김희재</b></li>
                        <li><b>문병국</b></li>
                        <li><b>문병민</b></li>
                        <li><b>박도영</b></li>
                        <li><b>박효진</b></li>
                        <li><b>방 박</b></li>
                        <li><b>송민영</b></li>
                        <li><b>송선우</b></li>
                        <li><b>양다인</b></li>
                        <li><b>양다혜</b></li>
                        <li><b>이가영</b></li>
                        <li><b>이민선</b></li>
                        <li><b>이유진</b></li>
                        <li><b>이정무</b></li>
                        <li><b>이지향</b></li>
                        <li><b>이채린</b></li>
                        <li><b>이혜원</b></li>
                        <li><b>장희수</b></li>
                        <li><b>전예주</b></li>
                        <li><b>정나은</b></li>
                        <li><b>조민형</b></li>
                        <li><b>조하은</b></li>
                        <li><b>주서형</b></li>
                        <li class="over"><b>차이슈이</b></li>
                        <li><b>채효림</b></li>
                        <li><b>최도현</b></li>
                        <li><b>최동준</b></li>
                        <li><b>최동현</b></li>
                        <li><b>최민경</b></li>
                        <li><b>최원정</b></li>
                        <li><b>최지혜</b></li>
                        <li><b>하상윤</b></li>
                        <li><b>허준석</b></li>
                        <li><b>아브드렙 무하마드 보부르</b></li>
                    </ul>
                </div>

                <div class="etc">
                    <ul>
                        <li>
                            <b>협찬사</b>
                            <span>
                                <img :src="require('@/assets/img/mb/main/logo1.png')">
                                <img :src="require('@/assets/img/mb/main/logo2.png')">
                            </span>
                        </li>
                        <li>
                            <b>웹 개발</b>
                            <b>홍가영</b>
                        </li>
                        <li>
                            <b>도움</b>
                            <b>김승민 이래동</b>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    </div>
</template>

<style lang='scss'>
.main.mb{
    width: 100%;
    height: 100%;
    section{
        border-bottom: 1px solid #000;
        .contents{
            height: 0;
            overflow: hidden;
            &.open{
                height: auto;
                padding-bottom: 50px;
            }
        }
        .menu{
            width: 100%;
            height: 60px;
            p{
                @include flex(space-between);
                height: 60px;
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                padding: 15px 20px ;
                .arrow{
                    background:url('@/assets/img/mb/main/arrow.png') no-repeat center;
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                }
                &.open{
                    .arrow{
                        transform: rotate(180deg);
                    }
                }
            }
        
        }
        &#introduction{
            .contents{
                padding: 0 15px;
                img{
                    margin-left: 50%;
                    transform: translateX(-50%);
                }
                p{
                    font-size: 14px;
                    line-height: 214%;
                    letter-spacing: -0.03em;
                    word-break: break-all;
                    text-align: justify;


                }
                span{
                    font-size: 12px;
                    line-height: 205%;
                    letter-spacing: -0.03em;
                    word-break: break-all;
                    width: 240px;
                    display: block;
                    margin-top: 40px;
                }

            }
        }
        &#promotion{
            .contents{
                .video{
                    width: 100%;
                    height: 250px;
                    background-color: #D9D9D9;
                }
            }
        }
        &#tracks{
            .contents{
                padding: 0 15px;
                .track-box{
                    width: 100%;
                    padding-top: 40px;
                    >b{
                        width: 100%;
                        margin-bottom: 20px;
                        font-size: 16px;
                        line-height: 19px;
                        @include flex(space-between);
                    }
                    > b span{
                        font-size: 16px;
                        line-height: 19px;
                    }
                    p{
                        font-size: 14px;
                        line-height: 214%;
                        word-break: break-all;
                        text-align: justify;
                    }
                    .section-box{
                        @include flex(space-between);
                        margin-bottom: 50px;
                        margin-top: 30px;
                        div{
                            width: 120px;
                            img{
                                width: 100%;
                            }
                            b{
                                white-space: nowrap;
                            }
                        }
                    }
                }
            }
        }
        &#credits{
            .contents{
                padding: 0 15px;

                > div{
                    margin-top: 70px;
                    @include flex(flex-start, flex-start);
                    &:first-child{
                        margin-top: 40px;
                    }
                    >b{
                        width: 200px;
                        font-size: 16px;
                        line-height: 140%;
                    }
                    ul{
                        width: 100%;
                        li{
                            @include flex(space-between);
                            width: 100%;
                            margin-bottom: 10px;
                            p, b, span{
                                font-size: 14px;
                                line-height: 214%;
                                margin-bottom: 0;
                            }
                        }
                    }
                    &.participants{
                        ul{
                            @include flex(space-between);
                            flex-wrap: wrap;
                            li{
                                width: 60px;
                                b{
                                    text-align: center;
                                }
                                &.over{
                                    margin-left: -7px;
                                }
                                &:last-child{
                                    width: 100%;
                                }
                            }
                        }
                    }
                    &.etc{
                        margin-bottom: 40px;
                        ul{
                            li{
                                justify-content: flex-start;
                                b{
                                    width: 130px;
                                }
                                img{
                                    &+img{
                                        margin-left: 30px;
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
    }
}
</style>

<script>
export default {
    name: 'main',
    layout: 'mobile',
    data(){
        return{
            menu:{
                introduction: false,
                promotion: false,
                tracks: false,
                credits: false
            }
        }
    },
    mounted(){

    },
    methods:{
    }
}
</script>
