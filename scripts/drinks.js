import { getDrinks, getdrinksLoc, setDrink, getTransientState} from "./database.js"

const drinks = getDrinks()
const drinkLocs =getdrinksLoc()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "drink") {
            setDrink(parseInt(event.target.value))
        }
    }
)

export const Drinks = () => {
    let state = getTransientState()
    console.log(state)
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

