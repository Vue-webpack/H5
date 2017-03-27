<style>

.mui-tabs {
    z-index: 101;
    overflow: visible!important;
}

.mui-tab {
    overflow: auto!important;
}

.tab-content {
    position: relative;
    top: 0rem;
    left: 0;
    overflow: hidden;
}

.mui-tab-active {
    color: #fff;
    background: #369;
}

.tab .tab-content {
    position: relative;
}

.tab .tab-panel {
    padding-top: 1px;
}

.tab .tab-panel.hide {
    position: absolute;
    top: 0;
}

.modal-mask {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    transition: opacity .3s ease;
}

</style>

<template>

<div class="mui-tabs">
    <ul class="mui-tab">
        <li class="mui-tab-cell" v-for="(index,item) in renderData" @click.prevent.stop="handleTablistClick($event,index,this)" :class="{
				muitabactive:$index === activeIndex
			}">{{item.header}}
        </li>
    </ul>
    <slot name="tab-content"></slot>
</div>
<div class="modal-mask" v-show="mshow == true" @click.prevent.stop="hiddenMask()"></div>
<!--div class="modal-mask" v-show="true" transition="modal" transition-mode="out-in"></div-->

</template>

<script>

module.exports = {
    props: {
        effect: {
            type: String,
            default: 'fadein'
        },
        showfirst: {
            type: String,
            default: 'true'
        }
    },
    data: function() {
        return {
            renderData: [],
            childIndex: 0,
            activeIndex: (this.showfirst) == 'true' ? 0 : -1,
            mshow: false
        }
    },

    // 在创建实例时 `events` 选项简单地调用 `$on`
    events: {
        'child-index': function() {
            this.activeIndex = -1;
            this.mshow = false;
        }
    },
    methods: {

        handleTablistClick: function(e, index, el) {
            let self = this;
            if ((e.target.className + ' ').indexOf('active') > -1) {
                this.activeIndex = -1;

                this.mshow = false;
            } else {
                this.activeIndex = index;
                self.mshow = true;
            }

        },
        hiddenMask() {
            this.mshow = false;
            this.activeIndex = -1;
        }
    }
}

</script>
