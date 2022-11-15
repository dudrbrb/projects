<template>
    <div class="container main pc">
        <section id="video"></section>
        <section id="infomation">
            <div class="title">
                <img :src="require('@/assets/img/pc/main/title1.svg')">
                <img :src="require('@/assets/img/pc/main/title2.svg')">
            </div>
            <div class="info-wrapper">
                <div class="info">
                    
                     <p>
                        디자인의 세계는 개인의 창의력과 우리가 살고있는 세계에 대한 이해를 바탕으로 수 많은 완성과 
                        미완성들이 탄생하고 소멸한다. 이러한 탄생과 소멸은 무수한 가능성 안에서 디자이너의 심도 깊은 탐색, 그리고 그것들을 종합적으로 정리하는 과정으로부터 발생한다. 우리는 지난 4년간의 여정 중 다양한 
                        가능성 속에서 자신만의 행성을 탐색해왔다. 
                    </p>
                    <p>
                        본 전시는 현재까지의 탐색과 그 결과에 대한 기록이며 동시에 새로운 출발을 위한 도약점이다. 
                        지금 우리는 앞으로의 새로운 출발을 준비하기 위해 한 자리에 모였다. 
                        7일간의 전시를 마친 후 우리는 미지의 영역으로 나아가 더 넓고 다양한 세계를 경험하게 될 것이다. 
                    </p>
                    <p>
                        서울과학기술대학교 산업디자인학과 제 40회 졸업전시 &lt;New Horizons&gt;는 
                        새로운 지평을 열어줄 49명의 전시자들과 각각의 여정이 생생히 담긴 전시이다.
                         정해진 과정을 함께 밟아왔지만 49개의 각기 다른 열정과 개성으로 여정을 마무리하였다. 
                         우리의 다음 행선지는 어디일까?
                    </p>
                </div>
                <div class="info">
                    <p class="en">
                        The universe of design is based on understanding of the world where we live in, 
                        and lots of unfinished works and creative masterpieces are born and destroyed.
                        All those creations and extinction of design works arise through all process of the designer's in-depth 
                        study with their infinitive possibilities and organizing those ideas. 
                        We have built and explored our own planet in each's variety of possibilities over the past 4 years.
                    </p>
                    <p class="en">
                        This exhibition is record of the result of our 4 years journey, at the same time,
                         to us a step forward for our new start. Now, we are all here to be ready for a new beginning. 
                         After this 7days of exhibition, each of us will experience a wider and diverse unknown world.

                    </p>
                    <p class="en">
                        The 40th Graduation Exhibition &lt;New Horizons&gt; of the Department of Industrial Design 
                        at Seoul University of Science and Technology contains the vivid journey of 49-exhibitors(designers), 
                        which will open up the new horizon of each's design world.
                    </p>
                </div>
                <div class="info img">
                    <img :src="require('@/assets/img/pc/main/horizons.svg')"/>
                </div>
                <div class="info row-el">
                    <p>
                        뉴 호라이즌스호(New horizons)는 NASA가 쏘아올린 첫 번째 명왕성 무인 탐사선이다. 
                        뉴 호라이즌스호는 시작부터 여러 난항을 겪었지만 힘차게 새로운 지평을 향한 여정을 시작했다. 
                        2021년 4월 30일을 기점으로 계획된 탐사가 종료되었으며, 이제는 태양계를 벗어나 미지의 우주로 나아갈 예정이다. 
                        뉴 호라이즌스의 두 번째 확장 임무의 핵심은 기존의 우주를 벗어난 미지의 것에 대한 광범한 분야에 걸친 다양한 관찰이다.
                    </p>
                    <p class="en">
                        The New Horizons was the first unmanned spacecraft launched by NASA. 
                        The New Horizons has been through a number of difficulties from the start, 
                        but has vigorously embarked on a journey toward a new horizon. 
                        As of April 30, 2021, the planned exploration has ended, 
                        and it is now set to move out of the solar system and into the unknown.
                         At the heart of New Horizons' second expansion mission is a wide range of observations of the unknown beyond the existing universe.
                    </p>
                </div>
            </div>
        </section>
        <section id="track">
            <div class="tracks">
                <div class="track-box">
                    <b class="horiz">TRACK A <span class="horiz">(PRODUCT</span></b>
                    <p>제품디자인은 제품의 다양한 요소를 소비자의 니즈와 결합하는 것을 의미한다. 이를 기반으로 포괄적인 분야에서의 제품 디자인에 대한 탐구를 목표로 한다. 사회적 트렌드를 반영한 접근 방식을 통해 사용자에게 특별한 경험을 제안하거나 기존의 경험을 더욱 훌륭하게 만들고, 궁극적으로 제품을 통해 보다 편리하고 윤택한 삶으로의 변화를 추구한다. </p>
            
                    <div class="section-box">
                        <div>
                            <b class="horiz">A1 <span class="horiz">(PRODUCT</span></b>
                            <img :src="require('@/assets/img/pc/main/icon1.svg')">
                        </div>
                        <div>
                            <b class="horiz">A2 <span class="horiz">(MOBILITY</span></b>
                            <img :src="require('@/assets/img/pc/main/icon2.svg')">
                        </div>
                    </div>
                </div>
                <div class="track-box">
                    <b class="horiz">TRACK B <span class="horiz">(INTERACTION</span></b>
                    <p>사용자 경험에 관한 체계적이고 분석적인 기획을 바탕으로 제품과 사람의 상호 작용을 효율적이고 편리하게 만들며 긍정적인 사용자 경험 개선을 목표로 한다. 사용자에 대한 심도깊은 분석을 통해 제품과 사용자의 거리를 좁히는 것에 초점을 두고 있다. 사용자 인터페이스와 같은 매개 뿐 아니라 사용자의 경험 자체에서도 효율성과 심미성을 고려한다. </p>
                      <div class="section-box">
                        <div>
                            <b class="horiz">B1 <span class="horiz">(PRODUCT UX</span></b>
                            <img :src="require('@/assets/img/pc/main/icon3.svg')">
                        </div>
                    </div>
                </div>
                <div class="track-box">
                    <b class="horiz">TRACK C <span class="horiz">(ENVIRONMENT</span></b>
                    <p>생활 환경을 형성하는 모든 요소와 사용자를 복합적으로 고려하는 환경디자인의 큰 틀을 기반으로 한다. 사용자와 환경 의 관계를 이해하고 분석하여 사용자와 환경이 필요로 하는 조건을 조화롭게 반영하여 구성하는 것을 목표로 한다. 공간 자체의 기획 또는 가구 디자인 등 사용자의 생활 환경을 다양한 크기의 영역으로 세분화하여 디자인한다.</p>
                    <div class="section-box">
                        <div>
                            <b class="horiz">C1 <span class="horiz">(FURNITURE</span></b>
                            <img :src="require('@/assets/img/pc/main/icon4.svg')">
                        </div>
                        <div>
                            <b class="horiz">C2 <span class="horiz">(SPACE</span></b>
                            <img :src="require('@/assets/img/pc/main/icon5.svg')">
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section id="drectors">
            <div class="professor">
                <b>지도 교수</b>
                <ul>
                    <li>
                        <p>김원섭</p>
                        <span>제품 인터렉션 디자인</span>
                    </li>
                    <li>
                        <p>이상진</p>
                        <span>제품 환경 디자인</span>
                    </li>
                    <li>
                        <p>김상규</p>
                        <span>제품 문화컨텐츠 디자인</span>
                    </li>
                    <li>
                        <p>최정민</p>
                        <span>제품 UX 디자인</span>
                    </li>
                    <li>
                        <p>최웅</p>
                        <span>제품 조형 디자인</span>
                    </li>
                    <li>
                        <p>이영은</p>
                        <span>제품 리빙 디자인</span>
                    </li>
                </ul>
            </div>
         
            <div class="committee">
                <b>졸업전시준비위원회</b>
                <ul>
                    <li>
                        <p><b>위원장</b>이유진</p>
                        <p><b>부위원장</b>송민영</p>
                    </li>
                    <li>
                        <p><b>시각 디자인</b>이유진 김소희 허준석</p>
                        <span>전시 아이덴티티를 체계적으로 정리해<br/> 그래픽과 편집으로 구현 </span>
                    </li>
                    <li>
                        <p> <b>공간 디자인</b>송민영 송선우 최민경</p>
                        <span>오프라인 전시 공간의 디스플레이를 <br/>설정하고 사용자 경험을 고려해 구체화 </span>
                    </li>
                    <li>
                        <p> <b>웹 디자인</b>김혜빈 양다혜 이정무</p>
                        <span>온라인 전시를 위한 PC 및 모바일 웹 사이트를 <br/>기획 및 설계함 </span>
                    </li>
                    <li>
                        <p> <b>회계 사무</b>김희성</p>
                        <span>전시 예산 및 결산 전반을 총괄함</span>
                    </li>
                </ul>
            </div>
            <div class="participants">
                <b>전시참여자</b>
                <ul>
                    <li>강인수</li>
                    <li>공민준</li>
                    <li>궈춘휘</li>
                    <li>권유정</li>
                    <li>김다인</li>
                    <li>김다혜</li>
                    <li>김민준</li>
                    <li>김병정</li>
                    <li>김소희</li>
                    <li>김예성</li>
                    <li>김정용</li>
                    <li>김정은</li>
                    <li>김태경</li>
                    <li>김태환</li>
                    <li>김하은</li>
                    <li>김현태</li>
                    <li>김혜빈</li>
                    <li>김희성</li>
                    <li>김희재</li>
                    <li>문병국</li>
                    <li>문병민</li>
                    <li>박도영</li>
                    <li>박효진</li>
                    <li>방 박</li>
                    <li>송민영</li>
                    <li>송선우</li>
                    <li>양다인</li>
                    <li>양다혜</li>
                    <li>이가영</li>
                    <li>이민선</li>
                    <li>이유진</li>
                    <li>이정무</li>
                    <li>이지향</li>
                    <li>이채린</li>
                    <li>이혜원</li>
                    <li>장희수</li>
                    <li>전예주</li>
                    <li>정나은</li>
                    <li>조민형</li>
                    <li>조하은</li>
                    <li>주서형</li>
                    <li class="over">차이슈이</li>
                    <li>채효림</li>
                    <li>최동준</li>
                    <li>최동현</li>
                    <li>최민경</li>
                    <li>최원정</li>
                    <li>최지혜</li>
                    <li>하상윤</li>
                    <li>허준석</li>
                </ul>
            </div>

            <div class="etc">
                <b>협찬사</b> 
                <ul>
                    <li>
                        <img :src="require('@/assets/img/pc/main/logo1.svg')">
                    </li>
                    <li>
                        <img :src="require('@/assets/img/pc/main/logo2.svg')">
                    </li>
                </ul>
                <b>웹 개발</b> 
                <ul>
                    <li>홍가영</li>
                </ul>
                <b>도움</b> 
                <ul>
                    <li>김승민</li>
                    <li>이래동</li>
                </ul>
            </div>
        </section>
        <footer>
            <img :src="require('@/assets/img/pc/main/copyright.svg')">
        </footer>
    </div>
</template>

<style lang='scss'>
.main.pc{
    width: 100%;
    height: 100%;
    background-color: #000;
    section{
        padding: 0 90px;
    }
    b, span, p{
        color: #fff
    }
    #video{
        width: 100%;
        height: 110vh;
        padding: 0;
    }
    #infomation{
        .title{
            @include flex(center, center, column);
            margin: 170px 0 210px;
            img+ img{
                margin-top: 30px;
            }
        }
        .info-wrapper{
            @include flex(space-between, flex-start);
            flex-wrap: wrap;
            .info{
                background: none !important;
                width : 48%;
                margin-bottom: 200px;
                p{
                    font-size: 18px;
                    line-height: 38.52px;
                    &.en{
                        font-size: 19px;
                        line-height: 32.3px;
                        /* or 32px */

                        letter-spacing: 2%;
                    }
                }
                &.img{
                    @include flex();
                    width: 52%;
                    img{
                        margin-right: 100px;
                        margin-top: -250px
                    }
                }
                &.row-el{
                    @include flex(space-between, flex-start);
                    margin-top: 100px;
                    margin-left: auto;
                    max-width: 808px;
                    width: 47%;
                    p{
                        font-size: 14px;
                        width: 48%;
                        line-height: 30px;
                        word-break: break-all;
                        text-align: justify;
                        &.en{
                            font-size: 15px;
                            line-height: 28px;
                            letter-spacing: 0.02em;

                        }
                    }
                }
            }
        }
    }
    #track{
        margin-bottom: 560px;
        // padding: 0px 110px;
        .tracks{
            @include flex(space-between, flex-start);
            position: relative;
            height:600px;

           
            .track-box{
                flex: 1;
                width: 30%;
                max-width: 500px;
                &+div{
                    margin-left: 5%;
                }
                >b{
                    display: block;
                    margin-bottom: 30px;
                    width: 100%;
                    @include flex(space-between);
                    font-weight: 600;
                    font-size: 24px;
                    span{
                        font-weight: 600;
                        font-size: 24px;
                    }
                }
                p{
                    font-size: 17px;
                    line-height: 38.52px;
                    word-break: break-all;
                }
                .horiz{
                    font-weight: 200;
                }
                .section-box{
                    @include flex(space-between);
                    margin-top: 60px;
                    position: absolute;
                    width: 30%;
                    max-width: 500px;
                    bottom: 0;
                    &+div{
                        margin-left: 5%;
                    }
                    &:nth-child(2){
                        justify-content: center;
                    }
                    div{
                        flex-direction: column;
                        &+div{
                            margin-left: 10%
                        }
                        b{
                            @include flex(space-between);
                            font-size: 22px;
                            line-height: 26px;
                            letter-spacing: 0.01em;
                            margin-bottom: 20px;
                            width: 100%;
                            span{
                                font-size: 22px;
                                line-height: 26px;
                                letter-spacing: 0.01em;
                            }
                        }
                        img{
                            max-width: 11vw;
                        }
                        .horiz{
                            font-weight: 200;
                        }
                    }
                }
                &:nth-child(2){
                    .section-box  {
                        justify-content: center;
                    }
                }
            }
        
        }
    }
    #drectors{
        @include flex(space-between, flex-start);
        >div{
            >b{
                font-size: 24px;
                line-height: 140%;
                margin-bottom: 60px;
                display: block;
            }
            ul, li{
                margin-left: 0;
                padding-left: 0;
                color: #fff;
                p{
                    font-size: 18px;
                    line-height: 214%;
                    margin-bottom: 0;
            
                }
                span{
                    font-size: 14px;
                    line-height: 227%;
                }
            }
            li + li{
                margin-top: 60px;
            }
        }
        .professor{
            ul{
                li{
                    p{
                        font-weight: bold;
                    }
                }
            }
        }
        .committee{
            ul{
                li{
                    &+li{
                        margin-top: 66.75px;
                    }
                    p{
                        @include flex(flex-start);
                        font-size: 18px;
                        line-height: 214%;
                        font-weight: bold;
                        b{
                            position: relative;
                            font-size: 18px;
                            line-height: 214%;
                            width: 120px;
                            &:before{
                                content: '';
                                background-color: #fff;
                                width: 2px;
                                height: 18px;
                                position: absolute;
                                top: 10px;
                                left: 110px;
                            }
                        }
                    }
                }
            }
        }
        .participants{
            ul{
                @include flex(flestart, flex-start);
                flex-wrap: wrap;
                max-width: 380px;
                margin-top: -30px;
                li{
                    margin-right: 45px;
                    margin-top: 30.5px;
                    text-align: center;
                    max-width: 50px;
                    font-weight: bold;
                    &.over{
                        margin-left: -8px;
                        margin-right: 53px;
                    }
                }
            }
        }
        .etc{
            ul{
                margin-bottom: 122px;
                li{
                    font-weight: bold;
                }
                li+li{
                    margin-top: 25px;
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
    name: 'about',
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
