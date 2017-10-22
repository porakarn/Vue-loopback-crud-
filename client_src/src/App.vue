<template>
  <div id="app">
    <Header/>

    <!-- Spacing -->
    <div style="height: 20px" />

    <div class="container">
  <router-view/>

    </div>
  
  </div>
</template>

<script>
import Header from '@/components/partials/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>

</style>
