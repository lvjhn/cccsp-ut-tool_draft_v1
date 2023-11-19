<!-- SUMMARY PAGE -->
<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios';

    import { useConsentFormStore } from "@/stores/ConsentFormStore.js" 
    import { useIBTestStore } from "@/stores/IBTestStore.js"
    import { useSRTestStore } from "@/stores/SRTestStore.js"

    let ConsentFormStore = useConsentFormStore(); 
    let IBTestStore = useIBTestStore(); 
    let SRTestStore = useSRTestStore();

    let hasSubmitted = ref(localStorage.submitted ?? "false" == true);
    let submittingResponse = ref(false);

    async function submit() {
        const data = {
            "consent-form" : {
                "mode" : ConsentFormStore.mode, 
                "age" : ConsentFormStore.age, 
                "gender" : ConsentFormStore.gender,
                "course" : ConsentFormStore.course, 
                "year" : ConsentFormStore.year 
            }, 
            "ib-test" : IBTestStore.pages, 
            "sr-test" : SRTestStore.ratings
        }
        
        const response = axios.post("https://lvjhn98.pythonanywhere.com/submit", data);

        submittingResponse.value = true;


        response.catch(e => {
            alert("There was an error sending your response, try again.")
            hasSubmitted.value = false; 
            submittingResponse.value = false;
        });
        
        response.then(e => {
            hasSubmitted.value = true;
            submittingResponse.value = false;
        })
    }
</script>

<template>
    <div class="summary-page"> 
        <h1>Summary</h1>
        Thank you for your participation!
        <br /><br />
        <button @click="submit" :disabled="submittingResponse || hasSubmitted">Click here to submit response.</button>
        <br /><br /> 
        <div v-if="submittingResponse" style="color: blue; font-weight: bold">
            Submitting response.
        </div>
        <div v-if="hasSubmitted" style="color: green; font-weight: bold">
            Your response has successfully been submitted!
        </div>
        <br />
    </div>
</template>

<style scoped> 

</style>