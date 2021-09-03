<template>
  <div>导航栏
  <router-link to="/">第一个组件</router-link>
  <router-link to="/xxx">第二个组件</router-link>
  </div>
<router-view/>
</template>

<script>

export default {
  name: 'App'
}
</script>
