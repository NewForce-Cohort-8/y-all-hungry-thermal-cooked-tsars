import { getDrinks, setDrink } from "./database.js"

const drinks = getDrinks()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "drink") {
            setDrink(parseInt(event.target.value))
        }
    }
)

export const Drinks = () => {
    let html = "<h2></h2>"
    html += "<select id='drinks'>"
    html += '<option value="0">Please Select Your Option...</option>'
        const listItems = drinks.map(drinks => {
            return `
                <option value="${drinks.id}"> ${drinks.name}- $${drinks.price}</option>`
        })
        html += listItems.join("")
        html += "</select>"
        return html
    }


