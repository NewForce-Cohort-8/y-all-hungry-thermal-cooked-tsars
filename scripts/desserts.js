import { getDesserts,setDessert } from "./database.js"

const desserts = getDesserts()



document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "desserts") {
            setDessert(parseInt(event.target.value))
        }
    }
)

export const Desserts = () => {
   
    let html = "<h2></h2>"
    html += "<select id='desserts'>"
    html += '<option value="0">Please Select Your Ice Cream</option>'

        const listItems = desserts.map
        (dessert => {
            return `
               <option value="${dessert.id}">${dessert.name} $${dessert.price}</option>`
        })
        html += listItems.join("")
        html += "</select>"
        return html
}
