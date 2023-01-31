<template>
</template>

<style lang='scss' >
</style>

<script>
export default {
    name: 'worksIntro',
    data(){
        return{
        }
    },
    created(){
        var tag = this.$route.params.id;

        if(this.$device.isMobile){
            this.$router.push({ path: '/mb/works/'+ tag });
        }else{
            this.$router.push({ path: '/pc/works/'+ tag });
        }
    },
    methods:{
    }
}
</script>
