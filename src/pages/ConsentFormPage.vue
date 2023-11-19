<!-- CONSENT-FORM PAGE -->
<script setup>
    import { useConsentFormStore } from '../stores/ConsentFormStore';
    
    const consentFormStore = useConsentFormStore(); 
</script>

<template>
    <div class="consent-form-page"> 
        <h1>Consent Form</h1> 
        <p>
            By continuing, I confirm that I am voluntary participating in this research project - particularly
            in the usability testing activity. 
            <br /> <br /> 
            I understand that I will not be asked for any <b>PII</b> (Personally Identifiable Information) and that 
            my identity will remain confidential throughout this activity. 
            <br /><br />
            That is, I will not be asked for name, address, and any other similar information.
            <br /><br />
            I will only be asked for my <i>age</i>, <i>gender</i>, 
            <i>course</i>, and <i>year</i>. 
            <br /><br /> 
            I also attest that I am at least 18 years old and that the information I supply this consent form 
            is true. 
        </p>
        <div class="consent-form"> 
            <!-- Gender -->
            <b>What is your gender?</b>
            <br />
            <select v-model="consentFormStore.gender"> 
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </select>
            <br /><br />

            <!-- Age -->
            <b>What is your age (in years)?</b>
            <br />
            <input type="number" min="18" max="99" v-model="consentFormStore.age" style="width: 50px" />
            <br /><br />

            <!-- Course -->
            <b>What course are you <i>currently</i> taking?</b>
            <br />
            <input type="text" v-model="consentFormStore.course" style="width: 300px" />
            <br /><br />

            <!-- Year -->
            <b>What year level are you currently?</b>
            <br />
            <input type="number" min="1" max="20" v-model="consentFormStore.year" style="width: 50px" />
            <br /><br />

            <div class="actions">
                <div class="left">
                    <!-- Introduction -->
                    <router-link to="/">
                        <button>
                            ← Go Back to Introduction
                        </button>
                    </router-link>
                  
                </div> 

                <div class="right">
                    <!-- Confirmation -->
                    <router-link to="issues-based-testing">
                        <button>
                            Proceed to Issues-Based Testing (Phase 1 of 2) →
                        </button>
                    </router-link>
                </div>
            </div>
      
        </div>
    </div>
</template>

<style scoped> 

</style>