<template>
    <div class="container message mb">
        <section id="list">
            <ul>
                <li v-for="(msg, idx) in messageList" :key="`message${idx}`" >
                    <b>{{msg.writer}}</b>
                    <div>
                        <p v-if='recent == msg._id' >
                            <vue-typer 
                                :text='msg.message'  
                                :repeat='0'
                                :type-delay='180'
                                :pre-erase-delay='400'
                            ></vue-typer>
                        </p>
                        <p v-else>
                            {{msg.message}}
                        </p>
                        
                        <span class="time">{{msg.date}} / {{msg.time}}</span>
                    </div>
                </li>
            </ul>
        </section>
        <section id="form">
            <input type="text" name="writer" placeholder="이름" v-model="sendData.writer">
            <div class="text-box">
                <input type="text" name="message" v-model="sendData.message" id="message" cols="30" rows="10" placeholder="방명록을 작성해주세요." @input="checkLength($event.target.value)" maxlength="300" /> 
                <div class="horiz" @click="sendMessage">SEND</div>
            </div>
        </section>

    </div>
</template>

<style lang='scss'>
$yellow: #F5FF33;
.message.mb{
    width: 100%;
    height: 100%;
    background-color: #000;
    position: relative;
    b, p, span{
        color: #fff;
    }
    #list{
        width: 100%;
        @include flex(flex-start, center, column);
        margin-bottom: 170px;
        margin-top: 10px;
        ul{
            width: 100%;
            margin-top: -15px;
            padding-left: 0;
            li{
                @include flex(flex-start, flex-start);
                width: 100%;
                padding: 13px 15px;
                border-bottom: 0.5px solid #ffffff80;
                b{
                    width: 80px;
                    min-width: 80px;
                    font-size: 16px;
                    line-height: 200%;
                    word-break: break-all;
                }
                p, &.char{
                    font-size: 16px;
                    line-height: 140%;      
                    margin-bottom: 0;
                    width: 100%;
                    height: auto;
                    word-break: break-all
                }
                span.time{
                    font-size: 14px;
                    margin-top: 5px;
                    display: block;
                    width: 100%;
                }
               
                span.right, span.caret{
                    max-height: 0;
                    opacity: 0;
                    position: absolute;
                }
            }
        }
    }
    #form{
        @include flex(flex-start, flex-start, column);
        width: 100%;
        padding: 50px 15px 30px;
        position: fixed;
        bottom: 0;
        background-color: #000;
        input{
            width: 120px;
            height: 40px;
            display: inline-block;
            border: 1px solid $yellow;
            padding: 5px;
            color: #fff;
            font-size: 14px;
            line-height: 214%;
            &::placeholder{
                color: $yellow;
            }
        }
        .text-box{
            @include flex(space-between);
            flex-wrap: nowrap;
            width: 100%;
            margin-top: 10px;
            input{
                width: 85%;
            }
        }
        .horiz{
            background-color: $yellow;
            font-size: 14px;
            line-height: 45px;
            text-align: right;
            letter-spacing: -0.01em;
            min-width: 45px;
            min-height: 45px;
            border-radius: 50%;
            text-align: center;
            cursor: pointer;
        }

    }

    .vue-typer span.left{
        display: inline-block;
    } 
    .vue-typer .custom.char{
        color: #000;
    }
    .vue-typer .custom.char.typed {
        color: #fff;
    }
    .vue-typer .custom.caret.selecting {
    display: inline-block;
    background-color: #fff;
    }
}
</style>

<script>
import { VueTyper } from 'vue-typer'
export default {
    name: 'message',
    layout: 'mobile',
    components:{VueTyper},
    data(){
        return{
            messageList: null,
            byte: 300,
            page: 0,
            nowPage: 1,
            sendData: {
                writer: null,
                message: null,
                date: null,
                time: null
            },
             recent : null,
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
            this.sendData.date = year + '-' + month + '-' + day;
            this.sendData.time = hour + ' : ' + min + " '" + sec + " ''" + msec;
            
            // this.messageList.unshift(this.sendData)
        },
        sendMessage(){
            if(this.sendData.writer == null) return alert('이름을 입력해주세요.')
            if(this.sendData.message == null) return alert('방명록을 작성해주세요.')
            
            this.getDay();
            setTimeout(() => {
                this.sendData.writer = null;
                this.sendData.message = null;
                this.byte = 300;
                this.getMessages()
             
            }, 300);
            
            this.$axios.post('/api/message/add', this.sendData)
            .then((response) => {
            }).catch((error) => { 
                console.log(error)
            });
        },
        getMessages(){
            this.$axios.$get(`/api/message/list`).then(datas =>{
                this.messageList = datas.reverse();
                this.page = Math.ceil(this.messageList.length / 6);
                setTimeout(() => {
                    var list = this.$el.querySelector('#list ul'); 
                    window.scrollTo({ left: 0, top: list.scrollHeight, behavior: "smooth" });
                    this.recent = datas[datas.length-1]._id;
                }, 300);
                
            }).catch((error)=>{
                console.log(error.data)
            });
        }


    }
}
</script>
