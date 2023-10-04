import { getDesserts, setDessert } from "./database.js"

const desserts = getDesserts()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "dessert") {
            setDessert(parseInt(changeEvent.target.value))
        }
    }
)

export const Desserts = () => {
    let html = "<ul>"

    
    for (const dessert of desserts) {
        html += `
        <select id="desserts">
    <option value="0">Prompt to select resource...</option>
    <option value="1">${dessert.id} ${dessert.name}{</option>
    </select>`
    }

    html += "</ul>"
    return html
}