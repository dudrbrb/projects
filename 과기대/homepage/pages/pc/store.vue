<template>
    <div class="container store">
        <div class="buy-button">
            <div class="text">
                <img :src="require('@/assets/img/pc/store/arrow.png')">
                <p class="horiz">BUY</p>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
.store{
    background-color: #D9D9D9;
    width: 100%;
    height: 100%;
    @include flex();
    .buy-button{
        background: url('@/assets/img/pc/store/icon.png') no-repeat center;
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
