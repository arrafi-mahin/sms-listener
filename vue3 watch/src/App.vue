<script setup>
import { ref , watch , reactive } from 'vue';

const count=ref(0)
const text=ref("Yasin")
const obj=reactive({ad:'Qwewqe'})

watch([count,text],(newCount,oldCount)=>{
  console.log(newCount,oldCount)
})
watch(obj,(n,o)=>{},{
  deep:true
})
watch(()=>obj.ad,(n,o)=>{},{
  deep:true
})

watch(()=>obj.ad,(n,o)=>{},{
  immediate:true
})

// watch(text,(newText,oldText)=>{
//   console.log(newText,oldText)
// })
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div>
    {{ count }}
    </div>
    <div @click="count++">Arttır</div>
    <div>
    <input v-model="text" /></div>
    {{ text }}
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
