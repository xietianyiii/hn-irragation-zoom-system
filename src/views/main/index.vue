<template>
    <a-layout class="data-server-main-container">
        <a-layout-header class="header">
            <div class="logo" />
            <a-menu :default-selected-keys="selectedKeys1" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
                <a-menu-item v-for="navItem in navList" :key="navItem.id">{{navItem.label}}</a-menu-item>
            </a-menu>
        </a-layout-header>
        <router-view></router-view>
    </a-layout>
</template>
<script>
    export default {
        components: {
        },
        data() {
            return {
                selectedKeys1: ['2'],
                selectedKeys2: ['1'],
                collapsed: false,
                openKeys: ['sub1'],
                navList: [{
                    id: 'server',
                    label: '河南省灌溉分区系统'
                }]
            };
        },
    };
</script>
<style>
    .data-server-main-container.ant-layout {
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