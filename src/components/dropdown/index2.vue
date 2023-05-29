<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      作物种类
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="onClick">
        <a-menu-item key="小麦">小麦</a-menu-item>
        <a-menu-item key="玉米">玉米</a-menu-item>
        <a-menu-item key="花生">花生</a-menu-item>
        <a-menu-item key="水稻">水稻</a-menu-item>
        <a-menu-item key="棉花">棉花</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
  <script>
import { defineComponent } from "vue";
import DownOutlined from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    DownOutlined,
  },
  setup() {
    const onClick = ({ key }) => {
      console.log(`Click on item ${key}`);
    };
    return {
      onClick,
    };
  },
});
</script>