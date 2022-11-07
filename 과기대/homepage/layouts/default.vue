<template>
    <v-app>
      <TopNav  v-if="$route.path !== '/pc/intro'"/>
      <Nuxt id="page"/>
      <div class="scroll-up" @click="scrollTop" v-if="$route.path !== '/pc/intro'"></div>
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
.scroll-up{
    width: 40px;
    height: 40px;
    background: url('@/assets/img/top.png') no-repeat center;
    background-size: contain;
    position: fixed;
    bottom: 50px;
    right: 30px;
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
  methods:{
    scrollTop(){
        // window.scrollTo(0, 0)
        var target = this.$el.querySelector('.container');
        target.scrollIntoView({behavior: "smooth", block: "start"}) 
    }
  }
}
</script>
