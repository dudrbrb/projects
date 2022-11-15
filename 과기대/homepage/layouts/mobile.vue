<template>
    <v-app>
      <TopNav/>
      <Nuxt id="page" class="mb"/>
      <!-- <div class="scroll-up" @click="scrollTop" v-if="$route.name !== 'mb-intro'"></div> -->
      <Footer v-if="$route.name !== 'mb-intro' && $route.name !== 'mb-message'"></Footer>
    </v-app>
</template>

<style lang="scss">
.container.mb{
  max-width: 540px !important;
  width: 100%;
  position: relative;
  padding: 0;
  ul{
     padding-left: 0;
  }
}
nav + .container.mb{
  padding-top: 80px ;
}

.scroll-up{
    width: 40px;
    height: 40px;
    background: url('@/assets/img/top.svg') no-repeat center;
    background-size: contain;
    position: fixed;
    bottom: 30px;
    right: 17px;
    z-index: 999;
    cursor: pointer;
}
</style>
<script>
import TopNav from '@/components/NavMb.vue';
import Footer from '@/components/FooterMb.vue';

export default {
  name: 'mobile',
  components: {TopNav, Footer},
  data () {
    return {
    }
  },
  created(){
    var path = this.$route.path;
    var newPath = path.replace('/mb/', '/pc/');
    if(!this.$device.isMobile){
        this.$router.push({ path: newPath });
    }
  },

  methods:{
    scrollTop(){
        var target = this.$el.querySelector('.container');
        target.scrollIntoView({behavior: "smooth", block: "start"}) 
    }
  }
}
</script>
