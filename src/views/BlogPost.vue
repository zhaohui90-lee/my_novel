<template>
  <div class="blog-post">
    <h4>{{title}}</h4>
    <button @click="$emit('enlarge-text')">enlarge-text</button>
  </div>
</template>

<script setup>
  defineProps(['title'])
  defineEmits(['enlarge-text'])
</script>

<style>

</style>