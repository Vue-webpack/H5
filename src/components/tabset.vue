<style>

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

</style>

<template>

<div class="mui-tabs flex-column">
    <ul class="mui-tab">
        <li class="mui-tab-cell" v-for="(index,item) in renderData" @click.prevent.stop="handleTablistClick($event,index,this)" :class="{
				muitabactive:$index === activeIndex
			}">{{item.header}}
        </li>
    </ul>
    <slot name="tab-content"></slot>
</div>

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
            default: true
        },
    },
    data: function() {
        return {
            renderData: [],
            childIndex: 0,
            activeIndex: (this.showfirst) == 'true' ? 0 : -1
        }
    },

    methods: {

        handleTablistClick: function(e, index, el) {
            this.activeIndex = index
        }
    }
}

</script>
