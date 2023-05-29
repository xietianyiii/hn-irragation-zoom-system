<template>
  <div class="home">
    <div class="select-container">
      <a-col :span="4"><dropdown1></dropdown1></a-col>
      <a-col :span="4"><dropdown2></dropdown2></a-col>
      <a-col :span="4"><dropdown3></dropdown3></a-col>
      <a-col :span="4"><dropdown4></dropdown4></a-col>
      <a-col :span="4"><dropdown5></dropdown5></a-col>
    </div>

    <div id="myHomeChart6" ref="homeEcharts6"></div>
  </div>
</template>
    <script>
import dropdown1 from "@/components/dropdown/index1.vue";
import dropdown2 from "@/components/dropdown/index2.vue";
import dropdown3 from "@/components/dropdown/index3.vue";
import dropdown4 from "@/components/dropdown/index4.vue";
import dropdown5 from "@/components/dropdown/index5.vue";
export default {
  components: {
    dropdown1,
    dropdown2,
    dropdown3,
    dropdown4,
    dropdown5,
  },
  data() {
    return {
      
    };
  },
  mounted() {
    // 调用当前图表
    this.dataChart();
  },
  methods: {
    // 绘制图表
    dataChart() {
      //初始化图表，this.$refs.homeEcharts获取到图表容器
      var myChart = this.$echarts.init(this.$refs.homeEcharts6);
      // 初始化配置（官网实例详情左侧代码，直接复制过来按项目需求修改即可）
      var option = {
        title: {
          text: "综合用水定额(m3/667m2)",
          subtext:
            "此图表以喷灌、机井提水和中性灌区为例，具体综合用水定额以地方灌溉工程类型、水源类型和灌区规模具体情况进行计算                            数据来源 : 河南省水利厅地方标准",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["小麦", "玉米", "花生", "水稻", "棉花"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "豫北平原区",
            "豫北山丘区",
            "豫西山区",
            "豫中平原区",
            "豫东平原区",
            "南阳盆地区",
            "淮北平原区",
            "淮南山丘区",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "小麦",
            type: "line",
            stack: "Total",
            data: [
              82.528992, 79.254032, 72.704112, 62.879232, 58.294288, 53.054352,
              31.439616, 0.654992, 51.18294629,
            ],
          },
          {
            name: "玉米",
            type: "line",
            stack: "Total",
            data: [
              64.844208, 59.604272, 56.329312, 53.054352, 49.779392, 30.129632,
              26.854672, 0.654992, 39.48666057,
            ],
          },
          {
            name: "花生",
            type: "line",
            stack: "Total",
            data: [
              53.054352, 49.779392, 46.504432, 43.229472, 39.954512, 30.129632,
              26.854672, 0.654992, 33.87244343,
            ],
          },
          {
            name: "水稻",
            type: "line",
            stack: "Total",
            data: [
              277.8476064, 271.2976864, 266.0577504, 259.5078304, 249.6829504,
              223.4832704, 211.6934144, 174.3588704, 236.5831104,
            ],
          },
          {
            name: "棉花",
            type: "line",
            stack: "Total",
            data: [
              69.429152, 64.844208, 59.604272, 56.329312, 53.054352, 31.439616,
              26.854672, 0.654992, 41.82591771,
            ],
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
#myHomeChart6 {
  left: 100px;
  top: 50px;
  width: 1000px;
  height: 600px;
}
#container {
  display: flex; /* 使用 Flex 布局 */
}
</style>
    
    
    
    