<template>
    <div class="container store mb">
        <section>
            <nuxt-link :to='"/mb/store"'>
                <img :src="require('@/assets/img/mb/store/btn.svg')" >
            
            </nuxt-link>
        </section>
    </div>
</template>

<style lang='scss'>
.store.mb{
    width: 100%;
    height: 216vw;
    background-color: #D9D9D9;
    section{
        width: 100%;
        height: 100%;
        position: relative;
        background: url('@/assets/img/mb/store/x-bg.svg') no-repeat center;
        background-size: cover;
        a{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-60%, -50%);
        }
    }
}
</style>

<script>
export default {
    name: 'store',
    layout: 'mobile',
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
