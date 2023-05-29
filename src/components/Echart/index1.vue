<template>
  <a-layout class="container">
    <a-layout-content>
      <div id="myHomeChart1" ref="homeEcharts1"></div>
      <!-- 定义图表外层容器 -->
      <div id="myHomeChart2" ref="homeEcharts2"></div>
    </a-layout-content>
  </a-layout>
</template>
  <script>
export default {
  data() {
    return {};
  },
  mounted() {
    // 调用当前图表
    this.dataChart1();
    this.dataChart2();
  },
  methods: {
    // 绘制图表
    dataChart1() {
      //初始化图表，this.$refs.homeEcharts获取到图表容器
      var myChart1 = this.$echarts.init(this.$refs.homeEcharts1);
      // 初始化配置（官网实例详情左侧代码，直接复制过来按项目需求修改即可）
      var option1 = {
        graphic: {
          elements: [
            {
              type: "text",
              left: "400px",
              top: "50px",
              style: {
                text: "灌溉分区",
                fontSize: 55,
                fontWeight: "500",
                lineDash: [0, 200],
                lineDashOffset: 0,
                fill: "transparent",
                stroke: "brown",
                lineWidth: 1,
              },
              keyframeAnimation: {
                duration: 2600,
                loop: false,
                keyframes: [
                  {
                    percent: 0.7,
                    style: {
                      fill: "transparent",
                      lineDashOffset: 200,
                      lineDash: [200, 0],
                    },
                  },
                  {
                    // Stop for a while.
                    percent: 0.8,
                    style: {
                      fill: "transparent",
                    },
                  },
                  {
                    percent: 1,
                    style: {
                      fill: "black",
                    },
                  },
                ],
              },
            },
          ],
        },
      };
      // 把参数配置放到容器里
      myChart1.setOption(option1);
    },

    dataChart2() {
      //初始化图表，this.$refs.homeEcharts获取到图表容器
      var myChart2 = this.$echarts.init(this.$refs.homeEcharts2);
      // 初始化配置（官网实例详情左侧代码，直接复制过来按项目需求修改即可）
      var option2 = {
        title: {
          text: "Nightingale Chart",
          subtext: "1公顷 = 15亩 = 10000平方米",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          top: "bottom",
          data: [
            "rose1",
            "rose2",
            "rose3",
            "rose4",
            "rose5",
            "rose6",
            "rose7",
            "rose8",
          ],
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "m3 • hm-2  (立方米每公顷)",
            type: "pie",
            radius: [20, 140],
            center: ["25%", "50%"],
            roseType: "radius",
            itemStyle: {
              borderRadius: 5,
            },
            label: {
              show: true,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              { value: 3013, name: "小麦" },
              { value: 6679, name: "水稻" },
              { value: 1978, name: "玉米" },
              { value: 1866, name: "花生" },
              { value: 1749, name: "棉花" },
            ],
          },
          {
            name: "km2 (平方千米)",
            type: "pie",
            radius: [20, 140],
            center: ["75%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 5,
            },
            data: [
              { value: 28636.764245, name: "豫东平原区" },
              { value: 27203.506711, name: "南阳盆地区" },
              { value: 22609.106162, name: "豫西区" },
              { value: 23210.08783, name: "豫中平原区" },
              { value: 19377.022389, name: "豫北平原区" },
              { value: 19564.559871, name: "淮北平原区" },
              { value: 9172.63246, name: "豫北山丘区" },
              { value: 15729.660308, name: "淮南山丘区" },
            ],
          },
        ],
      };
      // 把参数配置放到容器里
      myChart2.setOption(option2);
    },
  },
};
</script>
  <style>
/* 给图表容器定义宽高 */
#myHomeChart1 {
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100px;
}
#myHomeChart2 {
  left: 0px;
  top: 0px;
  width: 1000px;
  height: 580px;
}
.container {
  background: "#fff";
  width: 100%;
  height: 0px;
}
</style>
  
  
  
  