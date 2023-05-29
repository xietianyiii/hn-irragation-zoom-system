<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      灌区规模
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="onClick">
        <a-menu-item key="大型">大型</a-menu-item>
        <a-menu-item key="中型">中型</a-menu-item>
        <a-menu-item key="小型">小型</a-menu-item>
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