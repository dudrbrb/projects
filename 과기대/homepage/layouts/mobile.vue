<template>
    <v-app>
      <TopNav/>
      <Nuxt id="page"/>
      <div class="scroll-up" @click="scrollTop" v-if="$route.path !== '/mb/intro'"></div>
    </v-app>
</template>

<style lang="scss">
#app, .container{
  max-width: 540px !important;
  width: 100%;
  position: relative;
  padding: 0;
  ul{
     padding-left: 0;
  }
}
nav + .container{
  padding-top: 130px ;
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
import TopNav from '@/components/NavMb.vue';

export default {
  name: 'mobile',
  components: {TopNav},
  data () {
    return {
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
