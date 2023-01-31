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
                    <img :src='require(`@/assets/img/works/thumb/${work.linkTag}.webp`)'>
                    <div class="work-info" @click='$router.push({path: `/pc/works/${work.linkTag}`})'>
                        <p>{{work.nameOfWork}}</p>
                        <span>{{work.exhibitor}}</span>
                        <div :class="work.category"></div>
                    </div>
                </div>
            </div>
            <div class="works-wrapper" v-else>
                <div class="work-box" v-for="(work, idx) in worksSelect" :key="`work${idx}`">
                    <img :src='require(`@/assets/img/works/thumb/${work.linkTag}.webp`)'>
                    <div class="work-info" @click='$router.push({path: `/pc/works/${work.linkTag}`})'>
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
                width: 19.4%;
                background: #D9D9D9;
                margin: 0.3%;
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
                        letter-spacing:-0.3px;
                    }
                    span{
                        font-size: 17px;
                        font-weight: 600;
                        line-height: 180%;
                        padding: 0 15px 15px;
                        display: block;
                        letter-spacing: -0.8px;
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

