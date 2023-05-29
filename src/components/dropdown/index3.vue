<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      灌溉方式
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="onClick">
        <a-menu-item key="渠道防渗">渠道防渗</a-menu-item>
        <a-menu-item key="管道输水">管道输水</a-menu-item>
        <a-menu-item key="喷灌">喷灌</a-menu-item>
        <a-menu-item key="微灌">微灌</a-menu-item>
        <a-menu-item key="土渠输水">土渠输水</a-menu-item>
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