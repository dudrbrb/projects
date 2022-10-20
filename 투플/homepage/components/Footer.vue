<template>
    <section id="footer">
        <div>
            <ul>
                <li>상호명 : 투뿔</li>
                <li>대표자 : 김준기</li>
                <li class="br">TEL : 1644-5767</li>
                <li >사업자등록번호 : 502-07-65866 2020</li>
                <li>주소 : 대구광역시 동구 동대구로 523 3층 307호</li>
            </ul>
            <p>copyright(c) 2022 twople . All rights reserved</p>
        </div>
    </section>
</template>
<style scoped lang="scss">
#footer{
    background-color: #383838;
    padding: 50px 0;
    >div{
        max-width: 1200px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    ul, li{
        margin-left: 0;
        padding-left: 0;
    }
    p, li{
        color: #fefefe;
        font-size: 16px;
        padding: 0 20px;
        line-height: 16px;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 30px;
        li +li{
            border-left: 1px solid #fefefe;
        }
    }
}
@media screen and (max-width: 1024px) {
    #footer{
        padding: 50px 30px;
        ul{
            width: 700px;
        }
        li{
            line-height: 24px;
            &.br{
                margin-right: auto;
                &+li{
                    border-left: 0;
                }
            }
        }
    }
}
@media screen and (max-width: 540px) {
    #footer{
        padding: 50px 10px;
        ul{
            width:100%;
            flex-direction: column;
            li{
                line-height: 24px;
                padding: 0;
                &+li{
                    border-left: 0;
                }
            }
        }
        p{
            padding: 0;
        }
    }
}
</style>

<script>
    export default {
        name: 'Footer',
        data(){
            return{
            }
        },
        mounted(){
        },
        methods:{
 
           
        }
    }
</script>