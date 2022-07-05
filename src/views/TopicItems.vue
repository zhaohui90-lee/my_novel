<template>
  <div class="top-left">
    <a href="#" class="act">起点中文网</a>
    <em v-show="false">|</em>
    <a href="#" class="remove">起点女生网</a>
    <em>|</em>
    <a href="#" class="remove">创世中文网</a>
    <em>|</em>
    <a href="#" class="remove">云起书院</a>
    <em>|</em>
    <a href="#" class="remove">繁体版</a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TopicItems'
}
</script>

<style lang="less">
@hover-color: #ed4259;
@grey: #d9d9d9;

em {
  color: @grey;
  margin: auto 0;
}
a {
  font: 12px/35px PingFangSC-Regular, "-apple-system", Simsun;
  color: @grey;

  &:hover {
    color: @hover-color;
  }
}
.top-left {
  width: 40%;

  a {
    margin: auto 10px;
    display: inline-block;
  }

  .act {
    color: #575757;
    background-color: #fff;
    border-bottom: #fff;
    padding: 0 9px;
    margin: 0 0 -1px 0;
    height: 36px;
    border-right: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
  }
}
</style>