<template>
    <div class="container message">
        <section id="list">
            <ul>
                <li v-for="(msg, idx) in messageList" :key="`message${idx}`" v-if="idx >= (6*(nowPage-1)) && idx < (6*nowPage) " >
                    <b>{{msg.writer}}</b>
                    <p>{{msg.message}}
                        <span>{{msg.date}} / {{msg.time}}</span>
                    </p>
                </li>
            </ul>
            <div class='pagination'>
                <span :class="{act : nowPage == n}" v-for="n in page" 
                @click="nowPage = n"
                :key="`pagination${n}`"></span>
            </div>
            
        </section>
        <section id="form">
            <input type="text" name="writer" placeholder="이름" v-model="sendData.writer">
            <div class="textarea-box">
                <textarea name="message" v-model="sendData.message" id="message" cols="30" rows="10" placeholder="방명록을 작성해주세요." @input="checkLength($event.target.value)" maxlength="300"> </textarea>
                <span>{{byte}} Byte</span>
            </div>
            <div class="horiz" @click="sendMessage">SEND</div>
        </section>
        <footer>
            <img :src="require('@/assets/img/pc/main/copyright.png')">
        </footer>
    </div>
</template>

<style lang='scss'>
$yellow: #F5FF33;
.message{
    width: 100%;
    height: 100%;
    background-color: #000;
    position: relative;
    @include flex(space-between);
    b, p, span{
        color: #fff;
    }
    #list{
        width: 60%;
        max-width: 1100px;
        padding-right: 5%;
        margin: 140px 0 auto 90px;
        @include flex(flex-start, center, column);
        ul{
            width: 100%;
            margin-top: -15px;
            padding-left: 0;
            min-height: 588px;
            li{
                @include flex(flex-start, flex-start);
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
    #form{
        @include flex(flex-start, flex-start, column);
        margin: 140px 90px 0 0;
        width: 40%;
        // max-width: ;
        input, textarea{
            border: 1px solid $yellow;
            padding: 10px;
            color: #fff;
            &::placeholder{
                color: $yellow;
            }
        }
        input{
            margin-bottom: 40px;
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
                color: $yellow;
            }
        }
        .horiz{
            background-color: $yellow;
            font-size: 36px;
            line-height: 150px;
            text-align: right;
            letter-spacing: -0.01em;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            text-align: center;
            margin: 50px auto 0;
            cursor: pointer;
            margin-bottom: 100px;
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
            byte: 300,
            page: 0,
            nowPage: 1,
            sendData: {
                writer: null,
                message: null,
                date: null,
                time: null
            },
        }
    },
    async created(){
        // 학생 회원 목록 불러오기
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
        getMessages(){
            this.$axios.$get(`/api/list/message`).then(datas =>{
                this.messageList = datas;
                this.page = Math.ceil(this.messageList.length / 6);
            }).catch((error)=>{
                console.log(error.data)
            });
        }

    }
}
</script>
