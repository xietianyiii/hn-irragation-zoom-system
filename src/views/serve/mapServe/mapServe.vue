<template>
    <a-layout class="data-server-map-server-container">
      <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
        <div><openlayermap></openlayermap></div>
      </a-layout-content>
    </a-layout>
  
</template>

<!-- Pointer events polyfill for old browsers, see https://caniuse.com/#feat=pointer -->
<script src="https://unpkg.com/elm-pep@1.0.6/dist/elm-pep.js"></script>
<!-- The lines below are only needed for old environments like Internet Explorer and Android 4.x -->
<script src="https://cdn.polyfill.io/v3/polyfill.min.js?features=fetch,requestAnimationFrame,Element.prototype.classList,TextDecoder"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/3.18.3/minified.js"></script>


<script>
import openlayermap from '@/components/openlayermap/index.vue'
export default {
        components: {
            openlayermap
        },
        data() {
            return {};
        },
    };
</script>

<style>

</style>