<template>
    <div class="container works-detail mb">
        <section v-if="workData !== null">
            <div class="main" v-if="tag !== null">
                <img :src="require(`@/assets/img/works/${tag}/main.jpg`)" />
            </div>
            <div class="project text">
                <div class="ko">
                    <b>{{workData.project.ko.title}}</b>
                    <span>
                        <b>{{workData.project.ko.subTitle}}</b>
                        <b>{{workData.profile.ko.exhibitor}}</b>
                    </span>
                    <p>
                        {{workData.project.ko.subscript}}
                    </p>
                </div>
            </div>
            <div class="img2">
                <img :src="require('@/assets/img/mb/grad-bot.png')">
                <img v-for='(img, idx) in workData.images' :key='`img${idx}`' :src="require(`@/assets/img/works/${tag}/${img}`)" />
            </div>
            <div class="profile text">
                <div class="infomation">
                    <div class="exhibitor">
                            <b>{{workData.profile.ko.exhibitor}}<br>
                            {{workData.profile.en.exhibitor}}</b>
                            <div class="image"><img :src="require(`@/assets/img/works/profile/${tag}.jpg`)" /></div>
                     
                    </div>
                    <p>{{workData.profile.ko.introduce}}</p>
                    <div class="contact">
                        <div v-if="workData.profile.sns.mail !== ''">
                            <div>
                                <img :src="require('@/assets/img/pc/works/detail/mail.svg')">
                                <b>{{workData.profile.sns.mail}}</b>
                            </div>
                            <a :href="`mailto:${workData.profile.sns.mail}`" class="arrow"></a>
                        </div>
                        <div v-if="workData.profile.sns.behance !== ''">
                            <div>
                                <img :src="require('@/assets/img/pc/works/detail/behance.svg')">
                                <b>{{workData.profile.sns.behance}}</b>
                            </div>
                            <a :href="`${workData.profile.sns.behance}`" class="arrow"></a>
                        </div>
                        <div v-if="workData.profile.sns.etc !== ''">
                            <div>
                                <img :src="require('@/assets/img/pc/works/detail/etc.svg')">
                                <b>{{workData.profile.sns.etc}}</b>
                            </div>
                            <div class="arrow"></div>
                        </div>
                        <div v-if="workData.profile.sns.instagram !== ''">
                            <div>
                                <img :src="require('@/assets/img/pc/works/detail/instagram.svg')">
                                <b>{{workData.profile.sns.instagram}}</b>
                            </div>
                            <a :href="`https://www.instagram.com/${workData.profile.sns.instagram.split('@')[1]}/`"  class="arrow"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang='scss'>
.works-detail.mb{
    .main{
        width: 100%;
        img{
            width: 100%;
            object-fit: contain;
        }
    }
   .img2{
        width: 100%;
        @include flex(flex-start, flex-start, column);

        img{
            width: 100%;
            object-fit: contain;
        }
    }
    .text{
        padding: 0 15px;
        width: 100%;
        @include flex(space-between, flex-start);
        >div{
            width: 100%;
            b, span{
                font-weight: bold;
                display: block;
                @include flex(space-between);
            }
            b{
                font-size: 18px;
                line-height: 140%;
            }
            span b{
                font-size: 16px;
                line-height: 140%;
                margin-top: 5px;
            }
            p{
                margin-top: 26px;
                text-align: justify;
                font-size: 14px;
                line-height: 214%;
                margin-bottom: 0;
            }

        }
        &.project{
            padding: 40px 15px 50px;
        }
        &.profile{
            padding: 40px 15px 60px;
            .infomation{
                width: 100%;
                p{
                    margin-bottom: 0;
                }
                .exhibitor{
                    @include flex(space-between, flex-end);
                    padding: 0;
                    .image{
                        width: 180px;
                        height: 230px;
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
                .contact{
                    width: 100%;
                    margin-top: 20px;
                    padding-top: 30px;
                    div{
                        @include flex(space-between);
                        position: relative;
                        height: 40px;
                        img{
                            width: 18px;
                        }
                        b{
                            font-size: 14px;
                            line-height: 162%;
                            margin-left: 20px;

                        }
                        .arrow{
                            width: 60px;
                            height: 30px;
                            background: url('@/assets/img/pc/works/detail/arrow.svg') no-repeat center ;
                            background-size: contain;
                            cursor: pointer;
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
    name: 'worksDetail',
    layout: 'mobile',
    data(){
        return{
            tag: null,
            studentData: null,
            workData: null
        }
    },
    mounted(){
        this.tag = this.$route.query.tag;
        this.getWorks()
    },
    methods:{
        getWorks(){
            this.$axios.$get(`/api/student/list/${this.tag}`).then(datas =>{
                this.studentData = datas;
                this.workData = datas.detail;
                console.log(datas)
            }).catch((error)=>{
                console.log(error.data)
            });
        },
    }
}
</script>

