<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      水源类型
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="onClick">
        <a-menu-item key="机井提水">机井提水</a-menu-item>
        <a-menu-item key="泵站扬水">泵站扬水</a-menu-item>
        <a-menu-item key="自流引水">自流引水</a-menu-item>
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