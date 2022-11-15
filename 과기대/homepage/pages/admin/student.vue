<template>
    <div class="container admin pc">
        <h1 class="horiz">STUDENT ADMIN</h1>
        <section id="addForm">
            <div>
                <label>넘버링</label>
                <input type="text" v-model="addData.linkTag">
            </div>
            <div>
                <label>이름</label>
                <input type="text" v-model="addData.exhibitor">
            </div>
            <div>
                <label>학번</label>
                <input type="text" v-model="addData.studentNumber">
            </div>
            <div>
                <label>작품명</label>
                <input type="text" v-model="addData.nameOfWork">
            </div>
            <div>
                <label>카테고리</label>
                <select :options="categorys" v-model="addData.category">
                    <option v-for='cate in categorys' :value="cate" :key="cate">{{cate}}</option>
                </select>
            </div>
            <div class="btn" @click="addStudent">등록</div>
        </section>
        <section id="list">
            <ul>
                <li v-for="(student, idx) in studentList" :key="`student${idx}`" >
                    <div class="txt-box">
                        <p><b>{{student.linkTag}}</b> {{student.exhibitor}} ({{student.studentNumber}}) : {{student.category}} / {{student.nameOfWork}}</p>
                    </div>
                    <div class="btn-box">
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
                    <input type="text" v-model="selectData.exhibitor">
                </div>
                <div class="input-box">
                    <label>학번</label>
                    <input type="text" v-model="selectData.studentNumber">
                </div>
                <div class="input-box">
                    <label>작품명</label>
                    <input type="text" v-model="selectData.nameOfWork">
                </div>
                <div class="input-box">
                    <label>카테고리</label>
                    <select :options="categorys" v-model="selectData.category">
                        <option v-for='cate in categorys' :value="cate" :key="cate">{{cate}}</option>
                    </select>
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
    #addForm{
        @include flex(space-between, center, column);
        width: 95%;
        max-width: 300px;
        margin-top: 30px;
        div{
            width: 100%;
            margin-bottom: 10px;
            @include flex(space-between);
            &.btn{
                color: #fff;
                background-color: #3392ff;
                max-width: 80px;
                text-align: center;
                justify-content: center;
                padding: 10px;
                border-radius: 10px;
                margin-top: 20px;
                cursor: pointer;
            }
        }
        label{
            color: #fff;
        }
        input, select{
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 5px;
            color: #fff;
            width: 200px;
            option{
                padding: 5px;
                line-height: 100px;
            }
        }
    }
    #list{
        width: 95%;
        max-width: 900px;
        margin: 50px auto 0 auto;
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
            transform: translate(-50%, -55%);
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
            @include flex(flex-start, flex-start, column);
            width: 90%;
            max-width: 400px;
            background-color: #fff;
            border-radius: 20px;
            padding: 20px 20px 10px 20px;
            .input-box{
                width: 100%;
                margin-bottom: 10px;
                label{
                    min-width: 100px;
                    display: inline-block;
                }
                input, select{
                    border: 1px solid #333;
                    padding: 5px;
                    width: 200px;
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
            popup: {
                open: false,
                edit: false,
                delete: false
            },
            addData:{
                exhibitor: null,
                studentNumber: null,
                nameOfWork: null,
                category: null,
                linkTag: null
            },
            categorys:['PRODUCT', 'PRODUCT UX', 'FURNITURE', 'MOBILITY', 'SPACE']
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
                // this.addData.exhibitor=null;
                // this.addData.studentNumber=null;
                // this.addData.nameOfWork=null;
                // this.addData.category= null;
                // this.addData.linkTag=null;

            }, 300);
            
             this.$axios.post('/api/student/add', this.addData).then((response) => {
                console.log(response)
            }).catch((error) => { 
                console.log(error)
            });
        },
        editStudent(){
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
                console.log(datas)
                this.studentList = datas;
            }).catch((error)=>{
                console.log(error.data)
            });
        },
        openPopup(v, student){
            this.popup.open = true;
            this.popup[v] = true;
            this.selectData = student
        },
        closePopup(v){
            this.popup.open = false;
            this.popup[v] = false;
            this.selectData = null
        }

    }
}
</script>
