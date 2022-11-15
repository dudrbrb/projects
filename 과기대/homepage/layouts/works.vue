<template>
    <v-app>
      <TopNav />
      <Nuxt id="page" />
      <div class="scroll-up-pc" @click="scrollTop"></div>
    </v-app>
</template>

<style lang="scss">
.container.works-detail{
  position: relative;
  padding: 0;
  &.pc{
    max-width: 3000px !important;
  }
  &.mb{
    max-width: 540px !important;
  }
}
</style>
<script>
import TopNav from '@/components/Nav.vue';

export default {
  name: 'WorksLayout',
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
