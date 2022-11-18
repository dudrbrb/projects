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
                    :class="['work-box', {'hover': selectWork == work.linkTag}]" 
                    @click="clickWork(work.linkTag)"  >
                    <img :src='require(`@/assets/img/works/thumb/${work.linkTag}.jpg`)'>

                    <div class="work-info">
                        <p>{{work.nameOfWork}}</p>
                        <span>{{work.exhibitor}}</span>
                        <div :class="work.category"></div>
                    </div>
                </div>
            </div>
            <div class="works-wrapper" v-else>
                  <div v-for="(work, idx) in selecteWorks" :key="`work${idx}`"
                    :class="['work-box', {'hover': selectWork == work.linkTag}]" 
                    @click="clickWork(work.linkTag)" >
                    <img :src='require(`@/assets/img/works/thumb/${work.linkTag}.jpg`)'>

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
                line-height: 60px;
                padding: 0 20px ;
                border-bottom: 1px solid #000;
                position: relative;
                display: block;
                background: #fff;
                &.menu-title{
                    @include flex(space-between);
                    margin-top: 5px;
                    .arrow{
                        background:url('@/assets/img/mb/main/arrow.svg') no-repeat center;
                        display: inline-block;
                        width: 40px;
                        height: 60px;
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
                &:before {
                    content: "";
                    display: block;
                    padding-top: 100%; /* 1:1 비율 */
                }
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
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
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(245, 255, 51, 0.75) 70.37%, #F5FF33 100%);
                    p{
                        width: 100%;
                        word-break: break-all;
                        font-size: 14px;
                        line-height: 140%;
                        font-weight: 600;              
                        padding: 0 15px;
                        display: inline-block;
                        margin-bottom: 0;
                        text-shadow:0px 0px 0.5px #000;
                    }
                    span{
                        font-size: 12px;
                        line-height: 214%;
                        padding: 0 15px 5px;
                        display: block;
                        font-weight: bold;
                    }
                    div{
                        width: 36px;
                        height: 36px;
                        background-size: cover;
                        background-position: center;
                        position: absolute;
                        top: 10px;
                        right: 10px;
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
            works : null
        }
    },
    mounted(){
        this.getWorks();
    },
    
    methods:{
        getWorks(){
            this.$axios.$get(`/api/student/list`).then(datas =>{
                this.works = datas;
            }).catch((error)=>{
                console.log(error.data)
            });
        },
        clickWork(v){
            if(this.selectWork == v){
                this.$router.push({ path: '/mb/works/detail', query: {'tag': v} });
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
                    if(e.category == cate) this.selecteWorks.push(e);
                });
            }
            this.selectWork = null;
        }
    }
}
</script>



