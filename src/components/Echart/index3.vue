<template>
  <div class="home">
    <!-- 定义图表外层容器 -->
    <div id="myHomeChart3" ref="homeEcharts3"></div>
    <div id="myHomeChart4" ref="homeEcharts4"></div>
    <div id="myHomeChart5" ref="homeEcharts5"></div>
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
      var myChart1 = this.$echarts.init(this.$refs.homeEcharts3);
      var myChart2 = this.$echarts.init(this.$refs.homeEcharts4);
      var myChart3 = this.$echarts.init(this.$refs.homeEcharts5);
      // 初始化配置（官网实例详情左侧代码，直接复制过来按项目需求修改即可）
      var option1 = {
        title: [
          {
            text: "工程类型影响因子",
            padding: [
              16, // 上
              50, // 右
              50, // 下
              0, // 左
            ],
          },
        ],
        polar: {
          radius: [10, "90%"],
        },
        angleAxis: {
          max: 1.1,
          startAngle: 50,
        },
        radiusAxis: {
          type: "category",
          data: ["渠道防渗", "管道输水", "喷灌", "微灌", "土渠输水"],
        },
        tooltip: {},
        series: {
          type: "bar",
          data: [0.92, 0.84, 0.67, 0.58, 1.0],
          coordinateSystem: "polar",
          label: {
            show: true,
            position: "middle",
            formatter: "{b}: {c}",
          },
        },
      };
      var option2 = {
        title: [
          {
            text: "取水方式影响因子",
            padding: [
              30, // 上
              0, // 右
              50, // 下
              170, // 左
            ],
          },
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["北方", "南方", "平均"],
        },
        xAxis: [
          {
            type: "category",
            data: ["机井提水", "泵站扬水", "自流引水"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "北方",
            min: 0,
            max: 1.2,
            interval: 0.2,
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "南方",
            min: 0,
            max: 1.2,
            interval: 0.2,
            axisLabel: {
              formatter: "{value} ",
            },
          },
        ],
        series: [
          {
            name: "北方",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " ";
              },
            },
            data: [0.93, 0.94, 1.0],
          },
          {
            name: "南方",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " ";
              },
            },
            data: [0.96, 0.96, 1.0],
          },
          {
            name: "平均",
            type: "line",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " ";
              },
            },
            data: [0.94, 0.95, 1.0],
          },
        ],
      };
      var option3 = {
        title: [
          {
            text: "灌区规模影响因子",
            padding: [
              21, // 上
              0, // 右
              50, // 下
              0, // 左
            ],
          },
        ],
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1.07, name: "大型" },
              { value: 1.04, name: "中型" },
              { value: 1.00, name: "小型" },
            ],
          },
        ],
      };
      // 把参数配置放到容器里
      myChart1.setOption(option1);
      myChart2.setOption(option2);
      myChart3.setOption(option3);
    },
  },
};
</script>
    <style>
/* 给图表容器定义宽高 */
#myHomeChart3 {
  left: 50px;
  top: 50px;
  width: 500px;
  height: 300px;
}
#myHomeChart4 {
  left: 350px;
  top: 50px;
  width: 500px;
  height: 350px;
}
#myHomeChart5 {
  left: 700px;
  top: -600px;
  width: 500px;
  height: 320px;
}
.home {
  width: 100%;
  height: 600px;
}
</style>
    
    
    
    