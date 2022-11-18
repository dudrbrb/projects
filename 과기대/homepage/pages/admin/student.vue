<template>
    <div class="container admin pc">
        <h1 class="horiz">STUDENT ADMIN</h1>
        <section id="list">
            <ul>
                <li v-for="(student, idx) in studentList" :key="`student${idx}`" >
                    <div class="txt-box">
                        <p><b>{{student.linkTag}}</b> {{student.exhibitor}} <span v-if="student.studentNumber">({{student.studentNumber}})</span> : {{student.category}} / {{student.nameOfWork}}</p>
                    </div>
                    <!-- <div><p>{{student.detail.images}}</p></div> -->
                    <div class="btn-box">
                        <!-- <div class="edit" @click="editStudent(student)">수정하기</div> -->
                        <div class="edit" @click="openPopup('edit', student)">수정하기</div>
                        <div class="delete" @click="openPopup('delete', student)">삭제하기</div>
                    </div>
                </li>
            </ul>
            
        </section>
        <section id="popup" v-if="popup.open">
            <article id="form" v-if="popup.edit == true && selectData !== null">
                <div class="input-box">
                    <label>넘버링</label>
                    <input type="text" v-model="selectData.linkTag">
                </div>
                <div class="input-box">
                    <label>이름</label>
                    <input type="text" v-model="selectData.detail.profile.ko.exhibitor">
                </div>
                <div class="input-box">
                    <label>영어이름</label>
                    <input type="text" v-model="selectData.detail.profile.en.exhibitor">
                </div>
                <div class="input-box">
                    <label>학번</label>
                    <input type="text" v-model="selectData.studentNumber">
                </div>
                <div class="input-box">
                    <label>작품 제목</label>
                    <input type="text" v-model="selectData.detail.project.ko.title">
                </div>
                <div class="input-box">
                    <label>작품 소제목</label>
                    <input type="text" v-model="selectData.detail.project.ko.subTitle">
                </div>
                <div class="input-box">
                    <label>카테고리</label>
                    <select :options="categorys" v-model="selectData.category">
                        <option v-for='cate in categorys' :value="cate" :key="cate">{{cate}}</option>
                    </select>
                </div>
                <div class="input-box">
                    <label>영어 제목</label>
                    <input type="text" v-model="selectData.detail.project.en.title">
                </div>
                <div class="input-box">
                    <label>영어 소제목</label>
                    <input type="text" v-model="selectData.detail.project.en.subTitle">
                </div>
                 <div class="input-box">
                    <label>E-mail</label>
                    <input type="text" v-model="selectData.detail.profile.sns.mail">
                </div>
                <div class="input-box">
                    <label>Behance</label>
                    <input type="text" v-model="selectData.detail.profile.sns.behance">
                </div>
                <div class="input-box">
                    <label>Instagram</label>
                    <input type="text" v-model="selectData.detail.profile.sns.instagram">
                </div>
                <div class="input-box">
                    <label>etc</label>
                    <input type="text" v-model="selectData.detail.profile.sns.etc">
                </div>
                
                <div class="full">
                    <div class="input-box">
                        <label>작품 소개 (한글)</label>
                        <textarea id="" cols="30" rows="10" v-model="selectData.detail.project.ko.subscript"></textarea>
                    </div>
                    <div class="input-box">
                        <label>작품 소개 (영어)</label>
                        <textarea id="" cols="30" rows="10" v-model="selectData.detail.project.en.subscript"></textarea>
                    </div>
                    <div class="input-box">
                        <label>자기 소개 (한글)</label>
                        <textarea id="" cols="30" rows="10" v-model="selectData.detail.profile.ko.introduce"></textarea>
                    </div>
                    <div class="input-box">
                        <label>자기 소개 (영어)</label>
                        <textarea id="" cols="30" rows="10" v-model="selectData.detail.profile.en.introduce"></textarea>
                    </div>

                </div>
                <div class="content-input" >
                    <label>컨텐츠</label>
                    <div class="input-box" v-if="selectData.detail.images.length !== 0">
                        <input type="text" v-for='(img, idx) in selectData.detail.images' v-model="selectData.detail.images[idx]" :key="idx">
                        <!-- <div class="addImg">+</div> -->
                    </div>

                </div>

                <div class="btn-box">
                    <div class="edit-ok" @click="editStudent">수정하기</div>
                    <div class="close" @click="closePopup('edit')">닫기</div>
                </div>
            </article>
            <article id='alert' v-if="popup.delete == true && selectData !== null">
                <p><b>{{selectData.exhibitor}}</b>님의 정보 삭제하시겠습니까? </p>
                <div class="btn-box">
                    <div class="delete-ok" @click="deleteStudent(selectData._id)">삭제하기</div>
                    <div class="close" @click="closePopup('delete')">닫기</div>
                </div>
            </article>
        </section>
        <footer>
            <img :src="require('@/assets/img/pc/main/copyright.svg')">
        </footer>
    </div>
