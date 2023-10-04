import { getFoods, setFoods } from "./database.js"

const foods = getFoods()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "foods") {
            setFoods(parseInt(event.target.value))
        }
    }
)

export const Foods = () => {
    let html = "<h2></h2>"
    html += "<select id='foods'>"
    html += '<option value="0">Select your hawt dog</option>'

    const listItems = foods.map(food => {
        return `
        <option value="${food.id}">${food.name} $${food.price}</option>`
    })

    html += listItems.join("")
    html += "</select>"
    
    return html
}