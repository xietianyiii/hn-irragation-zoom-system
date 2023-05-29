<template>
  <a-layout class="data-server-map-server-container">
    <a-layout-content :style="{ background: '#fff', padding: '0px', margin: 0, minHeight: '280px' }">
      <div><mapboxmap></mapboxmap></div>
    </a-layout-content>
  </a-layout>

</template>

<script>
import mapboxmap from '@/components/mapboxmap/index.vue'
export default {
      components: {
          mapboxmap
      },
      data() {
          return {};
      },
  };
</script>

<style>

</style>