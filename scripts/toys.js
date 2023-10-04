import { setToy, getToys } from "./database.js"

const toys = getToys

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "toy") {
            setToy(parseInt(event.target.value))
        }
    }
)

export const toy = () => {
    let html = "<ul>"

    // converts objects to <li> elements
    for (const toy of toys) {
        html += `<li>
            <input type="radio" name="toy" value="${toy.id}" /> ${toy.name}
        </li>`
    }

    html += "</select></section>"
    return html
}