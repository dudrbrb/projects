<template>
    <nav class="top-nav" >
        <div class="logo">
            <nuxt-link :to="'/mb/main'">
                <img v-if="$route.path.includes('intro')" :src="require(`@/assets/img/mb/title/intro.svg`)" alt="logo">
                <img v-if="$route.path.includes('main')" :src="require(`@/assets/img/mb/title/main.svg`)" alt="logo">
                <img v-if="$route.path.includes('message')" :src="require(`@/assets/img/mb/title/message.svg`)" alt="logo">
                <img v-if="$route.path.includes('place')" :src="require(`@/assets/img/mb/title/place.svg`)" alt="logo">
                <img v-if="$route.path.includes('store')" :src="require(`@/assets/img/mb/title/store.svg`)" alt="logo">
                <img v-if="$route.path.includes('works')" :src="require(`@/assets/img/mb/title/works.svg`)" alt="logo">
            </nuxt-link>
        </div>
        <div class="menu-btn" @click="menuOpen = !menuOpen" :class="{'close': menuOpen}">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul :class="{open: menuOpen}">
            <li><nuxt-link class="horiz-lt" :to="'/mb/main'">ABOUT</nuxt-link></li>
            <li><nuxt-link class="horiz-lt" :to="'/mb/works'">WORKS</nuxt-link></li>
            <li><nuxt-link class="horiz-lt" :to="'/mb/message'">MESSAGE</nuxt-link></li>
            <li><nuxt-link class="horiz-lt" :to="'/mb/place'">PLACE</nuxt-link></li>
            <li><nuxt-link class="horiz-lt" :to="'/mb/store'">STORE</nuxt-link></li>
            <li><nuxt-link class="horiz-lt" :to="'https://www.instagram.com/snad_id/'">INSTAGRAM</nuxt-link></li>
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
    height: 80px;
    width: 100%;
    max-width: 540px;
    padding: 20px 15px ;
    background-color: #000;
    margin:0 auto;
    left: 0;
    right: 0;
    .logo{
        margin-top: auto;
        a{
            @include flex();
        }
        img{
            height: 30px;
        }
    }
    .menu-btn{
        width: 50px;
        height: 50px;
        margin-top: auto;
        @include flex(center, flex-end, column);
        cursor: pointer;
        div{
            width: 25px;
            height: 2px;
            background-color: #fff;
            &+div{
                margin-top: 10px;
            }
        }
        &.close{
            margin-top: 5px;
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
        top: 80px;
        width: 100%;
        max-width: 540px;
        height: 0%;
        background-color: #000;
        margin:0 auto;
        left: 0;
        right: 0;
        overflow: hidden;
        transition: all 0.4s;
        &.open{
            height: 100%;
        }
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
        top: 80px;
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
            menuOpen: false,
            nowPath: null,
        }
    },
    created() {
        this.getPath();
    },
    mounted(){
        this.getPath();
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
    },
    watch:{
        '$route' (to, from) {
			this.menuOpen = false;
            this.getPath();
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
