<!-- CLICKABLE (AREA) COMPONENT -->
<script setup>
    const props = defineProps([ "coords", "handler", "mode" ]); 

    const mode = props.mode;


    let x = props.coords[0]; 
    let y = props.coords[1]; 
    let width = props.coords[2]; 
    let height = props.coords[3]; 

    let scaleX = 1;
    let scaleY = 1;

    if(mode.toUpperCase() == "WEB") {
        scaleY = 500/576;
    } 
    else if(mode.toUpperCase() == "MOBILE") {

    }


    x = x * scaleX;
    y = y * scaleY; 
    width = width * scaleX; 
    height = height * scaleY;


</script>

<template> 
    <div 
        class="area" 
        :style="{
            'left'    : x + 'px',  
            'top'     : y + 'px', 
            'width'   : width + 'px', 
            'height'  : height + 'px'
        }"
        @click="handler"
    >   
    </div>
</template>

<style scoped> 
    .area {
        background-color: transparent;
        /* outline: 1px solid grey; */
        position: relative;
        top: 0px;
    }
</style>