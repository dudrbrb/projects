<template>
    <div class="container works pc">
        <section id="category">
            <ul>
                <li @click="selectCategory('ALL')" :class="['horiz', {act: nowCate == 'ALL'}]">ALL</li>
                <li @click="selectCategory('PRODUCT')" :class="['horiz', {act: nowCate == 'PRODUCT'}]">PRODUCT</li>
                <li @click="selectCategory('MOBILITY')" :class="['horiz', {act: nowCate == 'MOBILITY'}]">MOBILITY</li>
                <li @click="selectCategory('PRODUCT UX')" :class="['horiz', {act: nowCate == 'PRODUCT UX'}]">PRODUCT UX</li>
                <li @click="selectCategory('FURNITURE')" :class="['horiz', {act: nowCate == 'FURNITURE'}]">FURNITURE</li>
                <li @click="selectCategory('SPACE')" :class="['horiz', {act: nowCate == 'SPACE'}]">SPACE</li>
            </ul>
        </section>
        <section id="works">
            <div class="works-wrapper" v-if="worksSelect.length == 0">
                <div class="work-box" v-for="(work, idx) in works" :key="`work${idx}`">
                    <div class="work-info" @click='$router.push({path: `/works/${work.linkTag}`})'>
                        <p>{{work.nameOfWork}}</p>
                        <span>{{work.exhibitor}}</span>
                        <div :class="work.category"></div>
                    </div>
                </div>
            </div>
            <div class="works-wrapper" v-else>
                <div class="work-box" v-for="(work, idx) in worksSelect" :key="`work${idx}`">
                    <div class="work-info" @click='$router.push({path: `/works/${work.linkTag}`})'>
                        <p>{{work.nameOfWork}}</p>
                        <span>{{work.exhibitor}}</span>
                        <div :class="work.category"></div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <img :src="require('@/assets/img/pc/copyright.svg')">
        </footer>
    </div>
</template>

