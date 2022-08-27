<template>
  <div id="head" class="wrap">
    <!-- 这里是head页面 -->
    <div class="top-center box-center">
      <TopicItems></TopicItems>
    </div>
    <div class="logo-wrap box-center"></div>
    <div class="main-nav-wrap"></div>
    <div class="focus-wrap"></div>
  </div>
</template>

<script lang="ts" setup>

import { onBeforeMount, onBeforeUpdate, onMounted, ref } from 'vue'
import TopicItems from '../views/TopicItems.vue'




// export default {
//   name: 'Head',
//   components: {
//     TopicItems
//   },
//   setup(props: any) {
//     console.log(props);
//     const p1 = ref(props)
//     return {
//       p1
//     }
//   }
// }


</script>

<style>
</style>