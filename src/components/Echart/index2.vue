<template>
    <div class="home">
      <!-- 定义图表外层容器 -->
      <div id="myHomeChart" ref="homeEcharts"></div>
    </div>
  </template>
    <script>
  export default {
    data() {
      return {};
    },
    mounted() {
      // 调用当前图表
      this.dataChart();
    },
    methods: {
      // 绘制图表
      dataChart() {
        //初始化图表，this.$refs.homeEcharts获取到图表容器
        var myChart = this.$echarts.init(this.$refs.homeEcharts);
        // 初始化配置（官网实例详情左侧代码，直接复制过来按项目需求修改即可）
        var option = {
          title: {
            text: "基本用水定额(m3/667m2)",
            subtext: "667m2 = 1亩                                                                                                                                                                                                 数据来源 : 河南省水利厅地方标准",
            // 分别设置四个方向的内边距
            padding: [
              2, // 上
              50, // 右
              50, // 下
              0, // 左
            ],
  
            textStyle: {
              fontSize: 25,
            },
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {},
          grid: {
            left: "0%", //grid 组件离容器左侧的距离。
            right: "4%", //grid 组件离容器右侧的距离。
            bottom: "0%", //grid 组件离容器下侧的距离。
            containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
          },
          xAxis: {
            type: "value",
            boundaryGap: [0, 0.00001],
          },
          yAxis: {
            type: "category",
            data: [
              "豫北平原区",
              "豫北山丘区",
              "豫西山区",
              "豫中平原区",
              "豫东平原区",
              "南阳盆地区",
              "淮北平原区",
              "淮南山丘区",
              "河南省平均",
            ],
          },
          series: [
            {
              name: "小麦",
              type: "bar",
              data: [125, 120, 110, 95, 88, 80, 47, 0, 83.125],
            },
            {
              name: "玉米",
              type: "bar",
              data: [98, 90, 85, 80, 75, 45, 40, 0, 64.125],
            },
            {
              name: "花生",
              type: "bar",
              data: [80, 75, 70, 65, 60, 45, 40, 0, 54.375],
            },
            {
              name: "水稻",
              type: "bar",
              data: [423, 413, 405, 395, 380, 340, 322, 265, 367.875],
            },
            {
              name: "棉花",
              type: "bar",
              data: [105, 98, 90, 85, 80, 47, 40, 0, 68.125],
            },
          ],
        };
        // 把参数配置放到容器里
        myChart.setOption(option);
      },
      // 销毁实例(看项目需要进行销毁实例)
      destroyChart() {
        this.$echarts.init(this.$refs.homeEcharts).dispose();
      },
    },
  };
  </script>
    <style>
  /* 给图表容器定义宽高 */
  #myHomeChart {
    left: 100px;
    top: 50px;
    width: 1000px;
    height: 600px;
  }
  </style>
    
    
    
    