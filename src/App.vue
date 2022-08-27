<script setup>
import {onBeforeMount, onBeforeUpdate, onMounted} from 'vue'
import { computed, nextTick, reactive, ref } from 'vue';
import Head from './components/Head.vue'
import YesOrNo from './views/YesOrNo.vue';
import BlogPost from './views/BlogPost.vue';

// export default {
//   setup() {
//     const state = reactive({
//       count: 0
//     })


//     function increment() {
//       state.count++
//     }

//     return {
//       state,
//       increment
//     }
//   }

// }

// 除了可以处理引用数据类型意意外 还可以处理number string 这样的基本数据类型
let count = ref(0)

console.log(count);

// reactive只能处理对象 map set 这样的引用数据类型
// 被解构和赋值后 会丢失响应性
const state = reactive({
  count: 0
})

const obj = reactive({
  arr: ['abc', 666]
})

function increment() {
  count.value++
  state.count++
  nextTick(() => {
    // 访问更新后的DOM
    console.log('next...');
    author.books.push('111')
  })
}

function modify() {
  obj.arr.push('aaa')
  author.books = []

}

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

console.log(author);

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'yes' : 'no'
})

// 可写的计算属性
const firstName = 'Jack'
console.log('jack', firstName);
const lastName = ref('Smith')
console.log('Smith', lastName);


const fullName = computed({
  // getter
  get() {
    return firstName + ' ' + lastName.value
  },

  // setter
  set(newValue) {
    [firstName, lastName.value] = newValue.split(' ')
  }
})

console.log(fullName);

// 样式绑定
const isActive = ref(true)
const hasError = ref(false)

const classObject = ref({
  active: isActive,
  'text-danger': hasError
})

const error = ref(null)

// 返回值是object类型
const classObject1 = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))

// 绑定内联样式
const activeColor = ref('red')
const fontSize = ref(30)

const styleObject = reactive({
  color: 'red',
  fontSize: '30px'
})

const items = reactive([{ message: 'Foo' },
                { message: 'Bar' },
                { message: 'Bar' },
                { message: 'Bar' }, 
                { message: 'Bar' }, 
                { message: 'Bar' },
                { message: 'Bar11' },
                ])
    
const checkedNames = ref([])


onBeforeMount(() =>{
  console.log('onBeforeMount...');
  
})

onMounted(() => {
  console.log('onMounted...');
  
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate...');
  
})

const postFoneSize = ref(1) 

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])
</script>

<template>
  <button @click.once="increment">count</button>
  <div>{{ state.count }}</div>
  <button @click="modify">modify</button>
  <div>{{ obj.arr }}</div>
  <p>Has published books:</p>
  <div>{{ publishedBooksMessage }}</div>
  <div>{{ fullName }}</div>
  <div class="static" :class="{ active: isActive, 'text-danger': hasError }">vue的样式绑定</div>
  <div :class="classObject">vue的样式绑定</div>
  <div :class="classObject1">vue的样式绑定</div>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">绑定内联样式</div>
  <div :style="styleObject">绑定内联样式</div>
  <!-- v-for -->
  <div v-for="(item, index) in items" :key="item">{{ item.message }}-{{ index }}</div>

  <div>checked names: {{ checkedNames }}</div>
  <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
  <label for="jack">jack</label>

  <input type="checkbox" id="mike" value="mike" v-model="checkedNames">
  <label for="mike">mike</label>

  <input type="checkbox" id="james" value="james" v-model="checkedNames">
  <label for="james">james</label>

  <Head></Head>
  <YesOrNo></YesOrNo>

  <div :style="{fontSize: postFoneSize + 'em'}">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFoneSize += 0.1"
    ></BlogPost>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
