<template>
    <v-app>
      <TopNav />
      <Nuxt id="page"/>
      <Map />
      <Footer />
    </v-app>
</template>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: "KoPubDotum", "Malgun Gothic", "맑은 고딕",
    "Apple SD Gothic Neo", "돋움", dotum, sans-serif;
    /* Prevent font scaling in landscape */
    -webkit-text-size-adjust: none; /*Chrome, Safari, newer versions of Opera*/
    -moz-text-size-adjust: none; /*Firefox*/
    -ms-text-size-adjust: none; /*Ie*/
    -o-text-size-adjust: none; /*old versions of Opera*/
    color: #333;
    outline: none;
    font-size: 22px;
  }
  li, a{
    color: #333;
    list-style: none;
}
a{
  cursor: pointer;
}
h1, h2, h3, h4, h5, h6{
  font-family: "RIDIBatang", "Malgun Gothic", "맑은 고딕",
  "Apple SD Gothic Neo", "돋움", dotum, sans-serif;
  font-size: 24px;
}
.container{
  max-width: 3000px !important;
  position: relative;
  padding: 0;
}

.popup-wrapper{
  background-color: rgba($color: #333, $alpha: 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  .popup{
    position: relative;
    .close-popup{
      width: 40px;
      height: 40px;
      background: url('@/assets/img/x.png') no-repeat center;
      background-size: contain;
      position: absolute;
      top: 0;
      right: -70px;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 540px) {
*{
  font-size: 18px;
}
.popup-wrapper{

  .popup{
    max-width: 95%;
    img{
      width: 100%;
    }
    .close-popup{
      top: -60px;
      right: 0px;
    }
  }
}
}
</style>
<script>
import TopNav from '@/components/Nav.vue';
import Map from '@/components/Map.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {TopNav, Map, Footer},
  data () {
    return {
    }
  }
}
</script>
