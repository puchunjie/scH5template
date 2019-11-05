<template>
    <div class="main-container">
        <router-view/>
    </div>
</template>

<script lang="ts">

</script>

<style lang="less">
@import url('../../assets/styles/mixin.less');
.main-container {
    width: 100%;
    min-height: 100%;
    background-color: @grayF5;
    .icon-empty {
        text-align: center;
        margin: 1.7rem auto 0;
        .iconfont {
            font-size: .7rem;
            color: @grayB;
        }
        p{
          font-size: .14rem;
          color: @grayB;
          margin-top: .1rem;
        }
    }
}
</style>
