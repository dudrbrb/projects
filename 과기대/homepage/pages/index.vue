<template>
</template>

<style lang='scss' >
</style>

<script>
export default {
    name: 'index',
    data(){
        return{
        }
    },
    created(){
        if(this.$device.isMobile){
            this.$router.push({ path: '/mb/intro' });
        }else{
            this.$router.push({ path: '/pc/intro' });
        }
    },
    methods:{
    }
}
</script>
