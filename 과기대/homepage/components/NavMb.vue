<template>
    <nav class="top-nav" >
        <div class="logo">
            <nuxt-link :to="'/pc/main'">
                <img :src="require(`@/assets/img/mb/title/${nowPath}.png`)" alt="logo">
            </nuxt-link>
        </div>
        <div class="menu-btn" @click="menuOpen = !menuOpen" :class="{'close': menuOpen}">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul v-if="menuOpen">
            <li><nuxt-link class="horiz-lt" :to="'/mb/main'">ABOUT</nuxt-link></li>
            <li><nuxt-link class="horiz-lt" :to="'/mb/works'">WORKS</nuxt-link></li>
            <li><nuxt-link class="horiz-lt" :to="'/mb/message'">MESSAGE</nuxt-link></li>
            <li><nuxt-link class="horiz-lt" :to="'/mb/place'">PLACE</nuxt-link></li>
            <li><nuxt-link class="horiz-lt" :to="'/mb/store'">STORE</nuxt-link></li>
        </ul>
        <img :src="require('@/assets/img/mb/grad-top.png')" class="gradient">
    </nav>
</template>

<style lang='scss' scoped>
.top-nav{
    position: fixed;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 130px;
    width: 100%;
    max-width: 540px;
    padding: 20px 15px ;
    background-color: #000;

    .logo{
        margin-top: auto;
        img{
            height: 35px;
        }
    }
    .menu-btn{
        width: 50px;
        height: 50px;
        margin-top: auto;
        @include flex(center, center, column);
        cursor: pointer;
        div{
            width: 25px;
            height: 2px;
            background-color: #fff;
            transition: all 0.4s;
            &+div{
                margin-top: 10px;
            }
        }
        &.close{
            margin-top: 30px;
            div:nth-child(1){
               transform: rotate(-45deg);
               margin-top: 10px;
               width: 30px;
            }
            div:nth-child(2){
                transform: scaleX(0);
            }
            div:nth-child(3){
                width: 30px;
                margin-top: -14px;
                transform: rotate(45deg);
            }
        }
    }
    ul{
        position: fixed;
        top: 130px;
        left: 0;
        width: 100%;
        max-width: 540px;
        height: 100%;
        background-color: #000;
        li{
            a{
                color: #fff;
                font-weight: 100;
                font-size: 28px;
                line-height: 34px;
                padding: 20px 100px 0 20px;
                display: block;
                &.nuxt-link-active{
                    color: #F5FF33;
                }
            }
        }
    }
    .gradient{
        width: 100%;
        max-width: 540px;
        top: 130px;
        left: 0;
        position: absolute;
    }
}
</style>

<script>
export default {
    name: 'TopNav',
    data(){
        return{
            scrollTop: false,
            nowPath: 'intro',
            menuOpen: false
        }
    },
    mounted(){
        this.getPath();
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
    },
    watch:{
        '$route' (to, from) {
			this.menuOpen = false;
		}
    },
    methods: {
		handleScroll(){
			window.scrollY > 10 ? this.scrollTop = true : this.scrollTop = false
		},
        getPath(){
            var path = this.$route.path.split('/');
            this.nowPath = path[path.length - 1];
            if(this.nowPath == 'detail') this.nowPath = 'works';
        }
    }
}
</script>
