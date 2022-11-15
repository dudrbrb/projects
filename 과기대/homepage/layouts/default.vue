<template>
    <v-app>
      <TopNav  v-if="$route.name !== 'pc-intro'"/>
      <Nuxt id="page"/>
      <div class="scroll-up-pc" @click="scrollTop" v-if="$route.name !== 'pc-intro'"></div>
    </v-app>
</template>

<style lang="scss">
.container{
  max-width: 3000px !important;
  position: relative;
  padding: 0;
}
nav + .container{
  padding-top: 70px;
}
.scroll-up-pc{
    width: 60px;
    height: 60px;
    background: url('@/assets/img/top.svg') no-repeat center;
    background-size: contain;
    position: fixed;
    bottom: 50px;
    right: 15px;
    z-index: 999;
    cursor: pointer;
}
</style>
<script>
import TopNav from '@/components/Nav.vue';

export default {
  name: 'DefaultLayout',
  components: {TopNav},
  data () {
    return {
    }
  },
  created(){
    var path = this.$route.path;
    var newPath = path.replace('/pc/', '/mb/');
    if(this.$device.isMobile){
        this.$router.push({ path: newPath });
    }
  },
  methods:{
    scrollTop(){
        // window.scrollTo(0, 0)
        var target = this.$el.querySelector('.container');
        target.scrollIntoView({behavior: "smooth", block: "start"}) 
    }
  }
}
</script>
