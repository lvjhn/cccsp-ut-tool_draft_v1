import { defineStore } from 'pinia'; 
import { webPages, mobilePages } from '@/page-list';

export const useIBTestStore = defineStore("ibt", {
    state: () => ({
        _init: false,
        pages: {

        },
        currentPage: "login-page-1"
    }), 
    getters: () => {

    }, 
    actions:  {
        init() {
            this._init = true;

            if(localStorage.getItem("ibt")) 
                return;
            
            this.pages.mobile = {}; 
            this.pages.web = {}; 

            for(let pageName in mobilePages) {
                this.pages.mobile[pageName] = {
                    intuitiveness: 4, 
                    understandability: 4,
                    explanation_i: "",
                    explanation_u: ""
                }    
            }

            for(let pageName in webPages) {
                this.pages.web[pageName] = {
                    intuitiveness: 4, 
                    understandability: 4,
                    explanation_i: "", 
                    explanation_u: ""
                }
            }

            console.log(this.pages);
        },  
        setCurrentPage(page) {
            this.currentPage = page;
        },
        setRatingU(mode, page, rating) {
            this.pages[mode][page].understandability = rating; 
        },
        setIssuesU(mode, page, issues) {
            this.pages[mode][page].explanation_u = issues;
        },
        setRatingI(mode, page, rating) {
            this.pages[mode][page].intuitiveness = rating; 
        },
        setIssuesI(mode, page, issues) {
            this.pages[mode][page].explanation_i = issues;
        }
    },
    persist: true
});