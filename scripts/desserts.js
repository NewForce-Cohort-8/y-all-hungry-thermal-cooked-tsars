import { getDesserts, setDessert } from "./database.js"

const desserts = getDesserts()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "desserts") {
            setDessert(parseInt(changeEvent.target.value))
        }
    }
)

export const Desserts = () => {
    let html = "<h2></h2>"
    html += "select id='desserts'>"
    html += '<option value="0">Please Select Your Ice Cream</option>'

        const listItems = desserts.map
        (desserts => {
            return `
               <option value="${desserts.id}">${desserts.name} $${dessert.price}</option>`
        })
        html += listItems.join("")
        html += "</select>"
        return html
}
