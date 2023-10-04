import { getLocations, getDrinks } from "./database.js";

const buildOrderListItem = (order) => {
    const locations = getLocations()
    const drinks = getDrinks()


    const foundLocation = locations.find(
        (location) => {
            return location.id === order.locationId
        }
    )
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
