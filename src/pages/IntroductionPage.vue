<!-- INTRODUCTION PAGE -->
<script setup>
    import { useConsentFormStore } from "@/stores/ConsentFormStore.js"; 

    let consentFormStore = useConsentFormStore();

</script>

<template> 
    <div class="introduction-page"> 
        <h1>Introduction</h1>
        <p>
            Good day! 
        </p>
        <p> 
            You are about to conduct a usability test of the design (blueprint) of
            <b>CCCSP</b> (Calabanga Community College Student Portal). This will 
            approximately take 10-30 minutes depending on your speed.
        </p>
        <p> 
            <a style="color:green">
                <b>You will not test an actual app. Rather, you will test a <i>proposed design only</i>.</b>
            </a>
        </p>
        <p> 
            Please keep your participation and the details of this activity <b>confidential</b>.
        </p>
        <p> 
            You will be guided throughout the activity.
        </p>
        <p> 
            Please start by stating what version of the app design you were asked to handle: 
        </p>
        
        <select v-model="consentFormStore.mode"> 
            <option value="MOBILE">I was asked to handle the MOBILE version of the app.</option>
            <option value="WEB">I was asked to handle the WEB version of the app.</option>
        </select>
        
        <br /> 
        <br />

        <div class="actions">
            <div class="left"> 

            </div>
            <div class="right">
                <router-link to="consent-form">
                    <button>
                        Proceed to Consent Form →
                    </button>
                </router-link>
            </div> 
        </div>
    </div>
</template>

<style scoped> 

</style>

