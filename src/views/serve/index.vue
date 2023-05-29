<template>
  <a-layout class="data-server-server-container">
    <a-layout-sider width="200" style="background: #fff">
      <a-menu
        :default-selected-keys="activeMenuIds"
        :default-open-keys="openMenuIds"
        mode="inline"
        :style="{ height: '100%', borderRight: 0 }"
      >
        <a-sub-menu v-for="menu in menuConfig" :key="menu.id">
          <template #title>
            <span>
              {{ menu.label }}
            </span>
          </template>
          <a-menu-item
            v-for="sMenu in secondMenuConfig[menu.id]"
            :key="sMenu.id"
            @click="toServer(sMenu)"
            >{{ sMenu.label }}
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <router-view></router-view>
  </a-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeMenuIds: ["mapServer"],
      openMenuIds: ["dataServer","mapbox","echart"],
      menuConfig: [
        {
          id: "dataServer",
          label: "可视化界面",
        },
        {
          id: "mapbox",
          label: "Mapbox",
        },
        {
          id: "echart",
          label: "大数据可视化",
        },
      ],
      secondMenuConfig: {
        dataServer: [
          {
            id: "mapServer",
            label: "openlayers", //地图服务
          }
        ],
        mapbox: [
          {
            id: "mapbox",
            label: "Mapbox", //地图服务
          }
        ],
        echart: [
          {
            id: "echart1",
            label: "灌溉分区", //地图服务
          },
          {
            id: "echart2",
            label: "基本用水定额", //地图服务
          },
          {
            id: "echart3",
            label: "调节系数", //地图服务
          },
          {
            id: "echart4",
            label: "综合用水定额", //地图服务
          }
        ],
      },
    };
  },
  methods: {
    toServer(menuItem) {
      this.$router.push({
        name: menuItem.id,
      });
    },
  },
};
</script>
<style>
.data-server-server-container.ant-layout {
  width: 100%;
  height: 100%;
}

#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
