<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      灌溉地区
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="onClick">
        <a-menu-item key="豫北平原区">豫北平原区</a-menu-item>
        <a-menu-item key="豫北山丘区">豫北山丘区</a-menu-item>
        <a-menu-item key="豫西山区">豫西山区</a-menu-item>
        <a-menu-item key="豫中平原区">豫中平原区</a-menu-item>
        <a-menu-item key="豫东平原区">豫东平原区</a-menu-item>
        <a-menu-item key="南阳盆地区">南阳盆地区</a-menu-item>
        <a-menu-item key="淮北平原区">淮北平原区</a-menu-item>
        <a-menu-item key="淮南山丘区">淮南山丘区</a-menu-item>
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