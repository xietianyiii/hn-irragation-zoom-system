<template>
    <a-layout class="data-server-map-server-container">
      <a-layout-content :style="{ background: '#fff', padding: '0px', margin: 0, minHeight: '280px' }">
        <div><echarts3></echarts3></div>
      </a-layout-content>
    </a-layout>
  
  </template>
  
  <script>
  import echarts3 from '@/components/Echart/index3.vue'
  export default {
        components: {
            echarts3
        },
        data() {
            return {};
        },
    };
  </script>
  
  <style>
  
  </style>