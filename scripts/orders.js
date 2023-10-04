// Import getFoods and getDesserts below
import { getLocations, getDrinks, } from "./database.js";

// Add getFoods and getDesserts
const buildOrderListItem = (order) => {
    const locations = getLocations()
    const drinks = getDrinks()


    // Code for foundFood and foundDessert below
    const foundDrink = drinks.find(
        (drink) => {
            return drink.id === order.drinkId
        }
    )
    const totalCost = foundDrink.price + foundFood.price + foundDessert.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`       
    
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
