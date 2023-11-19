<!-- SELF-REPORT TESTING PAGE -->
<script setup>
    import { SUS_Questions } from "@/sus-questions.js";
    import { useSRTestStore } from "@/stores/SRTestStore.js";
    
    let SRTestStore = useSRTestStore();
</script>

<template>
    <div class="self-report-testing-page"> 
        <h1>Self-Report Testing Page (Phase 2 of 2)</h1>
        <table border="1">
            <tr> 
                <th class="question">Question</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr> 
                <th class="question" style="text-align: left; padding: 20px;">  
                   <b>(1)</b> - Strongly Disagree 
                    &nbsp; &nbsp;
                   <b>(5)</b> - Strongly Agree  
                </th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
            </tr>
            <tr v-for="question, index in SUS_Questions">
                <td class="question">{{ question }} {{   SRTestStore[index] }}</td>
                <td class="rating-1"><input type="radio" value="1" v-model="SRTestStore.ratings[index]" /></td>
                <td class="rating-2"><input type="radio" value="2" v-model="SRTestStore.ratings[index]" /></td>
                <td class="rating-3"><input type="radio" value="3" v-model="SRTestStore.ratings[index]" /></td>
                <td class="rating-4"><input type="radio" value="4" v-model="SRTestStore.ratings[index]" /></td>
                <td class="rating-5"><input type="radio" value="5" v-model="SRTestStore.ratings[index]" /></td>
            </tr>
        </table>
        <br /><br />
        <div class="actions">
            <div class="left">
                <!-- Consent Form -->
                <router-link to="-form">
                    <button>
                        ← Go Back to Consent Form
                    </button>
                </router-link>
            </div> 

            <div class="right">
                <!-- Self-Report Testing Form -->
                <router-link to="summary">
                    <button>
                        Finish Activity →
                    </button>
                </router-link>
            </div>
        </div>
        <br /><br />    
    </div>
</template>

<style scoped> 
    .question {
        width: 1200px;
    }

    td {
        padding: 5px;
    }
</style>