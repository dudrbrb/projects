<template>
    <section id="mapWrapper">
        <div>
            <div id="map"></div>
            <div class="info">
                <ul>
                    <li>
                        <span>위치</span>
                        <p>대구광역시 동구 동대구로 523 3층 307호</p>
                    </li>
                    <li>
                        <span>연락처</span>
                        <p>1644-5767</p>
                    </li>
                    <li>
                        <span>이메일</span>
                        <p>2plus@gmail.com</p>
                    </li>
                </ul>
                <nuxt-link :to="'/contact'" v-if="$route.path !== '/contact'">
                    <v-btn depressed elevation="2" rounded dark class="item">바로 문의 남기기</v-btn>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
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
section{
    padding: 100px 0;
    *{
        transition: all 0.4s;
    }
}

#mapWrapper{
    background: $gray;
    >div{
        max-width: 1200px;
        left: 0;
        right: 0;
        margin: 0 auto;
        @include center;
    }
    #map{
        width: 400px;
        height: 400px;
        background-color: rgb(171, 171, 171);
        margin-right: 80px;
    }
    .info{
        background: none !important;
        ul{
            padding-left: 0;
            li{
                @include center;
                justify-content: flex-start;
                &+li{
                    margin-top: 20px;
                }
                span{
                    width: 100px;
                    font-weight: 600;
                }
                p{
                    margin-bottom: 0;
                }
            }
        }
        button{
            height: 60px;
            padding: 0 30px;
            margin-top: 50px;
            border-radius: 30px;
            @include beforeOp();
            &.act{
                @include afterOp(0.3s);
            }
            span{
                font-size: 20px;
            }
        }
    }
}
@media screen and (max-width: 1024px) {
#mapWrapper{
    padding: 100px 30px;
    #map{
        margin-right: 30px;
        width: 350px;
        height: 350px;
    }
    .info{
        ul{
            li{
                p{
                    font-size: 18px;
                }
                span{
                    font-size: 18px;
                    margin-bottom: auto;
                    width: 80px;
                    min-width: 80px;
                }
            }
        }
    }
}
}
@media screen and (max-width: 540px) {
#mapWrapper{
    padding: 100px 10px;
    >div{
        flex-direction: column;
    }
    #map{
        margin-right: 30px;
        width: 100%;
        margin-right: 0;
        margin-bottom: 30px;
    }
    .info{
        ul{
            li{
                span{
                    width: 70px;
                    margin-bottom: auto;
                }
            }
        }
        button{
            left: 50%;
            margin-left: -96px;
        }
    }
}
}
</style>

<script>
    export default {
        name: 'Map',
        data(){
            return{
            }
        },
        async mounted(){
            kakao.maps.load(this.initMap);
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
            initMap() {
                const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
                const options = {
                    //지도를 생성할 때 필요한 기본 옵션
                    center: new kakao.maps.LatLng(35.87705917701427 , 128.62588547045928), //지도의 중심좌표.
                    level: 3, //지도의 레벨(확대, 축소 정도)
                };
                var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
                this.map = map;
                var marker = new kakao.maps.Marker({ 
                    // 지도 중심좌표에 마커를 생성합니다 
                    position: map.getCenter() 
                }); 
                // 지도에 마커를 표시합니다
                marker.setMap(map);
            },
        }
    }
</script>