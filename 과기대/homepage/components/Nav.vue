<template>
    <nav class="top-nav" >
        <div class="logo">
            <nuxt-link :to="'/pc/main'">
                <img :src="require('@/assets/img/logo.png')" alt="logo">
            </nuxt-link>
        </div>
        <ul>
            <li><nuxt-link class="horiz" :to="'/pc/works'">WORKS</nuxt-link></li>
            <li><nuxt-link class="horiz" :to="'/pc/message'">MESSAGE</nuxt-link></li>
            <li><nuxt-link class="horiz" :to="'/pc/place'">PLACE</nuxt-link></li>
            <li><nuxt-link class="horiz" :to="'/pc/store'">STORE</nuxt-link></li>
        </ul>
        <img :src="require('@/assets/img/gr-top.png')" class="gradient">
    </nav>
</template>

<style lang='scss' scoped>
.top-nav{
    position: fixed;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    padding: 10px 70px ;
    background-color: #000;

    .logo{
        height: 100%;
        img{
            height: 100%;
        }
    }
    ul{
        display: flex;
        li{
            padding: 8px 40px 0;
            a{
                color: #fff;
                font-size: 34px;
                &:hover{
                    background:  linear-gradient(180deg, #F5FF33 0%, rgba(245, 255, 51, 0) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                &.nuxt-link-active{
                    color: #F5FF33;
                }
            }
        }
    }
    .gradient{
        width: 100%;
        top: 70px;
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
        }
    },
    mounted(){
        this.handleScroll()
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
		handleScroll(){
			window.scrollY > 10 ? this.scrollTop = true : this.scrollTop = false
		},
    }
}
</script>
