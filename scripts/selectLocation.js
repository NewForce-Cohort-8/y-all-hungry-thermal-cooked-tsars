import { getLocations, getTransientState } from "./database.js"



export const selectLocation = () => {
    const locations = getLocations()
    const state = getTransientState()
    
    for(const singleLocation of locations){

        if(state.selectedLocation === singleLocation.id){
            return `<h1>${singleLocation.name}</h1>`
        }
      
        
    }




}