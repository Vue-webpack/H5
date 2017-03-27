<style>

.mask_transparent {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.toast {
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgba(40, 40, 40, 0.75);
    transform: translateX(-50%) translateY(-50%);
    color: #FFFFFF;
    text-align: center;
    border-radius: 5px;
    padding: 15px;
    opacity: 1;
    transition: opacity .3s linear;
    z-index: 100
}

.toast-leave {
    opacity: 0;
}

</style>

<template>

<li v-touch:tap="tab" class="mui-screen-cell" :class="activeObj">
    <label class="mui-label">
        {{ name }}
        <i class="mui-iconfont mui-icon-xiajiantou"></i>
    </label>
</li>

</template>

<script>

module.exports = {
    props: {
        name: {
            type: String,
            default: "分类"
        },
        cur: {
            twoWay: true,
            type: Number,
            default: 0
        },
        index: {
            type: Number,
            default: 0
        }
    },
    methods: {
        tab: function() {
            this.$dispatch('tab', this.index);
            event.preventDefault();
        }
    },
    computed: {
        activeObj: function() {
            return {
                active: (this.cur == this.index)
            }
        }
    }
}

</script>
