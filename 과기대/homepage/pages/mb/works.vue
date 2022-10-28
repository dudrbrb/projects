<template>
    <div class="container works mb">
        <section id="menu">
            <ul :class="{open: menuOpen}">
                <li class="horiz menu-title"  @click="menuOpen = !menuOpen">{{nowCate}}<span class="arrow"></span></li>
                <li v-for='(cate, idx) in cateList' :key="`works menu ${idx}`"
                    :class='["horiz", {"hide": (cate == nowCate)}]' 
                    @click="selectCategory(cate)">{{cate}} </li>
            </ul>
        </section>
        <section id="works">
            <div class="works-wrapper" v-if="selecteWorks.length == 0">
                <div v-for="(work, idx) in works" :key="`work${idx}`"
                    :class="['work-box', {'hover': selectWork == work.exhibitor}]" 
                    @click="clickWork(work.exhibitor)"  >
                    <div class="work-info">
                        <p>{{work.nameOfWork}}</p>
                        <span>{{work.exhibitor}}</span>
                        <div :class="work.category"></div>
                    </div>
                </div>
            </div>
            <div class="works-wrapper" v-else>
                  <div v-for="(work, idx) in selecteWorks" :key="`work${idx}`"
                    :class="['work-box', {'hover': selectWork == work.exhibitor}]" 
                    @click="clickWork(work.exhibitor)" >
                    <div class="work-info">
                        <p>{{work.nameOfWork}}</p>
                        <span>{{work.exhibitor}}</span>
                        <div :class="work.category"></div>
                    </div>
                </div>
            </div>
        </section>
        <img :src="require('@/assets/img/mb/grad-bot.png')" class="fix-grad">

    </div>
</template>

<style lang='scss'>
.works.mb{
    width: 100%;
    height: 100%;
    #menu{
        width: 100%;
        height: 60px;
        
        ul {
            max-height: 58px;
            overflow: hidden;
            position: relative;
            li{
                height: 60px;
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                padding: 15px 20px ;
                border-bottom: 1px solid #000;
                position: relative;
                display: block;
                background: #fff;
                &.menu-title{
                    @include flex(space-between);
                    .arrow{
                        background:url('@/assets/img/mb/main/arrow.png') no-repeat center;
                        display: inline-block;
                        width: 40px;
                        height: 40px;
                    }
                }
                &.hide{
                    display: none;
                }
            }
            &.open{
                max-height: 800px;
                z-index: 10;
                li{
                    &.menu-title{
                        .arrow{
                            transform: rotate(180deg);
                        }
                    }
                }
            }

        }

    }

    #works{
        width: 100%;
        margin-bottom: 100px;
        .works-wrapper{
            width: 100%;
            @include flex(space-between, flex-start);
            flex-wrap: wrap;
            .work-box{
                width: 49.5%;
                margin-bottom: 1%;
                max-width: 340px;
                background: #D9D9D9;
                position: relative;
                cursor: pointer;
                &:last-child{
                    // margin-right: auto;
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
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(245, 255, 51, 0.75) 70.37%, #F5FF33 100%);
                    p{
                        width: 100%;
                        word-break: break-all;
                        font-size: 14px;
                        line-height: 140%;
                        font-weight: 600;              
                        padding: 0 15px;
                        display: inline-block;
                        margin-bottom: 8px;
                    }
                    span{
                        font-size: 12px;
                        line-height: 214%;
                        padding: 0 15px 15px;
                        display: block;
                    }
                    div{
                        width: 60px;
                        height: 60px;
                        background-size: cover;
                        background-position: center;
                        position: absolute;
                        top: 18px;
                        right: 15px;
                        &.FURNITURE{
                            background: url('@/assets/img/pc/works/icon/FURNITURE.png');
                        }
                        &.MOBILITY{
                            background: url('@/assets/img/pc/works/icon/MOBILITY.png');
                        }
                        &.PRODUCT{
                            background: url('@/assets/img/pc/works/icon/PRODUCT.png');
                        }
                        &.PRODUCT.UX{
                            background: url('@/assets/img/pc/works/icon/PRODUCT-UX.png');
                        }
                        &.SPACE{
                            background: url('@/assets/img/pc/works/icon/SPACE.png');
                        }
                    }
                }
                &.hover{
                    .work-info{
                        opacity: 1;
                    }
                }
            }
        }
    }
    .fix-grad{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
}
</style>

<script>
export default {
    name: 'works',
    layout: 'mobile',
    data(){
        return{
            menuOpen: false,
            selectWork: null,
            selecteWorks: [],
            nowCate: 'ALL',
            cateList: ['ALL', 'PRODUCT', 'MOBILITY', 'PRODUCT UX', 'FURNITURE', 'SPACE'],
            works:[
                {exhibitor: '홍가영1',
                nameOfWork: '작품명 프로덕트',
                category : 'PRODUCT'},
                {exhibitor: '홍가영2',
                nameOfWork: '작품명작품명작품명작품명작품명작품명작품명작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영3',
                nameOfWork: '작품명작품명작품명작품명작품명작품명작품명작품명작품명작품명작품명',
                category : 'MOBILITY'},
                {exhibitor: '홍가영4',
                nameOfWork: 'MOBILITYMOBILITYMOBILITYMOBILITYMOBILITY',
                category : 'MOBILITY'},
                {exhibitor: '홍가영5',
                nameOfWork: 'PRODUCT UX PRODUCT UXPRODUCT UX',
                category : 'PRODUCT UX'},
                {exhibitor: '홍가영6',
                nameOfWork: 'FURNITURE',
                category : 'FURNITURE'},
                {exhibitor: '홍가영7',
                nameOfWork: '작품명작품명작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영8',
                nameOfWork: 'SPACESPACESPACESPACESPACE',
                category : 'SPACE'},
                {exhibitor: '홍가영9',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영0',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영11',
                nameOfWork: '작품명12',
                category : 'PRODUCT'},
                {exhibitor: '홍가영13',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영14',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영15',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영16',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영17',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영18',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영19',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영20',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영21',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영22',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영23',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영24',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영25',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영26',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영27',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영28',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영29',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영30',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영31',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
            ]
        }
    },
    mounted(){

    },
    methods:{
        clickWork(v){
            if(this.selectWork == v){
               this.$router.push({ path: '/mb/intro' });
            } else {
                this.selectWork = v;
            }
        },
        selectCategory(cate){
            this.nowCate = cate;
            this.menuOpen = false;
            this.selecteWorks = [];

            if(cate == "ALL") {
                return this.selecteWorks = this.works;
            } else{
                this.works.forEach(e => {
                    if(e.category == cate) this.selecteWorks.push(e)
                });
            }
        }
    }
}
</script>
