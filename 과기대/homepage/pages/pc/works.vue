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
                    <div class="work-info">
                        <p>{{work.nameOfWork}}</p>
                        <span>{{work.exhibitor}}</span>
                        <div :class="work.category"></div>
                    </div>
                </div>
            </div>
            <div class="works-wrapper" v-else>
                <div class="work-box" v-for="(work, idx) in worksSelect" :key="`work${idx}`">
                    <div class="work-info">
                        <p>{{work.nameOfWork}}</p>
                        <span>{{work.exhibitor}}</span>
                        <div :class="work.category"></div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <img :src="require('@/assets/img/pc/copyright.png')">
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
        padding: 0 90px 0 0;
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
            padding: 0 85px;
            @include flex(center, flex-start);
            flex-wrap: wrap;
            .work-box{
                width: 20%;
                max-width: 340px;
                background: #D9D9D9;
                margin: 5px;
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
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(245, 255, 51, 0.75) 70.37%, #F5FF33 100%);
                    p{
                        width: 100%;
                        word-break: break-all;
                        font-size: 24px;
                        font-weight: 600;
                        line-height: 140%;
                        padding: 0 15px;
                        display: inline-block;
                    }
                    span{
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 210%;
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
                {exhibitor: '홍가영',
                nameOfWork: '작품명 프로덕트',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명작품명작품명작품명작품명작품명작품명작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명작품명작품명작품명작품명작품명작품명작품명작품명작품명작품명',
                category : 'MOBILITY'},
                {exhibitor: '홍가영',
                nameOfWork: 'MOBILITYMOBILITYMOBILITYMOBILITYMOBILITY',
                category : 'MOBILITY'},
                {exhibitor: '홍가영',
                nameOfWork: 'PRODUCT UX PRODUCT UXPRODUCT UX',
                category : 'PRODUCT UX'},
                {exhibitor: '홍가영',
                nameOfWork: 'FURNITURE',
                category : 'FURNITURE'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명작품명작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: 'SPACESPACESPACESPACESPACE',
                category : 'SPACE'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
                {exhibitor: '홍가영',
                nameOfWork: '작품명',
                category : 'PRODUCT'},
            ]
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
