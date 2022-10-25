<template>
    <nav class="top-nav" >
        <div class="logo">
            <nuxt-link :to="'/pc/main'">
                <img :src="require(`@/assets/img/mb/title/${nowPath}.png`)" alt="logo">
            </nuxt-link>
        </div>
        <div class="menu-btn" @click="menuOpen = !menuOpen">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul v-if="menuOpen">
            <li><nuxt-link class="horiz-lt" :to="'/pc/main'">ABOUT</nuxt-link></li>
            <li><nuxt-link class="horiz-lt" :to="'/pc/works'">WORKS</nuxt-link></li>
            <li><nuxt-link class="horiz-lt" :to="'/pc/message'">MESSAGE</nuxt-link></li>
            <li><nuxt-link class="horiz-lt" :to="'/pc/place'">PLACE</nuxt-link></li>
            <li><nuxt-link class="horiz-lt" :to="'/pc/store'">STORE</nuxt-link></li>
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
            &+div{
                margin-top: 10px;
            }
        }
    }
    ul{
        position: fixed;
        top: 130px;
        left: 0;
        width: 100%;
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
