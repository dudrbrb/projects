<template>
    <div class="container store pc" >
        <div class="buy-button">
            <div class="text">
                <img :src="require('@/assets/img/pc/store/arrow.svg')">
                <p class="horiz">BUY</p>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
.store.pc{
    background-color: #D9D9D9;
    width: 100%;
    height: 100%;
    @include flex();
    .buy-button{
        background: url('@/assets/img/pc/store/icon.svg') no-repeat center;
        width: 400px;
        height: 340px;
        @include flex(center, center, column);
        margin: -80px 0 0 -30px;

        .text{
            @include flex(center, center, column);
            margin: 110px 0 0 80px;
            cursor: pointer;
            p{
                color: #F5FF33;
                font-weight: 500;
                font-size: 36px;
                line-height: 43px;
                margin-top: 20px;
            }
        }
    }
}
</style>

<script>
export default {
    name: 'store',
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
