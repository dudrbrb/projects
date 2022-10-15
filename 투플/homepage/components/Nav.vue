<template>
    <nav class="top-nav"  :class="{white: scrollTop}" @mouseover="scrollTop = true" @mouseout="handleScroll" >
        <div class="logo">
            <nuxt-link :to="'/'">
                <img :src="require(`@/assets/img/logo-black.webp`)" v-if="scrollTop" />
                <img :src="require(`@/assets/img/logo-white.webp`)" v-else />
            </nuxt-link>
        </div>
        
        <ul>
            <li><nuxt-link :to="'/'">회사소개</nuxt-link></li>
            <li><nuxt-link :to="'/menu?category=beefTripe'">메뉴안내</nuxt-link>
                <ul>
                    <li><nuxt-link :to="'/menu?category=beefTripe'">소 곱창</nuxt-link></li>
                    <li><nuxt-link :to="'/menu?category=porkTripe'">돼지 곱창</nuxt-link></li>
                    <li><nuxt-link :to="'/menu?category=porkEntrails'">돼지 막창</nuxt-link></li>
                    <li><nuxt-link :to="'/menu?category=riceSoup'">돼지 국밥</nuxt-link></li>
                </ul>
            </li>
            <li><nuxt-link :to="'/contact'">문의하기</nuxt-link></li>
        </ul>
    </nav>
</template>

<style lang='scss' scoped>
.top-nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    padding: 10px 30px;
    .logo{
        width: 70px;
        cursor: pointer;
        img{
            width: 100%;
        }
    }
    >ul{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        li{
            padding: 20px 25px;
        }
        li, a{
            color: #fefefe;
            font-size: 20px;
            cursor: pointer;
            position: relative;
            &:hover{
                color: #cb905d !important;
            }
            ul{
                position: absolute;
                padding-left: 0;
                margin-top: 20px;
                left: 0;
                background-color: #fefefe;
                display: none;

                li{
                    padding: 10px 0;
                    margin: 0 20px;
                    text-align: center;
                    a{
                        &:hover{
                            color: #cb905d;
                        }
                    }
                    &+li{
                        border-top: 1px solid rgb(222, 222, 222);
                    }
                }
            }
            &:hover{
                ul{
                    display: block;
                }
            }
        }
    }
    &.white{
        background-color: #fefefe;
        ul{
            li, a{
                color: #333;
            }
        }
    }
}
@media screen and (max-width: 540px) {
    .top-nav{
        padding: 10px;
        ul{
            padding-left: 0;
            li{
                padding: 20px 10px;
            }
            li, a{
                font-size: 16px;
                white-space: nowrap;
                ul{
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
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
