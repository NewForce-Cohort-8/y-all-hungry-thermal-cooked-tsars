//import { Orders } from "./Orders.js"
import { Drinks } from "./drinks.js"
import { Locations } from "./locations.js"
import { Toys } from "./toys.js"
import { Foods } from "./foods.js"

export const YAllHungry= () => {
    return `
        <h1>TCT Food Trucks</h1>
        <section class="choices__location options">
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
            <section class="choices__dessert options">
            <h2>Desserts</h2>
          
        </section>
            <section class="choices__toys options">
                <h2>Toys</h2>
                ${Toys()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Orders</h2>
          
        </article>
    `
}