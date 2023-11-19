<!-- ISSUES-BASED TESTING PAGE -->
<script setup>
    import Clickable from '../components/Clickable.vue';    
    import Slide from '../components/Slide.vue';
    import { useRouter } from "vue-router";
    import { clickables } from "@/clickables";
    
    import { useConsentFormStore } from '../stores/ConsentFormStore';
    import { useIBTestStore } from '../stores/IBTestStore';

    let consentFormStore = useConsentFormStore();
    let IBTestStore = useIBTestStore();
    
    let router = useRouter();

    function moveToNextPage() {
        let platform = consentFormStore.mode.toLowerCase();
        
        let currentIndex = 
            Object.keys(clickables[platform]).indexOf(IBTestStore.currentPage);

        IBTestStore.currentPage =
            Object.keys(clickables[platform])[currentIndex + 1];
    }
 
</script>

<template>
    <div class="issues-based-testing-page"> 
        <h1>Issues-Based Testing (Phase 1 of 2)</h1>

        <!-- 
            WEB-BASED ISSUES-BASED TESTING
        -->
        <div v-if="consentFormStore.mode == 'WEB'" class="web-based-ibt-testing"> 
            <!-- login-page-1 * -->
            <Slide v-if="IBTestStore.currentPage == 'login-page-1'" mode="WEB" page="login-page"> 
                <template v-slot:page-title>
                    Log In Page
                </template>
                <template v-slot:mapped-task>
                    This page allows users to log in onto the app.
                </template> 
                <template v-slot:details>
                    The page above is the <i>Log In Page</i>.
                    <br />
                    Try to log in using the page by clicking the proper area.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- profile * -->
            <Slide v-if="IBTestStore.currentPage == 'profile'" mode="WEB" page="profile"> 
                <template v-slot:page-title>
                    Profile Page
                </template>
                <template v-slot:mapped-task>
                    This page allows users to view their current academic status - year level, course, etc.
                </template> 
                <template v-slot:details>
                    The page above is the <i>Profile Page</i>.
                    <br />
                    Try to navigate to the <i>Subjects Page</i> from this page.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- subjects-1 * -->
            <Slide v-if="IBTestStore.currentPage == 'subjects-1'" mode="WEB" page="subjects"> 
                <template v-slot:page-title>
                    Subjects Page
                </template>
                <template v-slot:mapped-task>
                    This page allows users to view a list of their current subjects 
                    as well as view a summary of their subjects in the current semester.
                </template> 
                <template v-slot:details>
                    The page above is the <i>Subjects Page</i>.
                    <br />
                    Try to view the more details about the subject <i>Introduction to Entrepreneurship</i>.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- subjects-details--current * -->
            <Slide v-if="IBTestStore.currentPage == 'subject-details--current'" mode="WEB" page="subject-details--current"> 
                <template v-slot:page-title>
                    Subject Details Page
                </template>
                <template v-slot:mapped-task>
                    This page displays more information about a specific subject that is currently being taken by the user.
                    above.
                </template> 
                <template v-slot:details>
                    The page above is the <i>Subject Details Page</i>.
                    <br />
                    Try to navigate back to the <i>Subjects</i> page on sidebar menu.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- subjects-2  -->
            <Slide v-if="IBTestStore.currentPage == 'subjects-2'" mode="WEB" page="subjects" :hasRatings="false"> 
                <template v-slot:page-title>
                    Subjects Page (continuation)
                </template>
                <template v-slot:mapped-task>
                    Welcome back to the <i>Subjects</i> page. 
                </template> 
                <template v-slot:details>
                    The page above is the <i>Subjects</i> page.
                    <br />
                    Try to view the <i>weekly schedule</i> by clicking 
                    on the proper area of the interface.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- weekly-schedule * -->
            <Slide v-if="IBTestStore.currentPage == 'weekly-schedule'" mode="WEB" page="weekly-schedule"> 
                <template v-slot:page-title>
                    Weekly Schedule
                </template>
                <template v-slot:mapped-task>
                    This is the weekly schedule page. 
                    <br />
                    This page shows a spreadsheet view of the user's current weekly schedule.
                </template> 
                <template v-slot:details>
                    The page above is the <i>Weekly Schedule</i> page.
                    <br />
                    Try to navigate to the <i>Calendar</i> page from this page.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- calendar  * -->
            <Slide v-if="IBTestStore.currentPage == 'calendar'" mode="WEB" page="academic-calendar"> 
                <template v-slot:page-title>
                    Calendar Page
                </template>
                <template v-slot:mapped-task>
                    This page shows the current academic calendar for the current month.
                    <br /> 
                    Events highlighted green are monitored events, users will receive
                    notifications (via SMS or GBOX) about such events.
                </template> 
                <template v-slot:details>
                    The page above is the <i>Academic Calendar</i> page.
                    <br />
                    Try to navigate to the <i>Grades</i> page from the page above.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>
            
            <!-- grades-1 -->
            <Slide v-if="IBTestStore.currentPage == 'grades-1'" mode="WEB" page="grades-current"> 
                <template v-slot:page-title>
                    Grades Page (Current Semester)
                </template>
                <template v-slot:mapped-task>
                    This page shows the grades for the current semester.
                </template> 
                <template v-slot:details>
                    The page above is the <i>Grades Page</i> for the current semester.
                    <br />
                    Try to view the grades for the <b>previous semester</b> by clicking on the proper area.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- grades-2 * -->
            <Slide v-if="IBTestStore.currentPage == 'grades-2'" mode="WEB" page="grades-previous"> 
                <template v-slot:page-title>
                    Grades Page (Previous Semester)
                </template>
                <template v-slot:mapped-task>
                    This page shows grades for the previous semester.
                </template> 
                <template v-slot:details>
                    The page above is the <i>Grades</i> page for the previous semester.
                    <br />
                    Try to navigate to the <i>Subject Offerings</i> page from the page above.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>
            
            <!-- subject-offerings * -->
            <Slide v-if="IBTestStore.currentPage == 'subject-offerings'" mode="WEB" page="subject-offerings"> 
                <template v-slot:page-title>
                    Subject Offerings Page 
                </template>
                <template v-slot:mapped-task>
                    This page shows the offered subjects for the current semester.
                </template> 
                <template v-slot:details>
                    The page above is the <i>Subject Offerings</i> page.
                    <br />
                    Try to navigate to the <i>History</i> page from the page above.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

             
            <!-- history * -->
            <Slide v-if="IBTestStore.currentPage == 'history'" mode="WEB" page="history"> 
                <template v-slot:page-title>
                    History Page
                </template>
                <template v-slot:mapped-task>
                    This page shows the past and current subjects taken by the user. 
                    <br />
                    The user can browser any relevant info about past or current subjects from this page.
                </template> 
                <template v-slot:details>
                    The page above is the <i>History</i> page.
                    <br />
                    Try to view subject details for <i>Principles of Entrepreneurship</i> from the page above.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- subject-details--past * -->
            <Slide v-if="IBTestStore.currentPage == 'subject-details--past'" mode="WEB" page="subject-details--past"> 
                <template v-slot:page-title>
                    Subject Details (Taken Subject)
                </template>
                <template v-slot:mapped-task>
                    This page shows the subject details for a previously taken subject.
                </template> 
                <template v-slot:details>
                    The page above is the <i>Subject Details</i> page for an already taken subject.
                    <br />
                    Try to navigate to the <i>Curriculum</i> section from the page above.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- curriculum * -->
            <Slide v-if="IBTestStore.currentPage == 'curriculum'" mode="WEB" page="curriculum"> 
                <template v-slot:page-title>
                    Curriculum Page
                </template>
                <template v-slot:mapped-task>
                    This page shows the curriculum for the current school year.
                    <br /> 
                    The user can navigate to a specific year in one's curriculum to view more details about it.
                </template> 
                <template v-slot:details>
                    The page above is the <i>Curriculum</i> page.
                    <br />
                    Try to navigate to the <i>History</i> page from the page above.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- notifications * -->
            <Slide v-if="IBTestStore.currentPage == 'notifications'" mode="WEB" page="notifications"> 
                <template v-slot:page-title>
                    Notifications Page
                </template>
                <template v-slot:mapped-task>
                    This page allows the user to manage his or her notification settings.
                </template> 
                <template v-slot:details>
                    The page above is the <i>Notifications</i> page.
                    <br />
                    Try to <i>Log Out</i> from the app from this page.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- login-page-2 * -->
            <Slide v-if="IBTestStore.currentPage == 'login-page-2'" mode="WEB" page="login-page-cleared"> 
                <template v-slot:page-title>
                    Log In Page (After Logout)
                </template>
                <template v-slot:mapped-task>
                    Congrats! You have finished this phase.
                </template> 
                <template v-slot:details>
                    You may now move on the next phase by clicking on the <i>next</i> button below.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="web"
                        :coords="clickables['web'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>
        </div>

        <!-- 
            MOBILE-BASED ISSUES BASED TESTING
        -->
        <div v-if="consentFormStore.mode == 'MOBILE'" class="mobile-based-ibt-testing"> 
            
            <!-- login-page-1 * -->
            <Slide v-if="IBTestStore.currentPage == 'login-page-1'" mode="MOBILE" page="login-page"> 
                <template v-slot:page-title>
                    Log In Page
                </template>
                <template v-slot:mapped-task>
                    This page allows users to log in onto the app.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Log In Page</i>.
                    <br />
                    Try to log in using the page by clicking the proper area.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- profile--academic-information * -->
            <Slide v-if="IBTestStore.currentPage == 'profile--academic-information'" mode="MOBILE" page="profile--academic-information"> 
                <template v-slot:page-title>
                    Profile Page (Academic Information Tab)
                </template>
                <template v-slot:mapped-task>
                    This page shows the current academic information of the user. 
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Profile Page (Academic Information Tab)</i>.
                    <br />
                    Try to the navigate to the <i>Personal Information Tab</i> from the page on the left.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- profile--personal-information * -->
            <Slide v-if="IBTestStore.currentPage == 'profile--personal-information'" mode="MOBILE" page="profile--personal-information"> 
                <template v-slot:page-title>
                    Profile Page (Personal Information Tab)
                </template>
                <template v-slot:mapped-task>
                    This page shows the current user's personal information.
                </template> 
                <template v-slot:details>
                    The page on the left shows the <i>Profile Page (Personal Information Tab)</i>
                    <br /> 
                    Try to the navigate to the <i>Subjects</i> page from the page on the left.
                    <br /> 
                    <b>Hint: Use the collapsible sidebar.</b>
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- sidebar-1 * -->
            <Slide v-if="IBTestStore.currentPage == 'sidebar-1'" mode="MOBILE" page="sidebar" :hasRatings="false"> 
                <template v-slot:page-title>
                    Sidebar
                </template>
                <template v-slot:mapped-task>
                    This is the app's collapsible sidebar.
                </template> 
                <template v-slot:details>
                    Try to visit the <i>Subjects</i> page from here.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- subjects-1 * -->
            <Slide v-if="IBTestStore.currentPage == 'subjects-1'" mode="MOBILE" page="subjects"> 
                <template v-slot:page-title>
                    Subjects Page
                </template>
                <template v-slot:mapped-task>
                    This page shows the currently logged in user's enrolled subjects for the current semester.
                </template> 
                <template v-slot:details>
                    The page o the left is the <i>Subjects Page</i>
                    <br /> 
                    Try to view the <b>Weekly Schedule</b> from the page on the left.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- weekly-schedule * -->
            <Slide v-if="IBTestStore.currentPage == 'weekly-schedule'" mode="MOBILE" page="weekly-schedule"> 
                <template v-slot:page-title>
                    Weekly Schedule Page
                </template>
                <template v-slot:mapped-task>
                    This page shows the current user's weekly schedule.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Weekly Schedule</i> page.
                    <br />
                    Try to go back to the <b>Subjects</b> page using the sidebar.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- sidebar-2 -->
            <Slide v-if="IBTestStore.currentPage == 'sidebar-2'" mode="MOBILE" page="sidebar" :hasRatings="false"> 
                <template v-slot:page-title>
                    Sidebar
                </template>
                <template v-slot:mapped-task>
                    This is the app's collapsible sidebar.
                </template> 
                <template v-slot:details>
                    Try to go back to the <i>Subjects</i> page from here.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- subjects-2 -->
            <Slide v-if="IBTestStore.currentPage == 'subjects-2'" mode="MOBILE" page="subjects" :hasRatings="false"> 
                <template v-slot:page-title>
                    Subjects Page (continuation)
                </template>
                <template v-slot:mapped-task>
                    Welcome Back to the <i>Subjects</i> page.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Subjects</i> page.
                    <br />
                    Try to view more details about the <i>Introduction to Entrepreneurship</i> page from such page.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- subject-details--current:general-info * -->
            <Slide v-if="IBTestStore.currentPage == 'subject-details--current:general-info'" mode="MOBILE" page="subject-details--current:general-info"> 
                <template v-slot:page-title>
                    Subject Details (General Info. Tab)
                </template>
                <template v-slot:mapped-task>
                    This page allows shows more information about the subject you clicked 
                    on the previous screen, namely, the <i>Introduction to Entrepreneurship</i>
                    page. 
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Subject Details (General Info. Tab)</i>.
                    <br />
                    Try to switch to the <i>Students List</i> tab on the page on the left.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- subjects-details--current:section * -->
            <Slide v-if="IBTestStore.currentPage == 'subject-details--current:section'" mode="MOBILE" page="subject-details--current:section"> 
                <template v-slot:page-title>
                    Subject Details (Classmates Tab)
                </template>
                <template v-slot:mapped-task>
                    This page shows the student list of the currently viewed subject.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Subject Details (Students List Tab)</i>.
                    <br />
                    Try to switch to the <i>Grade</i> tab from the page on the left.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- subject-details--current:summary * -->
            <Slide v-if="IBTestStore.currentPage == 'subject-details--current:summary'" mode="MOBILE" page="subject-details--current:summary"> 
                <template v-slot:page-title>
                    Subject Details (Grade Tab)
                </template>
                <template v-slot:mapped-task>
                    This page shows the grade for the currently viewed subject. 
                    <br /> 
                    Since the subject is currently being taken, there are no grades yet.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Subject Details (Grade Tab)</i>.
                    <br />
                    Try to navigate to the <i>Academic Calendar</i> page using the sidebar.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- sidebar-3 -->
            <Slide v-if="IBTestStore.currentPage == 'sidebar-3'" mode="MOBILE" page="sidebar" :hasRatings="false"> 
                <template v-slot:page-title>
                    Sidebar (continuation)
                </template>
                <template v-slot:mapped-task>
                    This is the app's collapsible sidebar.
                </template> 
                <template v-slot:details>
                    Try to navigate to the <i>Calendar</i> from here.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- academic-calendar * -->
            <Slide v-if="IBTestStore.currentPage == 'academic-calendar'" mode="MOBILE" page="academic-calendar"> 
                <template v-slot:page-title>
                    Academic Calendar Page
                </template>
                <template v-slot:mapped-task>
                    This page allows the user to view his or her weekly schedule.
                    <br />
                    Each day has its own tab.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Academic Calendar</i> page. 
                    <br /> 
                    Try to navigate to the the <i>Grades</i> page using the sidebar.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- sidebar-4 -->
            <Slide v-if="IBTestStore.currentPage == 'sidebar-4'" mode="MOBILE" page="sidebar" :hasRatings="false"> 
                <template v-slot:page-title>
                    Sidebar (continuation)
                </template>
                <template v-slot:mapped-task>
                    This is the app's collapsible sidebar.
                </template> 
                <template v-slot:details>
                    Try to visit the <i>Grades</i> page from here.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- grades-1  -->
            <Slide v-if="IBTestStore.currentPage == 'grades-1'" mode="MOBILE" page="grades--current"> 
                <template v-slot:page-title>
                    Grades Page (Current Semester)
                </template>
                <template v-slot:mapped-task>
                    This page shows the grades for the current semester of the current user.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Grades Page (Current Semester)</i>.
                    <br />
                    Try to view the grades for the previous semester using the page above.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- grades-2 * -->
            <Slide v-if="IBTestStore.currentPage == 'grades-2'" mode="MOBILE" page="grades--previous"> 
                <template v-slot:page-title>
                    Grades (Previous Semester)
                </template>
                <template v-slot:mapped-task>
                    This page shows the grades of the current user for the previous semester.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Grades (Previous Semester)</i>.
                    <br />
                    Try to navigate to the <i>Subject Offerings</i> page from the page on the left using the sidebar.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- sidebar-5 -->
            <Slide v-if="IBTestStore.currentPage == 'sidebar-5'" mode="MOBILE" page="sidebar" :hasRatings="false"> 
                <template v-slot:page-title>
                    Sidebar (continuation)
                </template>
                <template v-slot:mapped-task>
                    This is the app's collapsible sidebar.
                </template> 
                <template v-slot:details>
                    Try to visit the <i>Subject Offerings</i> page from here.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- subject-offerings--hidden-search-filters  -->
            <Slide v-if="IBTestStore.currentPage == 'subject-offerings--hidden-search-filters'" mode="MOBILE" page="subject-offerings--hidden-search-filters"> 
                <template v-slot:page-title>
                    Subject Offerings (Hidden Search Filters)
                </template>
                <template v-slot:mapped-task>
                    This page allows the users to view and browse the currently offered subjects 
                    for the semester.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Subject Offerings (Hidden Search Filters)</i> page.
                    <br />
                    The search filters section is currently closed. 
                    <br />
                    Try to open it by clicking on the proper area.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- subject-offerings--shown-search-filters * -->
            <Slide v-if="IBTestStore.currentPage == 'subject-offerings--shown-search-filters'" mode="MOBILE" page="subject-offerings--shown-search-filters"> 
                <template v-slot:page-title>
                    Subject Offerings (Shown Search Filters)
                </template>
                <template v-slot:mapped-task>
                    Congrats! You have revealed the search filters section.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Subject Offerings (Shown Search Filters)</i>
                    <br />
                    Try to visit the <i>History</i> page using the sidebar.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- sidebar-6 -->
            <Slide v-if="IBTestStore.currentPage == 'sidebar-6'" mode="MOBILE" page="sidebar"> 
                <template v-slot:page-title>
                    Sidebar (continuation)
                </template>
                <template v-slot:mapped-task>   
                    This is the app's collapsible sidebar.
                </template> 
                <template v-slot:details>
                    Try to navigate to the <i>History</i> page from here.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- history * -->
            <Slide v-if="IBTestStore.currentPage == 'history'" mode="MOBILE" page="history"> 
                <template v-slot:page-title>
                    History Page
                </template>
                <template v-slot:mapped-task>
                    This page shows the current and previously taken subjects of the user. 
                    <br /> 
                    The user can search for specific subjects using relevant information.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>History</i> page.
                    <br />
                    Try to view the <i>Principles of Entrepreneurship</i> subject from the <i>Subject History</i> table.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- subject-details--past:general-info * -->
            <Slide v-if="IBTestStore.currentPage == 'subject-details--past:general-info'" mode="MOBILE" page="subject-details--past:general-info"> 
                <template v-slot:page-title>
                    Subject Details (Taken Subject)
                </template>
                <template v-slot:mapped-task>
                    This page shows the <i>General Info</i> tab for an already taken subject that 
                    you have just clicked on fromthe <i>Subject History</i> page.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Subject Details (Taken Subject)</i> page.
                    <br />
                    Try to navigate to the the <i>Curriculum</i> page using the sidebar.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- sidebar-7 -->
            <Slide v-if="IBTestStore.currentPage == 'sidebar-7'" mode="MOBILE" page="sidebar" :hasRatings="false"> 
                <template v-slot:page-title>
                    Sidebar (continuation)
                </template>
                <template v-slot:mapped-task>
                    This is the app's collapsible sidebar.
                </template> 
                <template v-slot:details>
                    Try to visit the <i>Curriculum</i> page from here.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- curriculum * -->
            <Slide v-if="IBTestStore.currentPage == 'curriculum'" mode="MOBILE" page="curriculum"> 
                <template v-slot:page-title>
                    Curriculum Page
                </template>
                <template v-slot:mapped-task>
                    This page shows the current user's academic curriculum.
                    <br /> 
                    The curriculum is shown as divided per year level and by default, the current year.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Curriculum Page</i>.
                    <br />
                    Try to navigate to the <i>Notifications</i> page using the sidebar.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- sidebar-8 -->
            <Slide v-if="IBTestStore.currentPage == 'sidebar-8'" mode="MOBILE" page="sidebar" :hasRatings="false"> 
                <template v-slot:page-title>
                    Sidebar (continuation)
                </template>
                <template v-slot:mapped-task>
                    This is the app's collapsible sidebar.
                </template> 
                <template v-slot:details>
                    Try to navigate to the <i>Notifications</i> page from here.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- notifications--configuration * -->
            <Slide v-if="IBTestStore.currentPage == 'notifications--configuration'" mode="MOBILE" page="notifications--configuration"> 
                <template v-slot:page-title>
                    Notifications (Configuration Tab)
                </template>
                <template v-slot:mapped-task>
                    This page allows the user to edit which events he or she wants to receive 
                    notifications about.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Notifications (Configuration Tab)</i> page. 
                    <br /> 
                    Try to switch to the <i>Contact Settings Tab</i> from here.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- notifications--contact-settings * -->
            <Slide v-if="IBTestStore.currentPage == 'notifications--contact-settings'" mode="MOBILE" page="notifications--contact-settings"> 
                <template v-slot:page-title>
                    Notifications (Contact Settings Tab)
                </template>
                <template v-slot:mapped-task>
                    This page allows the user to the edit his or her contact information.
                </template> 
                <template v-slot:details>
                    The page on the left is the <i>Notifications (Contact Settings Tab)</i>.
                    <br />
                    Try to log out from the app using the sidebar.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>


            <!-- sidebar-9 -->
            <Slide v-if="IBTestStore.currentPage == 'sidebar-9'" mode="MOBILE" page="sidebar"> 
                <template v-slot:page-title>
                    Log In Page (After Logout)
                </template>
                <template v-slot:mapped-task>
                    Congrats! You have finished this phase.
                </template> 
                <template v-slot:details>
                    Tou can now move to the next phase.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            <!-- login-page-2 -->
            <Slide v-if="IBTestStore.currentPage == 'login-page-2'" mode="MOBILE" page="login-page-cleared"> 
                <template v-slot:page-title>
                    Log In Page (After Logout)
                </template>
                <template v-slot:mapped-task>
                    Congrats! You have finished this phase.
                </template> 
                <template v-slot:details>
                    You may now move on the next phase by clicking on the <i>next</i> button below.
                </template>
                <template v-slot:map> 
                    <Clickable 
                        mode="mobile"
                        :coords="clickables['mobile'][IBTestStore.currentPage]" 
                        :handler="() => {
                            moveToNextPage();
                        }" 
                    />
                </template>
            </Slide>

            
        </div>
        <br /><br />
        <div class="actions">
            <div class="left">
                <!-- Consent Form -->
                <router-link to="consent-form">
                    <button>
                        ← Go Back to Consent Form
                    </button>
                </router-link>

            
            </div> 

            <div class="right">
                <!-- Self-Report Testing Form -->
                <router-link to="self-report-testing">
                    <button :disabled="IBTestStore.currentPage != 'login-page-2'">
                        Go to Self-Report Testing Page (Phase 2 of 2) →
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped> 

</style>