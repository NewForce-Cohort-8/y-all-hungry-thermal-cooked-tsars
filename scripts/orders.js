// Import getFoods and getDesserts below
import { getLocations, getDrinks, getToys, getDesserts } from "./database.js";

// Add getFoods and getDesserts
const buildOrderListItem = (order) => {
    const locations = getLocations()
    const drinks = getDrinks()
    const toys = getToys()
    const desserts = getDesserts()

    // Code for foundFood and foundDessert below
    const foundDrink = drinks.find(
        (drink) => {
            return drink.id === order.drinkId
        }
    )
    const foundDessert = desserts.find(
        (dessert) => {
            return dessert.id === order.dessertId
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
