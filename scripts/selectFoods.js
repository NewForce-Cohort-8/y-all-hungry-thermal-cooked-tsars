import {getFoods, getTransientState } from "./database.js"


export const selectFoods = () => {
    const foods = getFoods()
    const state = getTransientState()

    for (const singleFood of foods){
        if (state.selectedFood === singleFood.id){

            return `<h1>${singleFood.name}</h1>`
        }
    }
}