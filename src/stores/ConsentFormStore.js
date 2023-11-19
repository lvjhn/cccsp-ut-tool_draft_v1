import { defineStore } from 'pinia'; 

export const useConsentFormStore = defineStore("consent-form", {
    state: () => ({
        _init: false,
        mode: "MOBILE", 
        age: 18, 
        gender: "MALE", 
        course: "",
        year: 1
    }), 
    getters: () => {

    }, 
    actions:  {
        init() {
            this._init = true;
        },  
        setMode(mode) {
            this.mode = mode;
        },
        setAge(age) {
            this.age = age; 
        }, 
        setGender(gender) {
            this.gender = gender;
        }, 
        setCourse(course) {
            this.course = course; 
        }, 
        setYear(year) {
            this.year = year;
        }
    },
    persist: true
});