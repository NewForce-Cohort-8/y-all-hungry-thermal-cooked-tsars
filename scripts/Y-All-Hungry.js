// import { Orders } from "./orders.js"
import { Drinks } from "./drinks.js"
import { Locations } from "./locations.js"
import { Toys } from "./toys.js"
import { Foods } from "./foods.js"
import { Desserts } from "./desserts.js"
import { selectFood } from "./selectFoods.js"
import { selectLocation } from "./selectLocation.js"
import { selectToy } from "./selectToy.js"
import { selectDrink } from "./selectDrink.js"



import { selectDessert } from "./selectDessert.js"

export const YAllHungry= () => {
    return `
        <h1>TCT Food Trucks</h1>
        <section class="choices__locations options">
        <h2>Locations</h2>
        ${Locations()}
       
        <article class="choices">
            <section class="choices__foods options">
                <h2>Hot Dogs</h2>
               ${Foods()}
            </section>
            <section class="choices__drinks options">
                <h2>Drinks</h2>
                ${Drinks()}
            </section>
            <section class="choices__desserts options">
            <h2>Desserts</h2>
               ${Desserts()}
        </section>
            <section class="choices__toys options">
                <h2>Toys</h2>
                ${Toys()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <div class=selectLocation>
        ${selectLocation()}
        </div>

        <div class=selectDrink>
        ${selectDrink()}
        </div>
        </div>
        <div class=selectFood>
        ${selectFood()}
        <div class=selectToy>
        ${selectToy()}
        </div>
        <div class=selectDessert>
        ${selectDessert()}
        </div>

        <article class="customOrders">
            <h2>Order Meal</h2>
 
        </article>
    `
}