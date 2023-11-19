<!-- RATINGS COMPONENT -->
<script setup>
    import { ref, watch } from 'vue';
    import RatingsGuide from './RatingsGuide.vue';
    import { useIBTestStore } from "@/stores/IBTestStore.js";
    
    const props = defineProps([ "ratingU", "ratingI", "for" ]); 

    let IBTestStore = useIBTestStore();

    console.log(IBTestStore.pages);

    
    let ratingU = ref(props.ratingU); 
    let ratingI = ref(props.ratingI)

    let issuesU = ref(IBTestStore.pages[props.for[0].toLowerCase()][props.for[1]].issues);
    let issuesI = ref(IBTestStore.pages[props.for[0].toLowerCase()][props.for[1]].issues);

    watch(ratingU, () => {
        IBTestStore.setRatingU(props.for[0].toLowerCase(), props.for[1], ratingU);
    });

    watch(ratingI, () => {
        IBTestStore.setRatingI(props.for[0].toLowerCase(), props.for[1], ratingI);
    });

    watch(issuesU, () => {
        IBTestStore.setIssuesU(props.for[0].toLowerCase(), props.for[1], issuesU);
    }); 
    
    watch(issuesI, () => {
        IBTestStore.setIssuesI(props.for[0].toLowerCase(), props.for[1], issuesI);
    }); 

</script>

<template> 
    <div class="ratings" align="center">
        <br />
        <b><small>Understandability</small></b>
        <div class="ratings-container">
            <ul class="ratings-field"> 
                <li @click="ratingU = 1"><span v-if="ratingU >= 1">★</span><span v-else>☆</span></li>
                <li @click="ratingU = 2"><span v-if="ratingU >= 2">★</span><span v-else>☆</span></li>
                <li @click="ratingU = 3"><span v-if="ratingU >= 3">★</span><span v-else>☆</span></li>
                <li @click="ratingU = 4"><span v-if="ratingU >= 4">★</span><span v-else>☆</span></li>
                <li @click="ratingU = 5"><span v-if="ratingU >= 5">★</span><span v-else>☆</span></li>
            </ul>
        </div>
        
        <textarea 
            v-if="ratingU < 4"
            class="issues" 
            v-model="issuesU"
            placeholder="Please explain why you rate the page as below 4." 
        ></textarea>

        <br />
        <b><small>Intuitiveness</small></b>
        <div class="ratings-container">
            <ul class="ratings-field"> 
                <li @click="ratingI = 1"><span v-if="ratingI >= 1">★</span><span v-else>☆</span></li>
                <li @click="ratingI = 2"><span v-if="ratingI >= 2">★</span><span v-else>☆</span></li>
                <li @click="ratingI = 3"><span v-if="ratingI >= 3">★</span><span v-else>☆</span></li>
                <li @click="ratingI = 4"><span v-if="ratingI >= 4">★</span><span v-else>☆</span></li>
                <li @click="ratingI = 5"><span v-if="ratingI >= 5">★</span><span v-else>☆</span></li>
            </ul>
        </div>

        <textarea 
            v-if="ratingI < 4"
            class="issues" 
            v-model="issuesI"
            placeholder="Please explain why you rate the page as below 4." 
        ></textarea>

        <RatingsGuide />
    </div>
</template>

<style scoped> 
    .ratings {
        font-size: 25px;
        padding: 0px; 
        margin: 0px;
    }

    .ratings-container {
        border: 1px solid blue;
        width: 120px;
        text-align: center;
        margin: 10px auto;
        border-radius: 5px;
        padding-bottom: 5px;
    }

    .ratings ul {
        padding: 0px;
        margin: 0px; 
       
    }

    .ratings li {
        display: inline;
        color: blue;
    }

    .ratings li:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    .ratings .issues {
        width: 98%;
        margin: 0 auto;
        height: 100px;
        resize: none;
        border-radius: 5px;
        padding: 5px;
    }
</style>