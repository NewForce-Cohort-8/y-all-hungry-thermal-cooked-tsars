import { setToy, getToys, getToysLoc, getTransientState } from "./database.js"

const toys = getToys()
const toysLocs = getToysLoc()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "toy") {
            setToy(parseInt(event.target.value))
        }
    }
)

export const Toys = () => {
    let state = getTransientState()
    let html = "<h2></h2>"
    html += "<select id='toys'>"
    html += `<option value = "0">Choose a toy...</option>`

    const listItems = toys.map(toy => {
        return `<option value="${toy.id}"> ${toy.name} $${toy.price}</option>`})
        html += listItems.join("")
        html += "</select>"

        return html
    }
