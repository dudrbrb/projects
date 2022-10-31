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
                        <div class="delete">삭제하기</div>
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
            <article id="form" v-if="popup.edit && selectData !== null">
                <input type="text" name="writer" placeholder="이름" v-model="selectData.writer">
                <div class="textarea-box">
                    <textarea name="message" v-model="selectData.message" id="message" cols="30" rows="10" placeholder="방명록을 작성해주세요." @input="checkLength($event.target.value)" maxlength="300"> </textarea>
                    <span>{{byte}} Byte</span>
                </div>
                <div class="btn-box">
                    <div class="edit-ok" @click="editMessage">수정하기</div>
                    <div class="close" @click="closePopup('edit')">닫기</div>
                </div>
            </article>
        </section>
        <footer>
            <img :src="require('@/assets/img/pc/main/copyright.png')">
        </footer>
    </div>
</template>

<style lang='scss'>
$blue: #3392ff;
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
        width: 60%;
        max-width: 1100px;
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
                            color: rgb(255, 66, 66);
                            border-color: rgb(255, 66, 66);
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
            height: 60vh;
            background-color: #fff;
            border-radius: 20px;
            padding: 20px;
            input, textarea{
                border: 1px solid #333;
                padding: 10px;
                color: #fff;
            }
            input{
                margin-bottom: 20px;
                width: 300px;
                height: 62px;
            }
            .textarea-box{
                width: 100%;
                height: 480px;
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
    }
    footer{
        position: absolute;
        width: 100%;
        bottom: 25px;
        left: 50%;

    }
}
</style>

<script>
export default {
    name: 'message',
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
            sendData: {
                writer: null,
                message: null,
                date: null,
                time: null
            },
        }
    },
    async created(){
        this.getMessages()
    },

    mounted(){
    },
    watch:{
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
            this.sendData.date = year + '-' + month + '-' + day;
            this.sendData.time = hour + ' : ' + min + " '" + sec + " ''" + msec;
            
            // this.messageList.unshift(this.sendData)
        },
        async sendMessage(){
            if(this.sendData.writer == null) return alert('이름을 입력해주세요.')
            if(this.sendData.message == null) return alert('방명록을 작성해주세요.')
            
            this.getDay();
            setTimeout(() => {
                this.getMessages()
                this.sendData.writer = null;
                this.sendData.message = null;
            }, 300);
            
            await this.$axios.post('/api/add/message', this.sendData)
            .then((response) => {
            }).catch((error) => { 
                console.log(error)
            });
        },
        async editMessage(){
            if(this.sendData.writer == null) return alert('이름을 입력해주세요.')
            if(this.sendData.message == null) return alert('방명록을 작성해주세요.')
            
            this.getDay();
            setTimeout(() => {
                this.editPopup = false
            }, 300);
            
            await this.$axios.post(`/api/edit/message`+ this.selectData._id , this.sendData).then( (response) => {
                console.log(response);
            }).catch( (error) => {
                console.log(error);
            });
            this.cancle('ok');
        },
        getMessages(){
            this.$axios.$get(`/api/list/message`).then(datas =>{
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
