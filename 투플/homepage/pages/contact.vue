<template>
    <div class="container contact-page">
        <section id="section1">
            <h1>문의하기</h1>
        </section>
        <section id="section2">
            <div>
                <div class="contact-info">
                    <h3>문의하기</h3>
                    <p>소비자분들이 안심하고 <br/>
                        드실 수 있도록<br/>
                        최상의 품질을 보장합니다.
                    </p>
                </div>
                
                <div class="form">
                    <form ref="form" @submit.prevent="sendEmail($event)">
                        <div class="input-box">
                            <label>성함</label>
                            <v-text-field label="Name" outlined  name="userName" ></v-text-field>
                        </div>
                        <div class="input-box">
                            <label>이메일</label>
                            <v-text-field label="E-mail"  outlined  name="userTel" ></v-text-field>
                        </div>
                        <div class="input-box">
                            <label>연락처</label>
                            <v-text-field label="Tel"  outlined  name="userEmail" ></v-text-field>
                        </div>
                        <div class="input-box">
                            <label>문의내용</label>
                            <v-textarea label="Contents"  outlined  name="message" ></v-textarea>
                        </div>
                        <v-btn depressed elevation="2" rounded dark > <input type="submit" value="문의 남기기"></v-btn>
                    </form>

                    <p>문의를 남겨주시면 담당자의 이메일로 발송됩니다.<br/>
                        이메일 확인 후, 입력하신 번호로 연락을 드리겠습니다. 감사합니다 :)
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang='scss' >
$gray: #f5f5f5;
@mixin center ($justify : center, $align: center, $direction: row){
    display: flex;
    justify-content: $justify;
    align-items: $align;
    flex-direction: $direction;
}
@keyframes show{
    0%{
        opacity: 0;
        transform: translateY(50px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
}
@mixin beforeOp (){
    opacity: 0;
    transform: translateY(50px);
}
@mixin afterOp ($delay : 0s){
    animation: show 0.4s forwards;
    animation-delay: $delay;
}
.contact-page{
    section{
        padding: 100px 0;
        *{
            transition: all 0.4s;
        }

    }
    #section1{
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('@/assets/img/contact/bg.webp') no-repeat center;
        h1{
            color: #fefefe;
            font-size: 40px;
            font-weight: 100;
            text-align: center;
        }
    }
    #section2{
        >div{
            max-width: 1200px;
            left: 0;
            right: 0;
            margin: 0 auto;
            display: flex;
            justify-content:flex-start;
            align-items: flex-start;
        }
        .contact-info{
            width: 25%;
            h3{
                font-size: 28px;
                margin-bottom: 30px;
            }
            p{
                font-size: 20px;
                line-height: 28px;
            }
        }
        .form{
            width: 85%;
            padding-left: 5%;
            border-left: 1px solid #383838;
            .input-box{
                display: flex;
                label{
                    width: 100px;
                }
                .v-text-field__details{
                    margin-bottom: 0;
                }
            }
            p{
                font-size: 20px;
                line-height: 28px;
                margin-top: 50px;
                margin-left: 100px;
            }
            button{
                margin-left: 100px;
                border-radius: 30px;
                height: 60px;
                span{
                    font-size: 20px;
                }
                input{
                    padding: 0 30px;
                    height: 60px;
                    width: 100%;
                }
            }
        }
    }

}

@media screen and (max-width: 1024px) {
.contact-page{
    section{
        padding: 100px 30px;
    }
    #section2{
        >div{
            flex-direction: column;
        }
        .contact-info{
            width: 100%;
            text-align: center;
            h3{
                margin-bottom: 10px;
            }
            p{
                br:first-child{
                    display: none;
                }
            }
        }
        .form{
            border: none;
            padding: 0;
            width: 100%;
            margin-top: 30px;
            button{
                margin: 0 auto;
                display: block;
            }
            p{
                margin-left: 0;
            }
        }
    }
}
}

@media screen and (max-width: 540px) {
.contact-page {
    #section1{
        height: 350px;
        background-size: cover;
    }
    #section2 .form {
        .input-box {
            flex-direction: column;
            label{
                width: 100%;
                margin-bottom: 10px;
            }
        }
        p{
            font-size: 16px;
            line-height: 22px;
            word-break: keep-all;
        }
    }
}
}
</style>

<script>
import emailjs from '@emailjs/browser';
export default {
    name: 'ContactPage',
    data(){
        return{
        }
    },
    mounted(){
    },
    methods:{
        sendEmail(e){
            emailjs.sendForm('twople', 'twople-template', e.target, '0LwGwVxuSI4Z3XWi5')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
        }
    }
}
</script>
