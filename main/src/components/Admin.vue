<!-- admin -->
<template>
  <div id='admin'></div>
</template>

<script>
import { loadMicroApp } from 'qiankun';
export default {
  name: 'admin',
  data() {
    return {
      hotpotInstance: null
    }
  },
  methods: {
  },
  created() {

  },
  mounted() {
    this.hotpotInstance = loadMicroApp({
      name: 'vue-element-admin',
      entry: '//localhost:9527',
      // entry: { scripts: ['//localhost:30001/app.js', '//localhost:30001/chunk-vendors.js'] },
      container: '#admin',
    })
  }
}
</script>
<style scoped>

</style>
