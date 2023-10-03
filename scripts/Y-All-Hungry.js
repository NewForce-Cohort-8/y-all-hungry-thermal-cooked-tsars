//import { Orders } from "./Orders.js"
import { Drinks } from "./drinks.js"

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>
        <section class="choices__location options">
        <h2>Locations</h2>
       
        <article class="choices">
            <section class="choices__foods options">
                <h2>Hot Dogs</h2>
               
            </section>
            <section class="choices__drinks options">
                <h2>Drinks</h2>
                ${Drinks()}
            </section>
            <section class="choices__dessert options">
            <h2>Desserts</h2>
          
        </section>
            <section class="choices__toy options">
                <h2>toys</h2>
               
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}