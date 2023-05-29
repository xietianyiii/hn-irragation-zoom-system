<template>
    <a-layout class="data-server-map-server-container">
      <a-layout-content :style="{ background: '#fff', padding: '0px', margin: 0, minHeight: '280px' }">
        <div><echarts4></echarts4></div>
      </a-layout-content>
    </a-layout>
  
  </template>
  
  <script>
  import echarts4 from '@/components/Echart/index4.vue'
  export default {
        components: {
            echarts4,
        },
        data() {
            return {};
        },
    };
  </script>
  
  <style>
  
  </style>