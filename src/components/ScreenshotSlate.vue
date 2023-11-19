<!-- SCREENSHOT-SLATE COMPONENT -->
<script setup>
    import { getScreenshotSource } from "@/page-list";
    
    const props = defineProps([ "mode", "page" ]);

    const src = getScreenshotSource(props.mode, props.page);

</script> 

<template> 
    <div class="screenshot-slate"> 
        <!-- Mobile Version -->
        <div v-if="props.mode == 'MOBILE'" class="mobile-version"> 
            <img :src="src" height="500" width="281">
        </div>

        <!-- Web Version -->
        <div v-if="props.mode == 'WEB'" class="web-version">
            <img :src="src" width="1024" height="500">
        </div>
    </div>
</template> 

<style scoped> 

</style>