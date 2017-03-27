<style lang="sass" scoped>

.head_index {
    height: 0.9rem;
    background: #d22127;
    .logo {
        color: #fff;
        position: absolute;
        top: 0.15rem;
        left: 0.2rem;
        img {
            width: 1.7rem;
            height: 0.5rem;
            padding-right: 0.15rem;
        }
    }
    .city {
        font-size: 0.28rem;
        color: #fff;
    }
    .icon {
        height: 0.5rem;
        width: 0.5rem;
        position: absolute;
        top: 0.15rem;
        ;
    }
    .search {
        right: 0.9rem;
    }
    .sao {
        right: 0.2rem;
    }
}

.tab-content {
    position: absolute;
    top: 1rem;
    left: 0;
    width: 100%;

}

.brand-tit-list {
    position: relative;
    background: #fff;
    max-height: 6rem;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    li {
        line-height: 0.75rem;
        border-bottom: 1px solid #F1EDED;
        margin-left: 0.3rem;
    }
    .classTabActive {
        color: #e94646;
    }
}
.brand-tit-list.floor{
    padding-left: 1rem;
    .floor-name{
        position: absolute;
        left: 0;
        width: 1.3rem;
        text-align: center;
        font-weight: bold;
    }
}

.mui-list{
    display: inline-block;
    width: 100%;
}

.page-bottom{
    height: 3px;
}
</style>

<template>

<div class="wrap-page">

    <!-- header -->
    <div class="head_index mui-flex mui-flex-center-veri mui-flex-center-hori">
        <a class="city">金珠2.0</a>
    </div>

    <!--body-->
    <section class="mui-body wrap-page">
        <section id="page" class="wrap-page flex-column">
            <div class="wrap-page">
                <template v-if="rankList.total > 0">
                    <ul class="mui-list wrap-page">
                        <li class="mui-list-cell mui-img" v-for="rank in rankList.rows" >
                            <div class="mui-flex-auto mui-flex-veri">
                                <div class="mui-flex">
                                    <img :src="'/easyplay/' + rank.logoPath" class="mui-img-img border">
                                    <div class="mui-img-body">
                                        <h2> {{rank.orgName}} </h2>
                                        <p class="mui-label mui-margin-top-10">
                                            <span class="flist floor_name">{{rank.orgProdIntro}}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="class_name"> {{rank.class_name}} </h3>
                        </li>
                    </ul>
                </template>
                <div class="no-data" v-else>
                    暂无数据
                </div>
                <div class="page-bottom"></div>
            </div>
          </section>
    </section>
</div>
</template>

<script>

import { Toast, MessageBox } from 'mint-ui'
import { handleErr } from '../utils'
import { wxConfig,  userId } from '../vuex/getters'
import { setWxConfig, getShopCateList, getShopFloorList, getShopList, getRankList } from '../vuex/actions'

export default {
    components: {
        headTitle: require('../components/headTitle.vue')
    },
    data() {
        return {
            cur: -1,
            rankList: []
        }
    },
    vuex: {
        actions: {
            getRankList
        }
    },
    route: {
        data({to, next}) {
            this.page = 1
            this.mallId = 1;
            Vue.Promise.all([
                this._getRankList()
            ])
            .finally(() => {
                next()
            })
            .catch(err => {
                handleErr(err)
            })
        }
    },
    methods: {
        _getRankList() {
            return this.getRankList()
            .then(res => {
                this.rankList = res;
                // this.rankList = _(this.rankList)
                // .concat(res)
                // .value();
            })
        }
    }

}

</script>
