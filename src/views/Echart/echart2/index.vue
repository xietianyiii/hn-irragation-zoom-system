<template>
    <a-layout class="data-server-map-server-container">
      <a-layout-content :style="{ background: '#fff', padding: '0px', margin: 0, minHeight: '280px' }">
        <div><echarts2></echarts2></div>
      </a-layout-content>
    </a-layout>
  
  </template>
  
  <script>
  import echarts2 from '@/components/Echart/index2.vue'
  export default {
        components: {
            echarts2
        },
        data() {
            return {};
        },
    };
  </script>
  
  <style>
  
  </style>