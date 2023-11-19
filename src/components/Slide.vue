<!-- SLIDE COMPONENT -->
<script setup>
    import Ratings from './Ratings.vue';
    import ScreenshotSlate from './ScreenshotSlate.vue';

    import { useIBTestStore } from '../stores/IBTestStore';

    const IBTestStore = useIBTestStore();

    const props = defineProps([ "mode", "page", "hasRatings" ])
    

</script> 

<template> 
    <div class="slide-component">
        <div v-if="props.mode == 'WEB'" class="web-slide"> 
            <div class="screenshot-container">
                <div class="screenshot">
                    <ScreenshotSlate :mode="props.mode" :page="props.page" />
                </div> 

                <div 
                    :style="{
                        'width': '1024px', 
                        'height': '500px', 
                        'margin-top': '-503px'
                    }"
                    class="map" 
                >
                    <slot name="map"></slot>
                </div>

              
            </div>
            <div class="activity">
                <div class="ratings" v-if="props.hasRatings ?? true"> 
                    <b>Please rate the shown page in terms of intuitiveness and understandability:</b>
                    <Ratings 
                        :ratingU="IBTestStore.pages[props.mode.toLowerCase()][props.page].understandability"
                        :ratingI="IBTestStore.pages[props.mode.toLowerCase()][props.page].intuitiveness" 
                        :for="[ props.mode, props.page ]" 
                    />
                </div>
                <div v-else class="ratings"> 
                    You don't have to rate this page.
                </div>
                <div class="details">   
                    <div>
                        <h1>
                            <slot name="page-title"></slot>
                        </h1>
                        <a>
                            <slot name="mapped-task"></slot>
                        </a>
                    </div>
                    <br /><br />
                    <b>Perform the task below to proceed...</b><br /><br />
                    <slot name="details"></slot>
                </div>
            </div>
        </div>

        <div v-if="props.mode == 'MOBILE'" class="mobile-slide"> 
            
            <div class="screenshot-container">
                <div class="screenshot">
                    <ScreenshotSlate :mode="props.mode" :page="props.page" />
                </div>

                <div 
                    v-if="props.mode == 'MOBILE'" 
                    :style="{
                        'width': '281px', 
                        'height': '500px', 
                        'margin-top': '-505px'
                    }"
                    class="map" 
                >
                    <slot name="map"></slot>
                </div>
            </div> 

            <div class="activity">
                <div>
                    <h1>
                        <slot name="page-title"></slot>
                    </h1>
                    <a>
                        <slot name="mapped-task"></slot>
                    </a>
                </div>
                <br /><br />
                <div 
                    class="ratings" 
                    v-if="props.hasRatings ?? true"> 
                    <b>Please rate the shown page in terms of intuitiveness and understandability:</b>
                    <Ratings 
                        :ratingU="IBTestStore.pages[props.mode.toLowerCase()][props.page].understandability"
                        :ratingI="IBTestStore.pages[props.mode.toLowerCase()][props.page].intuitiveness" 
                        :for="[ props.mode, props.page ]" 
                    />
                </div>
                <div v-else class="ratings"> 
                    You don't have to rate this page.
                </div> 
                <br />
                <div class="details">   
                    <b>Perform the task below to proceed...</b><br /><br />
                    <slot name="details"></slot>
                </div>
            </div>
          
        </div>
    </div>  
</template>

<style scoped>
    .web-slide {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .web-slide .activity {
        display: flex; 
        gap: 10px;
        flex-direction: row;
    }

    .web-slide .ratings {
        width: 220px;
    }

    .web-slide .details {
        margin-top: 0px;
        border: 1px solid grey;
        padding: 20px;
        width: 100%;
        border-radius: 5px;
        align-self: start;
    }

    .mobile-slide {
        display: flex;
        gap: 20px; 
    }

    .mobile-slide .activity {
        width: 700px;
    }

    .mobile-slide > .activity > .ratings {
        flex: 1;
        margin-top: 0px;
        border: 1px solid grey;
        padding: 20px;
        width: 97%;
        border-radius: 5px;
    }

    .mobile-slide .details {
        flex: 1;
        margin-top: 0px;
        border: 1px solid grey;
        padding: 20px;
        width: 97%;
        border-radius: 5px;
    }
</style>