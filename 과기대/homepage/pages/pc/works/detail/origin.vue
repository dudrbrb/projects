<template>
    <div class="container works-detail pc">
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
                <div class="en">
                    <b>{{workData.project.en.title}}</b>
                    <span>
                        <b>{{workData.project.en.subTitle}}</b>
                        <b>{{workData.profile.en.exhibitor}}</b>
                    </span>
                    <p>
                       {{workData.project.en.subscript}}
                    </p>
                </div>
            </div>
            <div class="contents">
                <div class="content-box" v-for='(img, idx) in workData.images' :key='`img${idx}`'>
                    <iframe v-if="img.substr(0, 4) == 'http'" :src="img" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%; height: 60vw;"></iframe>
                    <img v-else :src="require(`@/assets/img/works/${tag}/${img}`)" />
                </div>
            </div>
            <div class="profile text">
                <div class="image">  <div class="image"><img :src="require(`@/assets/img/works/profile/${tag}.jpg`)" /></div></div>
                <div class="infomation">
                    <div class="text">
                        <div class="ko">
                            <b>{{workData.profile.ko.exhibitor}}</b>
                            <p>{{workData.profile.ko.introduce}}</p>
                        </div>
                        <div class="en">
                            <b>{{workData.profile.en.exhibitor}}</b>
                            <p>{{workData.profile.en.introduce}}</p>
                        </div>
                    </div>
                    <div class="contact">
                        <div v-if="workData.profile.sns.mail !== ''">
                            <img :src="require('@/assets/img/pc/works/detail/mail.svg')">
                            <b>{{workData.profile.sns.mail}}</b>
                            <a :href="`mailto:${workData.profile.sns.mail}`" class="arrow" target="_blank"></a>
                        </div>
                        <div v-if="workData.profile.sns.behance !== ''">
                            <img :src="require('@/assets/img/pc/works/detail/behance.svg')">
                            <b>{{workData.profile.sns.behance}}</b>
                            <a :href="`https://www.behance.net/${workData.profile.sns.behance}`" class="arrow" target="_blank"></a>
                        </div>
                        <div v-if="workData.profile.sns.etc !== ''">
                            <img :src="require('@/assets/img/pc/works/detail/etc.svg')">
                            <b>{{workData.profile.sns.etc}}</b>
                            <a :href="`https://${workData.profile.sns.etc}`" class="arrow" target="_blank"></a>
                        </div>
                        <div v-if="workData.profile.sns.instagram !== ''">
                            <img :src="require('@/assets/img/pc/works/detail/instagram.svg')">
                            <b>{{workData.profile.sns.instagram}}</b>
                            <a :href="`https://www.instagram.com/${workData.profile.sns.instagram.split('@')[1]}/`" class="arrow" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang='scss'>
.works-detail.pc{
    .main{
        width: 100%;
        margin-top: 70px;
        img{
            width: 100%;
            object-fit: contain;
        }
    }
    .contents{
        width: 100%;
        margin-bottom: 260px;
        .content-box{
            width: 100%;
            height: auto;
            margin-bottom: -10px;
            img{
                width: 100%;
                object-fit: contain;
            }

        }
    }
    .text{
        padding: 80px 90px;
        width: 100%;
        @include flex(space-between, flex-start);
        >div{
            width: 48%;
            b, span{
                font-weight: bold;
                display: block;
                @include flex(space-between);
            }
            b{
                font-size: 28px;
                line-height: 100%;
            }
            span b{
                font-size: 24px;
                line-height: 140%;
            }
            p{
                margin-top: 40px;
                text-align: justify;
            }

        }
        &.profile{
            .image{
                width: 400px;
                height: 500px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .infomation{
                width: 80%;
                margin-left: 80px;
                .text{
                    padding: 0;
                    p{
                        margin-bottom: 0;
                    }
                }
                .contact{
                    width: 100%;
                    border-top: 1px solid #000;
                    margin-top: 20px;
                    padding-top: 30px;
                    div{
                        @include flex(flex-start);
                        position: relative;
                        height: 40px;
                        img{
                            width: 25px;
                        }
                        b{
                            font-size: 19px;
                            line-height: 162%;
                            margin-left: 20px;
                        }
                        .arrow{
                            width: 80px;
                            height: 35px;
                            background: url('@/assets/img/pc/works/detail/arrow.svg') no-repeat center ;
                            background-size: contain;
                            position: absolute;
                            left: 22vw;
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

