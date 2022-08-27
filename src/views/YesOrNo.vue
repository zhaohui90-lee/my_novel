<template>
  <p>ask yes or no question:
    <input type="text" v-model="question" ref="input" />
  </p>
  <p>{{ answer }}</p>
</template>

<script setup>
import { onMounted, ref, shallowRef, watch } from 'vue';

const test = shallowRef('')
console.log(test);
const question = ref('')
console.log(question);
const answer = ref('Questions usually contain a question mark. ;-)')

watch(question, async (newQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
  }
  try {
    const res = await fetch('https://yesno.wtf/api')
    answer.value = (await res.json()).answer
  } catch (error) {
    answer.value = 'Error! Could not reach the API. ' + error
  }
})

const input = ref(null)
onMounted(() => {
  console.log(input);
  input.value.focus()
})
defineProps([''])
</script>

<style>
</style>