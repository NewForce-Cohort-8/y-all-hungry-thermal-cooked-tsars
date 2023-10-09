// Import getFoods and getDesserts below
import { getLocations, getdrinksLoc, getToysLoc,getdessertsLoc, getfoodsLoc, getOrders } from "./database.js";

// Add getfoodsLoc and getdessertsLoc
const buildOrderListItem = (order) => {
    const locations = getLocations()
    const drinks = getdrinksLoc()
    const toys = getToysLoc()
    const desserts = getdessertsLoc()
    const foods =getfoodsLoc()
    const orders = getOrders()


    // Code for foundFood and foundDessert and others below
    const foundDrink = drinks.find(
        (drink) => {
            return drink.id === order.drinkId
        }
        
    )
    const foundFood = foods.find(
        (food) => {
            return food.id === order.foodId
        }
        
    )
    const foundDessert = desserts.find(
        (dessert) => {
            return dessert.id === order.dessertId
        }
        
    )
    const foundToy = toys.find(
        (toy) => {
            return toy.id === order.toyId
        }
        
    )  

    const totalCost = foundDrink.price + foundFood.price + foundDessert.price + foundToy.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Your order #${order.id} will be $${costString}. Thank you. Have a nice day.
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
