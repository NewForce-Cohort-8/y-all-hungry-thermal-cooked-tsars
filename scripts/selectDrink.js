import { getDrinks, getTransientState } from "./database.js"

export const selectDrink = () => {
    const drinks = getDrinks()
    const state = getTransientState()

    for(const singleDrink of drinks)

    if(state.selectedDrink === singleDrink.id){
        return `<h1>${singleDrink.name}</h1>`
    }
}