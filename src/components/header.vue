<style lang="sass">

.mui-bar {
    background: #fff;
    .mui-img {
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
    }
}

.mui-pull-right {
    top: 0.2rem;
}

</style>

<template>

<div class="mui-bar">
    <div class="mui-img">
        <img src="../assets/images/test/1.jpg" class="mui-img-img">
        <a href="" class="mui-arrow-right">智慧商城</a>
    </div>
    <a href="home-search.html" class="mui-pull-right" id="search">
        <i class="mui-iconfont mui-icon-search"></i>
    </a>
</div>

</template>

<script>

export default {
    replace: true,
    props: ['pageType']
}

</script>