</template>

<style lang='scss'>
$blue: #3392ff;
$red: rgb(255, 66, 66);
.admin.pc{
    width: 100%;
    height: 100%;
    background-color: #000;
    position: relative;
    @include flex(center, center, column);
    h1,b, p, span{
        color: #fff;
    }
    h1{
        margin-top: 70px;
        font-size: 40px;
    }
    #list{
        width: 95%;
        max-width: 900px;
        margin: 50px auto 100px auto;
        @include flex(flex-start, center, column);
        ul{
            width: 100%;
            margin-top: -15px;
            padding-left: 0;
            min-height: 588px;
            li{
                @include flex(space-between);
                width: 100%;
                padding: 15px 0;
                border-bottom: 0.5px solid #ffffff80;
                b{
                    font-size: 18px;
                    line-height: 214%;
                }
                p{
                    font-size: 18px;
                    line-height: 214%;
                    margin-bottom: 0;
                    height: auto;
                    word-break: break-all
                }
                span{
                    font-size: 15px;
                    line-height: 190%;
                }
                .btn-box{
                    @include flex(flex-start);
                    div{
                        color: #fff;
                        font-size: 16px;
                        padding: 5px 15px;
                        border: 1px solid #fff;
                        border-radius: 10px;
                        cursor: pointer;
                        &+div{
                            margin-left: 10px;
                        }
                        &.edit{
                            color: rgb(66, 230, 255);
                            border-color: rgb(66, 230, 255);
                        }
                        &.delete{
                            color: $red;
                            border-color: $red;
                        }
                    }

                }
            }
        }
        .pagination{
            margin: 40px 0 90px;
            span{
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #D9D9D9;
                display: inline-block;
                cursor: pointer;
                &.act{
                    background-color: #F5FF33;
                }
                &+span{
                    margin-left: 20px;
                }
            }
        }
    }
    #popup{
        width: 100%;
        height: 100%;
        background-color: rgba(51, 51, 51, 0.627);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        >article{
            position: absolute;
            top: 50%;
            left: 50%;
            overflow-y: scroll;
            max-height: 85vh;
            transform: translate(-50%, -50%);
            .btn-box{
                width: 100%;
                @include flex(flex-end);
                div{
                    font-size: 18px;
                    letter-spacing: -0.01em;
                    text-align: center;
                    margin-top: 20px;
                    margin-left: auto;
                    padding: 10px 20px;
                    cursor: pointer;
                    color: #fff;
                    border-radius: 10px;
                    &+div{
                        margin-left: 5px;
                    }
                }
                .close{
                    background-color: rgb(177, 177, 177);
                    color: #333;
                }
            }
        }
        #form{
            @include flex(space-between, flex-start);
            flex-wrap: wrap;
            width: 90%;
            max-width: 1160px;
            background-color: #fff;
            border-radius: 20px;
            padding:30px;
            .input-box{
                width: 32%;
                margin-bottom: 15px;
                label{
                    min-width: 90px;
                    display: inline-block;
                }
                input, select{
                    border: 1px solid #333;
                    padding: 5px;
                    width: 200px;
                }
                textarea{
                    border: 1px solid #333;
                    padding: 5px;
                    height: 100px;
                    width: 100%;
                    resize: none;
                }
            }
            .full{
                width: 100%;
                @include flex(space-between, flex-start);
                flex-wrap: wrap;
                .input-box{
                    @include flex(space-between, flex-start);
                    width: 48%;
                }

            }
            .content-input{
                width: 100%;
                @include flex(flex-start, flex-start);
                label{
                    min-width: 90px;
                    display: inline-block;
                    line-height: 40px;
                }
                .input-box{
                    width: 100%;
                    @include flex(flex-start, flex-start);
                    flex-wrap: wrap;
                    input{
                        margin-bottom: 5px;
                        margin-right: 5px;
                    }
                }
                .addImg{
                    width: 40px;
                    height: 40px;
                    background-color: #D9D9D9;
                    text-align: center;
                    line-height: 40px;
                    border-radius: 5px;
                    margin-left: 10px;
                    font-size: 24px;
                }
            }
            .edit-ok{
                background-color: $blue;
            }
    
        }
        #alert{
            @include flex(flex-start, flex-start, column);
            width: 90%;
            max-width: 600px;
            background-color: #fff;
            border-radius: 20px;
            padding: 20px;
            p, b{
                color: #000;
            }
            .delete-ok{
                background-color: $red;
            }
    
        }
    }
    footer{
        position: absolute;
        width: 100%;
        bottom: 25px;
        @include flex();
    }
}
</style>

