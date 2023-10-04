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
    let html = `div class = "-"
    <h2>Food Options</h2>
    <select id = "int">
    <option value = "0">Select your hawt dog</option>`

    for (const food of foods) {
        html += `option value = "${foods.id}">${foods.name}<option>`
    }

    html += `</select>
    </div>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "foods") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)
        }
    }
)