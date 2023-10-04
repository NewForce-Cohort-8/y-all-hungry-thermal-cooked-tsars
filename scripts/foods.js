import { getFoods, setFoods } from "./database.js"

const foods = getFoods();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "foods") {
            setFoods(parseInt(event.target.value));
        }
    }
);

export const Foods = () => {
    let html = `<div class = "-">
    <h2>Food Options</h2>
    <select id = "food-select" name = "foods">
    <option value = "0">Select your hawt dog</option>`;

    for (const food of foods) {
        html += `<option value = "${food.id}">${food.name} $${food.price}<option>`;
    }

    html += `</select>
    </div>`
    return html;
}