<style lang='scss'>
.works.pc{
    background-color: #fefefe;
    #category{
        width: 100%;
        height: 120px;
        @include flex(flex-end);
        padding-right: 70px;
        ul{
            @include flex();
            margin-top: 20px;
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
    #works{
        width: 100%;
        .works-wrapper{
            width: 100%;
            padding: 0px 65px;
            @include flex(space-between, flex-start);
            flex-wrap: wrap;
            .work-box{
                width: 19.5%;
                max-width: 340px;
                background: #D9D9D9;
                margin: 0.25%;
                position: relative;
                cursor: pointer;
                &:last-child{
                    margin-right: auto;
                }
                &:before {
                    content: "";
                    display: block;
                    padding-top: 100%; /* 1:1 비율 */
                }
              
                .work-info{
                    transition: all 0.4s;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    opacity: 0;
                    @include flex(flex-end, flex-start, column);
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0) 0%, rgba(245, 255, 51, 0.75) 70.37%, #F5FF33 100%);
                    p{
                        width: 100%;
                        word-break: break-all;
                        font-size: 22px;
                        font-weight: 800;
                        line-height: 120%;
                        padding: 0 15px;
                        display: inline-block;
                        margin-bottom: 8px;
                        text-shadow:0px 0px 0.5px #000;
                    }
                    span{
                        font-size: 17px;
                        font-weight: 600;
                        line-height: 180%;
                        padding: 0 15px 15px;
                        display: block;
                    }
                    div{
                        width: 60px;
                        height: 60px;
                        background-size: contain;
                        background-position: center;
                        position: absolute;
                        top: 18px;
                        right: 15px;
                        &.FURNITURE{
                            background-image: url('@/assets/img/pc/works/FURNITURE.svg');
                        }
                        &.MOBILITY{
                            background-image: url('@/assets/img/pc/works/MOBILITY.svg');
                        }
                        &.PRODUCT{
                            background-image: url('@/assets/img/pc/works/PRODUCT.svg');
                        }
                        &.PRODUCT.UX{
                            background-image: url('@/assets/img/pc/works/PRODUCT-UX.svg');
                        }
                        &.SPACE{
                            background-image: url('@/assets/img/pc/works/SPACE.svg');
                        }
                    }
                }
                &:hover{
                    .work-info{
                        opacity: 1;
                    }
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
    name: 'works',
    data(){
        return{
            nowCate: 'ALL',
            worksSelect: [],
             works:[
                // 제품
                {exhibitor: '강인수',
                studentNumber: '16100892',
                nameOfWork: 'COSMOS',
                category : 'PRODUCT',
                linkTag: 'A101'
                },
                {exhibitor: '공민준',
                studentNumber: '16100896',
                nameOfWork: '지체장애인을 위한 휠체어 통합 모빌리티',
                category : 'PRODUCT',
                linkTag: 'A201'
                },

                {exhibitor: '궈춘휘',
                studentNumber: '',
                nameOfWork: '다목적 고양이 화장실',
                category : 'PRODUCT',
                linkTag: 'A102'
                },
                {exhibitor: '권유정',
                studentNumber: '17100814',
                nameOfWork: 'RA:ON',
                category : 'PRODUCT',
                linkTag: 'A103'
                },
                {exhibitor: '김다인',
                studentNumber: '18100819',
                nameOfWork: 'sqz',
                category : 'FURNITURE',
                linkTag: 'C201'
                },

                {exhibitor: '김다혜',
                studentNumber: '18100921',
                nameOfWork: 'IN MOIRE',
                category : 'SPACE',
                linkTag: 'C101'
                },
                 {exhibitor: '김민준',
                studentNumber: '16100905',
                nameOfWork: 'Thigh Table',
                category : 'FURNITURE',
                linkTag: 'C202'
                },
                {exhibitor: '김병정',
                studentNumber: '16102165',
                nameOfWork: 'Baton',
                category : 'PRODUCT UX',
                linkTag: 'B101'
                },
                {exhibitor: '김소희',
                studentNumber: '17100827',
                nameOfWork: '그리고 그러나 그래서',
                category : 'FURNITURE',
                linkTag: 'C203'
                },
                {exhibitor: '김예성',
                studentNumber: '16100910',
                nameOfWork: 'Benz EQ_Terracia',
                category : 'PRODUCT',
                linkTag: 'A202'
                },
                {exhibitor: '김정용',
                studentNumber: '16101005',
                nameOfWork: '산천설화',
                category : 'PRODUCT',
                linkTag: 'A104'
                },
                {exhibitor: '김정은',
                studentNumber: '17100831',
                nameOfWork: 'Virtual Window',
                category : 'PRODUCT UX',
                linkTag: 'B102'
                },
                {exhibitor: '김태경',
                studentNumber: '17100924',
                nameOfWork: 'ardeni',
                category : 'PRODUCT',
                linkTag: 'A105'
                },
                {exhibitor: '김태환',
                studentNumber: '16100917',
                nameOfWork: 'OPTIMIZ HOUSE',
                category : 'SPACE',
                linkTag: 'C103'
                },
                {exhibitor: '김하은',
                studentNumber: '18100839',
                nameOfWork: 'Light with Breeze',
                category : 'FURNITURE',
                linkTag: 'C204'
                },
                {exhibitor: '김현태',
                studentNumber: '16100919',
                nameOfWork: 'SHIFT',
                category : 'PRODUCT UX',
                linkTag: 'B103'
                },
                {exhibitor: '김혜빈',
                studentNumber: '17100835',
                nameOfWork: 'STORYMATE',
                category : 'PRODUCT UX',
                linkTag: 'B104'
                },
            
                {exhibitor: '김희성',
                studentNumber: '18100844',
                nameOfWork: 'Do-it',
                category : 'PRODUCT',
                linkTag: 'A106'
                },
                {exhibitor: '김희재',
                studentNumber: '',
                nameOfWork: 'Clear but not pure',
                category : 'FURNITURE',
                linkTag: 'C205'
                },
                {exhibitor: '문병국',
                studentNumber: '16100928',
                nameOfWork: 'BESAFE',
                category : 'PRODUCT',
                linkTag: 'A107'
                },
                {exhibitor: '문병민',
                studentNumber: '16100929',
                nameOfWork: 'Fillin',
                category : 'PRODUCT',
                linkTag: 'A108'
                },



                {exhibitor: '박도영',
                studentNumber: '16100934',
                nameOfWork: 'vido',
                category : 'FURNITURE',
                linkTag: 'C206'
                },
                {exhibitor: '박효진',
                studentNumber: '18100857',
                nameOfWork: 'DE PAPEL',
                category : 'FURNITURE',
                linkTag: 'C207'
                },
                {exhibitor: '방박',
                studentNumber: '19102421',
                nameOfWork: 'SOR TEA SET',
                category : 'PRODUCT',
                linkTag: 'A109'
                },
                {exhibitor: '송민영',
                studentNumber: '19110080',
                nameOfWork: 'DABVIL,',
                category : 'PRODUCT',
                linkTag: 'A110'
                },
                 {exhibitor: '송선우',
                studentNumber: '18100862',
                nameOfWork: '삼수터 (嘇秀터)',
                category : 'SPACE',
                linkTag: 'C10'
                },
                {exhibitor: '양다인',
                studentNumber: '17100932',
                nameOfWork: "CERE'S",
                category : 'PRODUCT',
                linkTag: 'A111'
                },
                {exhibitor: '양다혜',
                studentNumber: '18100872',
                nameOfWork: 'Addible_',
                category : 'FURNITURE',
                linkTag: 'C208'
                },

                {exhibitor: '이가영',
                studentNumber: '18100880',
                nameOfWork: 'vvid.',
                category : 'PRODUCT',
                linkTag: 'A112'
                },
                {exhibitor: '이민선',
                studentNumber: '18100883',
                nameOfWork: 'Moment',
                category : 'FURNITURE',
                linkTag: 'C209'
                },
                {exhibitor: '이유진',
                studentNumber: '17100885',
                nameOfWork: 'PSYCHE : In To The Psyche',
                category : 'SPACE',
                linkTag: 'C104'
                },
                {exhibitor: '이정무',
                studentNumber: '17100886',
                nameOfWork: 'ARM CHAIR',
                category : 'FURNITURE',
                linkTag: 'C210'
                },
                {exhibitor: '이지향',
                studentNumber: '18100890',
                nameOfWork: 'DMN',
                category : 'FURNITURE',
                linkTag: 'C211'
                },

                {exhibitor: '이채린',
                studentNumber: '18100949',
                nameOfWork: 'I:washer',
                category : 'PRODUCT',
                linkTag: 'A113'
                },
                {exhibitor: '이혜원',
                studentNumber: '17100943',
                nameOfWork: 'Slow (e)Motion',
                category : 'SPACE',
                linkTag: 'C105'
                },
                {exhibitor: '장희수',
                studentNumber: '18100897',
                nameOfWork: "LOUVIN'",
                category : 'FURNITURE',
                linkTag: 'C212'
                },
                {exhibitor: '전예주',
                studentNumber: '18100898',
                nameOfWork: '나비손 모듈러',
                category : 'FURNITURE',
                linkTag: 'C213'
                },

                {exhibitor: '정나은',
                studentNumber: '19100908',
                nameOfWork: 'Karrie',
                category : 'PRODUCT',
                linkTag: 'A114'
                },
             
                {exhibitor: '조민형',
                studentNumber: '19100020',
                nameOfWork: '교통소외지역 버스정류장',
                category : 'SPACE',
                linkTag: 'C106'
                },
          
                {exhibitor: '조하은',
                studentNumber: '',
                nameOfWork: '홈 스튜디오 다기능 가구',
                category : 'FURNITURE',
                linkTag: 'C214'
                },
                
                {exhibitor: '주서형',
                studentNumber: '18101034',
                nameOfWork: 'île',
                category : 'PRODUCT',
                linkTag: 'A115'
                },
                {exhibitor: '차이슈이',
                studentNumber: '17102273',
                nameOfWork: 'Fruit Wine Maker',
                category : 'PRODUCT',
                linkTag: 'A116'
                },
                {exhibitor: '채효림',
                studentNumber: '16101103',
                nameOfWork: '드라마 촬영 현장 밀착형 협업툴 FLUS',
                category : 'PRODUCT UX',
                linkTag: 'B105'
                },
                {exhibitor: '최동준',
                studentNumber: '16100992',
                nameOfWork: 'BADGER',
                category : 'PRODUCT',
                linkTag: 'A117'
                },
                {exhibitor: '최동현',
                studentNumber: '16100993',
                nameOfWork: 'LIGHT WAVE',
                category : 'PRODUCT',
                linkTag: 'A118'
                },
                {exhibitor: '최민경',
                studentNumber: '22512040',
                nameOfWork: '하지 기능 장애인을 위한 하체 근력 강화 운동기구',
                category : 'PRODUCT',
                linkTag: 'A119'
                },
                {exhibitor: '최원정',
                studentNumber: '',
                nameOfWork: 'Kinetic Hexagon',
                category : 'PRODUCT',
                linkTag: 'A120'
                },
                {exhibitor: '최지혜',
                studentNumber: '19100921',
                nameOfWork: 'BoBo',
                category : 'PRODUCT',
                linkTag: 'A121'
                },
               
                {exhibitor: '하상윤',
                studentNumber: '13185404',
                nameOfWork: 'SWIFTER',
                category : 'PRODUCT',
                linkTag: 'A122'
                },

                {exhibitor: '허준석',
                studentNumber: '20110093',
                nameOfWork: '.Car-e',
                category : 'SPACE',
                linkTag: 'C107'
                },
            ],
        }
    },
    mounted(){

    },
    methods:{
        selectCategory(cate){
            this.nowCate = cate;
            this.worksSelect =[];

            if(cate == "ALL") return this.worksSelect = this.works;

            this.works.forEach(e => {
                if(e.category == cate) this.worksSelect.push(e)
            });
        }
    }
}
</script>