<script>
export default {
    name: 'admin',
    data(){
        return{
            studentList: null,
            selectData: null,
            editPopup: false,
            imgNumber: 1,
            popup: {
                open: false,
                edit: false,
                delete: false
            },
            categorys:['PRODUCT', 'PRODUCT UX', 'FURNITURE', 'MOBILITY', 'SPACE'],
    addDatas:[
        {exhibitor: '강인수',
        studentNumber: '16100892',
        nameOfWork: 'COSMOS',
        category : 'PRODUCT',
        linkTag: 'A101'
        ,detail:{
            contents:['detail1.jpeg'],
            profile:{
                ko:[
                    '강인수',
                    '이것저것 조립하고 만들어내는 것에서 흥미를 느꼈던 저는 포스터나 영상, 굿즈, 패키징 등을 구상해서 만들어내는 것을 좋아합니다. 저만의 개성있는 스타일을 담아 다양한 것들을 만들어내고, 특색있고 개성 넘치는 디자인을 하고 싶습니다. '
                ],
                en:[
                    'Kang Insoo',
                    'I was interested in putting this and that together and making this and that I like to plan and make posters, videos, goods, packaging, etc. I create a variety of things with my own unique style I want to do a unique design that has a distinctive characteristic. '
                ],
                sns:{
                    mail: 'tkaclf66@gmail.com',
                    behance: 'tkaclf66@gmail.com',
                    design: null,
                    instagram: '@archive_401'
                }
            }
        }
        },
        {exhibitor: '공민준',
        studentNumber: '16100896',
        nameOfWork: '지체장애인을 위한 휠체어 통합 모빌리티',
        category : 'MOBILITY',
        linkTag: 'A201'
        ,detail:{
        contents:['detail1.png', 'detail2.gif', 'detail3.png'],
        profile:{
        ko:[
            '공민준',
            '저는 디자인을 통해 사람들을 자유롭게 하고 싶습니다. 삶과 동떨어진 디자인은 온전히 그들의 삶을 즐기는 것을 방해하고 시간을 허비하게 만듭니다. 반대로, 불필요한 것을 덜어내어 구름처럼 가벼운 솔루션은 사용자의 삶에 잘 밀착됩니다. 이러한 솔루션을 통해 자유롭게 삶을 즐기게 하는 것이 저의 디자인 목적입니다.'
        ],
        en:[
            'Kong Minjun',
            'I want to free people through design. Designs that are out of touch with life completely hinder them from enjoying their lives and waste time. On the contrary, cloud-light solutions that take away unnecessary things are well attached to our life. My design purpose is to enjoy life freely through these solutions.'
        ],
        sns:{
            mail: 'mjk_design@naver.com',
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },

        {exhibitor: '궈춘휘',
        studentNumber: '',
        nameOfWork: '다목적 고양이 화장실',
        category : 'PRODUCT',
        linkTag: 'A102'
        ,detail:{
        contents:[],
        project:{
            ko:{
                title: '',
                subTitle: '',
                subscript: ''
            },
            en:{
                title: '',
                subTitle: '',
                subscript: ''
            }
        },
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '권유정',
        studentNumber: '17100814',
        nameOfWork: 'RA:ON',
        category : 'PRODUCT',
        linkTag: 'A103'
        ,detail:{
        contents:['detail1.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '김다인',
        studentNumber: '18100819',
        nameOfWork: 'sqz',
        category : 'FURNITURE',
        linkTag: 'C201'
        ,detail:{
        contents:['detail1.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },

        {exhibitor: '김다혜',
        studentNumber: '18100921',
        nameOfWork: 'IN MOIRE',
        category : 'SPACE',
        linkTag: 'C101'
        ,detail:{
        contents:['detail1.jpg','detail2.jpg', 'https://youtu.be/xOXsnMrUJjc','detail3.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '김민준',
        studentNumber: '16100905',
        nameOfWork: 'Thigh Table',
        category : 'FURNITURE',
        linkTag: 'C202'
        ,detail:{
        contents:['detail1.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '김병정',
        studentNumber: '16102165',
        nameOfWork: 'Baton',
        category : 'PRODUCT UX',
        linkTag: 'B101'
        ,detail:{
        contents:['detail1.jpg', 'https://youtu.be/bKYb7Au1-eU'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '김소희',
        studentNumber: '17100827',
        nameOfWork: '그리고 그러나 그래서',
        category : 'FURNITURE',
        linkTag: 'C203'
        ,detail:{
        contents:[],
        project:{
            ko:{
                title: '',
                subTitle: '',
                subscript: ''
            },
            en:{
                title: '',
                subTitle: '',
                subscript: ''
            }
        },
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '김예성',
        studentNumber: '16100910',
        nameOfWork: 'Benz EQ_Terracia',
        category : 'MOBILITY',
        linkTag: 'A202'
        ,detail:{
        contents:['detail1.jpg','detail2.webp', 'detail3.jpg', 'detail4.webp', 'detail5.jpg', 'detail6.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '김정용',
        studentNumber: '16101005',
        nameOfWork: '산천설화',
        category : 'PRODUCT',
        linkTag: 'A104'
        ,detail:{
        contents:['detail1.jpg', 'detail2.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '김정은',
        studentNumber: '17100831',
        nameOfWork: 'Virtual Window',
        category : 'PRODUCT UX',
        linkTag: 'B102'
        ,detail:{
        contents:['detail1.jpg', 'https://youtu.be/ict_WYnMKRc', 'https://youtu.be/5Hurkgtkx90','detail2.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '김태경',
        studentNumber: '17100924',
        nameOfWork: 'ardeni',
        category : 'PRODUCT',
        linkTag: 'A105'

        ,detail:{
        contents:['detail1.jpg', 'detail2.jpg', 'detail3.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '김태환',
        studentNumber: '16100917',
        nameOfWork: 'OPTIMIZ HOUSE',
        category : 'SPACE',
        linkTag: 'C103'
        ,detail:{
        contents:[],
        project:{
            ko:{
                title: '',
                subTitle: '',
                subscript: ''
            },
            en:{
                title: '',
                subTitle: '',
                subscript: ''
            }
        },
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '김하은',
        studentNumber: '18100839',
        nameOfWork: 'Light with Breeze',
        category : 'FURNITURE',
        linkTag: 'C204'
        ,detail:{
        contents:['detail1.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '김현태',
        studentNumber: '16100919',
        nameOfWork: 'SHIFT',
        category : 'PRODUCT UX',
        linkTag: 'B103'
        ,detail:{
        contents:['detail1.gif', 'detail2.jpg', 'https://youtu.be/IOqXjA-OBYo', 'detail3.jpg', 'detail4.jpg', 'detail5.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '김혜빈',
        studentNumber: '17100835',
        nameOfWork: 'STORYMATE',
        category : 'PRODUCT UX',
        linkTag: 'B104'
        ,detail:{
        contents:[],
        project:{
            ko:{
                title: '',
                subTitle: '',
                subscript: ''
            },
            en:{
                title: '',
                subTitle: '',
                subscript: ''
            }
        },
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },

        {exhibitor: '김희성',
        studentNumber: '18100844',
        nameOfWork: 'Do-it',
        category : 'PRODUCT',
        linkTag: 'A106'
        ,detail:{
        contents:[],
        project:{
            ko:{
                title: '',
                subTitle: '',
                subscript: ''
            },
            en:{
                title: '',
                subTitle: '',
                subscript: ''
            }
        },
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '김희재',
        studentNumber: '',
        nameOfWork: 'Clear but not pure',
        category : 'FURNITURE',
        linkTag: 'C205'
        ,detail:{
        contents:['detail1.jpg', 'detail2.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '문병국',
        studentNumber: '16100928',
        nameOfWork: 'BESAFE',
        category : 'PRODUCT',
        linkTag: 'A107'
        ,detail:{
        contents:['detail1.jpg', 'https://vimeo.com/769768624', 'detail2.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '문병민',
        studentNumber: '16100929',
        nameOfWork: 'Fillin',
        category : 'PRODUCT',
        linkTag: 'A108'
        ,detail:{
        contents:['detail1.jpg', 'detail2.jpg','detail3.jpg', 'detail4.jpg','detail5.jpg', 'detail6.jpg','detail7.jpg', 'detail8.jpg','detail9.jpg', 'detail10.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },



        {exhibitor: '박도영',
        studentNumber: '16100934',
        nameOfWork: 'vido',
        category : 'FURNITURE',
        linkTag: 'C206'
        ,detail:{
        contents:['detail1.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '박효진',
        studentNumber: '18100857',
        nameOfWork: 'DE PAPEL',
        category : 'FURNITURE',
        linkTag: 'C207'
        ,detail:{
        contents:['detail1.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '방박',
        studentNumber: '19102421',
        nameOfWork: 'SOR TEA SET',
        category : 'PRODUCT',
        linkTag: 'A109'
        ,detail:{
        contents:['detail1.jpg', 'detail2.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '송민영',
        studentNumber: '19110080',
        nameOfWork: 'DABVIL,',
        category : 'PRODUCT',
        linkTag: 'A110'
        ,detail:{
        contents:[],
        project:{
            ko:{
                title: '',
                subTitle: '',
                subscript: ''
            },
            en:{
                title: '',
                subTitle: '',
                subscript: ''
            }
        },
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '송선우',
        studentNumber: '18100862',
        nameOfWork: '삼수터 (嘇秀터)',
        category : 'SPACE',
        linkTag: 'C103'
        ,detail:{
        contents:[],
        project:{
            ko:{
                title: '',
                subTitle: '',
                subscript: ''
            },
            en:{
                title: '',
                subTitle: '',
                subscript: ''
            }
        },
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '양다인',
        studentNumber: '17100932',
        nameOfWork: "CERE'S",
        category : 'PRODUCT',
        linkTag: 'A111'
        ,detail:{
        contents:['detail1.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '양다혜',
        studentNumber: '18100872',
        nameOfWork: 'Addible_',
        category : 'FURNITURE',
        linkTag: 'C208'
        ,detail:{
        contents:['detail1.jpg', 'detail2.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },

        {exhibitor: '이가영',
        studentNumber: '18100880',
        nameOfWork: 'vvid.',
        category : 'PRODUCT',
        linkTag: 'A112'
        ,detail:{
        contents:['detail1.jpg', 'detail2.gif', 'detail3.gif', 'detail4.gif', 'detail5.webp'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '이민선',
        studentNumber: '18100883',
        nameOfWork: 'Moment',
        category : 'FURNITURE',
        linkTag: 'C209'
        ,detail:{
        contents:['detail1.jpg', 'detail2.webp','detail3.jpg', 'detail4.gif','detail5.gif', 'detail6.gif','detail7.gif', 'detail8.jpg','detail9.jpg', 'detail10.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '이유진',
        studentNumber: '17100885',
        nameOfWork: 'PSYCHE : In To The Psyche',
        category : 'SPACE',
        linkTag: 'C104'
        ,detail:{
        contents:[],
        project:{
            ko:{
                title: '',
                subTitle: '',
                subscript: ''
            },
            en:{
                title: '',
                subTitle: '',
                subscript: ''
            }
        },
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '이정무',
        studentNumber: '17100886',
        nameOfWork: 'ARM CHAIR',
        category : 'FURNITURE',
        linkTag: 'C210'
        ,detail:{
        contents:[],
        project:{
            ko:{
                title: '',
                subTitle: '',
                subscript: ''
            },
            en:{
                title: '',
                subTitle: '',
                subscript: ''
            }
        },
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '이지향',
        studentNumber: '18100890',
        nameOfWork: 'DMN',
        category : 'FURNITURE',
        linkTag: 'C211'
        ,detail:{
        contents:['detail1.gif', 'detail2.jpg','detail3.gif', 'detail4.jpg','detail5.jpg', 'detail6.gif','detail7.jpg', 'detail8.gif'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },

        {exhibitor: '이채린',
        studentNumber: '18100949',
        nameOfWork: 'I:washer',
        category : 'PRODUCT',
        linkTag: 'A113'
        ,detail:{
        contents:['detail1.jpg', 'detail2.gif', 'detail3.jpg', 'detail4.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '이혜원',
        studentNumber: '17100943',
        nameOfWork: 'Slow (e)Motion',
        category : 'SPACE',
        linkTag: 'C105'
        ,detail:{
        contents:['detail1.jpg','detail2.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '장희수',
        studentNumber: '18100897',
        nameOfWork: "LOUVIN'",
        category : 'FURNITURE',
        linkTag: 'C212'
        ,detail:{
        contents:['https://vimeo.com/770344521','detail1.jpg', 'detail2.jpg','detail3.gif', 'detail4.jpg', 'https://vimeo.com/770346088','detail5.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '전예주',
        studentNumber: '18100898',
        nameOfWork: '나비손 모듈러',
        category : 'FURNITURE',
        linkTag: 'C213'
        ,detail:{
        contents:['detail1.jpg','detail2.gif', 'detail3.jpg', 'detail4.gif', 'detail5.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },

        {exhibitor: '정나은',
        studentNumber: '19100908',
        nameOfWork: 'Karrie',
        category : 'PRODUCT',
        linkTag: 'A114'
        ,detail:{
        contents:['detail1.jpg', 'https://vimeo.com/user169049703/karrieintro', 'detail2.jpg', 'https://vimeo.com/user169049703/karrieflow', 'detail3.png', 'detail4.png','detail5.jpg', 'https://vimeo.com/user169049703/pickyourkarrie', 'detail6.jpg','detail7.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },

        {exhibitor: '조민형',
        studentNumber: '19100020',
        nameOfWork: '교통소외지역 버스정류장',
        category : 'SPACE',
        linkTag: 'C106'
        ,detail:{
        contents:['detail1.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },

        {exhibitor: '조하은',
        studentNumber: '',
        nameOfWork: '홈 스튜디오 다기능 가구',
        category : 'FURNITURE',
        linkTag: 'C214'
        ,detail:{
        contents:['detail1.jpg', 'detail2.gif', 'detail3.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },

        {exhibitor: '주서형',
        studentNumber: '18101034',
        nameOfWork: 'île',
        category : 'PRODUCT',
        linkTag: 'A115'
        ,detail:{
        contents:['detail1.jpg', 'detail2.jpg', 'detail3.jpg','detail4.jpg','detail5.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '차이슈이',
        studentNumber: '17102273',
        nameOfWork: 'Fruit Wine Maker',
        category : 'PRODUCT',
        linkTag: 'A116'
        ,detail:{
        contents:['detail1.jpg', 'detail2.jpg', 'detail3.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '채효림',
        studentNumber: '16101103',
        nameOfWork: '드라마 촬영 현장 밀착형 협업툴 FLUS',
        category : 'PRODUCT UX',
        linkTag: 'B105'
        ,detail:{
        contents:['detail1.jpeg', 'detail2.jpg', 'detail3.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '최동준',
        studentNumber: '16100992',
        nameOfWork: 'BADGER',
        category : 'PRODUCT',
        linkTag: 'A117'
        ,detail:{
        contents:['https://vimeo.com/769899792','detail1.jpg', 'detail2.jpg', 'https://vimeo.com/769898605', 'detail3.jpg','detail4.jpg','detail5.jpg', 'https://vimeo.com/769898096','detail6.jpg','detail7.jpg','https://vimeo.com/769900290', 'detail8.jpg','detail9.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '최동현',
        studentNumber: '16100993',
        nameOfWork: 'LIGHT WAVE',
        category : 'PRODUCT',
        linkTag: 'A118'
        ,detail:{
        contents:['detail1.jpg', 'detail2.jpg', 'detail3.jpg', 'detail4.jpg', 'https://youtu.be/IP7FK9c6DIE'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '최민경',
        studentNumber: '22512040',
        nameOfWork: '하지 기능 장애인을 위한 하체 근력 강화 운동기구',
        category : 'PRODUCT',
        linkTag: 'A119'
        ,detail:{
        contents:[],
        project:{
            ko:{
                title: '',
                subTitle: '',
                subscript: ''
            },
            en:{
                title: '',
                subTitle: '',
                subscript: ''
            }
        },
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '최원정',
        studentNumber: '',
        nameOfWork: 'Kinetic Hexagon',
        category : 'PRODUCT',
        linkTag: 'A120'
        ,detail:{
        contents:['detail1.jpg', 'detail2.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },
        {exhibitor: '최지혜',
        studentNumber: '19100921',
        nameOfWork: 'BoBo',
        category : 'PRODUCT',
        linkTag: 'A121'
        ,detail:{
        contents:['detail1.png'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },

        {exhibitor: '하상윤',
        studentNumber: '13185404',
        nameOfWork: 'SWIFTER',
        category : 'PRODUCT',
        linkTag: 'A122'
        ,detail:{
        contents:['detail1.jpg'],
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        }
        },

        {exhibitor: '허준석',
        studentNumber: '20110093',
        nameOfWork: '.Car-e',
        category : 'SPACE',
        linkTag: 'C107'
        ,detail:{
        contents:[],
        project:{
            ko:{
                title: '',
                subTitle: '',
                subscript: ''
            },
            en:{
                title: '',
                subTitle: '',
                subscript: ''
            }
        },
        project:{
            ko:{
                title: '',
                subTitle: '',
                subscript: ''
            },
            en:{
                title: '',
                subTitle: '',
                subscript: ''
            }
        },
        profile:{
        ko:{
            exhibitor: '',
            introduce: ''
        }
        ,
        en:{
            exhibitor: '',
            introduce: ''
        },
        
        sns:{
            mail: null,
            behance: null,
            design: null,
            instagram: null
        }
        }
        },
        }
    ]
        }
    },
    created(){
        this.getStudent()
    },
    mounted(){
    },
    watch:{
    },
    methods:{
        checkLength(v){
            this.byte = 300 - v.length;
        },
        addStudent(){
            setTimeout(() => {
                this.getStudent()
            }, 300);
        
            this.$axios.post('/api/student/add', this.works[(this.countStudent-1)]).then((response) => {
                console.log(response)
            }).catch((error) => { 
                console.log(error)
            });
        },
        editStudent(v){
            setTimeout(() => {
                    this.closePopup('edit');
            }, 300);
            this.$axios.post(`/api/student/edit`, this.selectData)
            .then( (response) => {
                console.log(response);
            }).catch( (error) => {
                console.log(error);
            });
        },
        deleteStudent(id){
             this.$axios.$get(`/api/student/delete/`+ id).then(data =>{
                this.closePopup('delete');
            }).catch((error)=>{
                console.log(error.data)
            });

            setTimeout(() => {
                this.getStudent()
            }, 300);
        },
        getStudent(){
            this.$axios.$get(`/api/student/list`).then(datas =>{
                // console.log(datas)
                this.studentList = datas;
            }).catch((error)=>{
                console.log(error.data)
            });
        },
        openPopup(v, student){
            this.popup.open = true;
            this.popup[v] = true;
            this.selectData = student;
        },
        closePopup(v){
            this.popup.open = false;
            this.popup[v] = false;
            this.selectData = null
        }

    }
}
</script>
