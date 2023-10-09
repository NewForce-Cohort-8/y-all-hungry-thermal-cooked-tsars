import { getToys, getTransientState} from "./database.js"

export const selectToy = () => {
    const toys = getToys()
    const state = getTransientState()

    for(const singleToy of toys){

        if(state.selectedToy === singleToy.id){
            return `<h1>${singleToy.name}</h1>`
        }
    }
}
