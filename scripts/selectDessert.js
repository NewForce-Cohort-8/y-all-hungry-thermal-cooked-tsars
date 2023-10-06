import { getDesserts, getTransientState } from "./database.js"



export const selectDessert = () => {
    const desserts = getDesserts()
    const state = getTransientState()
    
    for(const singleDessert of desserts){

        if(state.selectedDessert === singleDessert.id){
            return `<h1>${singleDessert.name}</h1>`
        }
      
        
    }




}