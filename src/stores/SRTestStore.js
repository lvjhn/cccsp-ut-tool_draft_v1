import { defineStore } from 'pinia'; 
import { webPages, mobilePages } from '@/page-list';
import { SUS_Questions } from '../sus-questions';

export const useSRTestStore = defineStore("srt", {
    state: () => ({
        _init: false,
        ratings: []
    }), 
    getters: () => {
        
    }, 
    actions:  {
        init() {
            this._init = true;

            if(localStorage.getItem("srt")) 
                return;

            // initialize ratings table
            for(let i = 0; i < SUS_Questions.length; i++) {
                this.ratings[i] = 3;
            }
        }
    },
    persist: true
});