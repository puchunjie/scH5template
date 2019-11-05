<template>
    <div class="lost-container">
        <md-result-page type="lost">
        </md-result-page>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Test extends Vue {

}
</script>

<style lang="less">
.lost-container {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    left: 0;
    top: 0;
    overflow: hidden;
}
</style>