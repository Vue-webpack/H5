<style>

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    padding: 45px 30px;
    border-bottom: 1px solid #e6e2e2;
    text-align: center;
}

.modal-default-button {
    float: right;
}

.modal-enter,
.modal-leave {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.modal-footer button {
    padding: 10px;
    text-align: center;
    color: #9e2424;
    width: 100%;
}

</style>

<template>

<div class="modal-mask" v-show="show">
    <div class="modal-wrapper" v-el:overlayx>
        <div class="modal-container">
            <div class="modal-body">
                {{globalmodal.content}}
            </div>
            <div class="modal-footer">
                <button @click="confirmCallback">{{globalmodal.title}}</button>
            </div>
        </div>
    </div>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            show: false
        }
    },
    props: {
        globalmodal: {
            type: Object
        }
    },
    watch: {
        'globalmodal.rd': function(val) {
            this.show = true;
        }
    },
    methods: {
        cancelCallback: function() {
            this.globalmodal.cancelFn();
            this.globalmodal.cancelFn = function() {};
            this.show = false;
        },
        confirmCallback: function() {
            this.globalmodal.confirmFn();
            this.globalmodal.confirmFn = function() {};
            this.show = false;
        }
    }
}

</script>
