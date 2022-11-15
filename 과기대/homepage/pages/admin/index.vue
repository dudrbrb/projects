<template>
    <div class="container admin pc">
            <h1 class="horiz">MESSAGE ADMIN</h1>
        <section id="list">
            <ul>
                <li v-for="(msg, idx) in messageList" :key="`message${idx}`" v-if="idx >= (6*(nowPage-1)) && idx < (6*nowPage) " >
                    <div class="txt-box">
                        <b>{{msg.writer}}</b>
                        <p>{{msg.message}}
                            <span>{{msg.date}} / {{msg.time}}</span>
                        </p>
                    </div>
                    <div class="btn-box">
                        <div class="edit" @click="openPopup('edit', msg)">수정하기</div>
                        <div class="delete" @click="openPopup('delete', msg)">삭제하기</div>
                    </div>
                </li>
            </ul>
            <div class='pagination'>
                <span :class="{act : nowPage == n}" v-for="n in page" 
                @click="nowPage = n"
                :key="`pagination${n}`"></span>
            </div>
            
        </section>
        <section id="popup" v-if="popup.open">
            <article id="form" v-if="popup.edit == true && selectData !== null">
                <input type="text" name="writer" v-model="selectData.writer">
                <div class="textarea-box">
                    <textarea name="message" v-model="selectData.message" id="message" cols="30" rows="10" placeholder="방명록을 작성해주세요." @input="checkLength($event.target.value)" maxlength="300"> </textarea>
                    <span>{{byte}} Byte</span>
                </div>
                <div class="btn-box">
                    <div class="edit-ok" @click="editMessage">수정하기</div>
                    <div class="close" @click="closePopup('edit')">닫기</div>
                </div>
            </article>
            <article id='alert' v-if="popup.delete == true && selectData !== null">
                <p><b>{{selectData.writer}}</b>님의 메세지를 삭제하시겠습니까? </p>
                <div class="btn-box">
                    <div class="delete-ok" @click="deleteMessage(selectData._id)">삭제하기</div>
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
        margin: 50px auto 0 auto;
        @include flex(flex-start, center, column);
        ul{
            width: 100%;
            margin-top: -15px;
            padding-left: 0;
            min-height: 588px;
            li{
                @include flex(flex-start, flex-start, column);
                width: 100%;
                padding: 15px 0;
                border-bottom: 0.5px solid #ffffff80;
                b{
                    width: 100px;
                    font-size: 18px;
                    line-height: 214%;
                }
                p{
                    font-size: 18px;
                    line-height: 214%;
                    margin-bottom: 0;
                    width: 100%;
                    height: auto;
                    word-break: break-all
                }
                span{
                    font-size: 15px;
                    line-height: 190%;
                }
                p, span{
                    width: 100%;
                    display: block;
                }
                >div{
                    @include flex(flex-start, flex-start);

                }
                .btn-box{
                    width: 100%;
                    margin-top: 20px;
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
            max-width: 600px;
            background-color: #fff;
            border-radius: 20px;
            padding: 20px;
            input, textarea{
                border: 1px solid #333;
                padding: 10px;
            }
            input{
                margin-bottom: 20px;
                width: 300px;
                height: 62px;
            }
            .textarea-box{
                width: 100%;
                height: 180px;
                position: relative;
                textarea{
                    width: 100%;
                    height: 100%;
                    resize: none;
                };
                span{
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    color: $blue;
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
            messageList: null,
            selectData: null,
            editPopup: false,
            byte: 300,
            page: 0,
            nowPage: 1,
            popup: {
                open: false,
                edit: false,
                delete: false
            },
        }
    },
    created(){
        this.getMessages()
    },
    mounted(){
    },
    watch:{
        byte:{
            handler(e){
                if(e > 300){
                    this.selectData.message.substr(0, 300);
                }
            }
        },
    },
    methods:{
        checkLength(v){
            this.byte = 300 - v.length;
        },
        getDay(){
            var today = new Date();
        
            var year = today.getFullYear(),
                month = today.getMonth() + 1,
                day = today.getDate(),
                hour = today.getHours(),
                min = today.getMinutes(),
                sec = today.getSeconds(),
                msec = today.getMilliseconds();

        
            // 월, 일의 경우 한자리 수 값이 있기 때문에 공백에 0 처리
            if(month < 10){ month = '0' + month }
            if(day < 10){ day = '0' + day }
        
            // 최종 포맷 (ex - '2021-10-08')
            this.selectData.date = year + '-' + month + '-' + day;
            this.selectData.time = hour + ' : ' + min + " '" + sec + " ''" + msec;
        },
         editMessage(){
            if(this.selectData.writer == null) return alert('이름을 입력해주세요.')
            if(this.selectData.message == null) return alert('방명록을 작성해주세요.')
            
            this.getDay();
            setTimeout(() => {
                this.closePopup('edit');
            }, 300);

             this.$axios.post(`/api/message/edit`, this.selectData)
            .then( (response) => {
                console.log(response);
            }).catch( (error) => {
                console.log(error);
            });
        },
         deleteMessage(id){
             this.$axios.$get(`/api/message/delete/`+ id).then(data =>{
                this.closePopup('delete');
            }).catch((error)=>{
                console.log(error.data)
            });

            setTimeout(() => {
                this.getMessages()
            }, 300);
        },
        getMessages(){
            this.$axios.$get(`/api/message/list`).then(datas =>{
                console.log(datas)
                this.messageList = datas;
                this.page = Math.ceil(this.messageList.length / 6);
            }).catch((error)=>{
                console.log(error.data)
            });
        },
        openPopup(v, msg){
            this.popup.open = true;
            this.popup[v] = true;
            this.selectData = msg
        },
        closePopup(v){
            this.popup.open = false;
            this.popup[v] = false;
            this.selectData = null
        }

    }
}
</script>
