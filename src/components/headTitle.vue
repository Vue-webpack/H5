<style lang="sass" scoped>

.header-index {}

.header-in {
    position: relative;
    height: 1rem;
}

.nav-all-container {
    position: absolute;
    overflow: hidden;
    top: 1rem;
    width: 100%;
    height: 1.8rem;
    background-color: transparent;
}

.nav-all {
    position: absolute;
    /*top: 1rem;*/
    left: 0;
    border-top: 1px solid #ccc;
    height: 1.8rem;
}

.mui-bar li i {
    height: 0.7rem;
    width: 0.7rem;
}

.mui-icon-user {
    background: url('../assets/images/index/icon-user.png') no-repeat;
    background-size: 0.7rem 0.7rem;
}

.mui-icon-home {
    background: url('../assets/images/index/icon-home.png') no-repeat;
    background-size: 0.7rem 0.7rem;
}

.mui-icon-share {
    background: url('../assets/images/index/icon-share.png') no-repeat;
    background-size: 0.7rem 0.7rem;
}

.mui-pull-right {
    img {
        height: 0.45rem;
        width: 0.45rem;
    }
}

.walpbg {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 103;
}

.nav-share {
    position: absolute;
    top: 0rem;
    left: 0;
    border-top: 1px solid #ccc;
    height: 1.8rem;
}

</style>

<template>

<header class="header-index" id="header">
    <div class="header-in">
        <div class="mui-bar">
            <a class="mui-pull-left" v-touch:tap="goBack">
                <i class="mui-iconfont mui-icon-back"></i>
            </a>
            <h1 class="mui-bar-title" v-text="pageType"></h1>
            <a v-show="hiddenNav" v-touch:tap="showNavc" class="mui-pull-right">
                <img class="" src="../assets/images/index/icon-all.png">
            </a>
            <a v-show="hiddenHelp" v-link="{name:'help'}" class="mui-pull-right" style="top:0;">帮助</a>

        </div>
        <div class="nav-all-container">
            <ul v-show="showNav" transition="tabup" class="mui-bar nav-all mui-padding-20-0">
                <li v-touch:tap="goUserCenter" class="mui-bar-tab-cell">
                    <i class="mui-icon-user"></i>
                    <p class="mui-label">会员</p>
                </li>
                <li v-touch:tap="goHome" class="mui-bar-tab-cell">
                    <i class="mui-icon-home"></i>
                    <p class="mui-label">首页</p>
                </li>
                <li v-touch:tap="shareNav" class="mui-bar-tab-cell">
                    <i class="mui-icon-share"></i>
                    <p class="mui-label">分享</p>
                </li>
            </ul>
        </div>
    </div>

</header>
<div v-show="showNav" transition="tabfade" v-touch:tap="closeNavc" class='walpbg'></div>


<div v-touch:tap="shareClose" v-show="shareMaskStatus" class="mui-share">
    <img src="../assets/images/index/share.png">
</div>

</template>

<script>

export default {

    replace: true,

    props: {

        pageType: {
            type: String
        },

        hiddenNav: {
            type: String,
            default: true
        },

        backLink: {
            type: String,
            defualt: ''
        },

        hiddenHelp: {
            type: String,
            default: false
        }
    },

    data() {
        let self = this;
        return {
            showNav: '',
            shareMaskStatus: ''
        }
    },
    methods: {

        goBack() {
                if (this.backLink) {
                    this.$router.go({
                        name: this.backLink
                    })
                } else {
                    history.back()
                }

            },

            goHome($event) {
                this.showNavc();
                this.$router.go({
                    name: 'index'
                })
                $event.preventDefault()
            },
            goUserCenter($event) {
                this.showNavc();
                this.$router.go({
                    name: 'userCenter'
                })
                $event.preventDefault()
            },
            showNavc() {
                this.showNav == '' ? this.showNav = 'ture' : this.showNav = '';
            },

            closeNavc($event) {
                this.showNav == '' ? this.showNav = 'ture' : this.showNav = ''
                $event.preventDefault()
            },

            shareNav() {
                this.showNav == '' ? this.showNav = 'ture' : this.showNav = '';
                this.shareMaskStatus = 'ture';
            },
            shareClose($event) {
                this.shareMaskStatus = ''
                $event.preventDefault()
            }
    }
}

</script>
