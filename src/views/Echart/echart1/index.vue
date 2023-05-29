<template>
    <a-layout class="data-server-map-server-container">
      <a-layout-content :style="{ background: '#fff', padding: '0px', margin: 0, minHeight: '280px' }">
        <div><echarts1></echarts1></div>
      </a-layout-content>
    </a-layout>
  
  </template>
  
  <script>
  import echarts1 from '@/components/Echart/index1.vue'
  export default {
        components: {
            echarts1
        },
        data() {
            return {};
        },
    };
  </script>
  
  <style>
  
  </style>