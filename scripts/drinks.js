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
        html += `
        <select id="drinks">
    <option value="0">Prompt to select resource...</option>
    <option value="1">${drink.id} ${drink.name}{</option>
    </select>`
    }

    html += "</ul>"
    return html
}