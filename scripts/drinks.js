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
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const drink of drinks) {
        html += `<li>
            <input type="radio" name="drink" value="${drink.id}" /> ${drink.name}
        </li>`
    }

    html += "</ul>"
    return html
}