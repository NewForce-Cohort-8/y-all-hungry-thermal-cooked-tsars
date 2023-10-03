const database = {
    transientState: {},
    drinks: [
        {id: 1, name: "Aldebaran Whiskey", desc: "", price: 3, image: "" },
        {id: 1, name: "Darmok and Gelatto", desc: "", price: 4, image: "" },
        {id: 1, name: "Romulan Ale", desc: "", price: 1, image: "" },
        {id: 1, name: "Bantha Milk", desc: "", price: 2, image: "" },
],

//     foods: [
//     { id: 1, name: "The Mothman", desc: "A hot dog with beans and two pepperoni eyes on top", price: 3, img: ""},
//     { id: 2, name: "The Casa Grande Special", desc: "Definitely not just a taco", price: 3.5, img: ""},
//     { id: 3, name: "The Kirk Dog", desc: "Ripped shirt not included, but the William Shatner tax is", price: 8, img: ""},
//     { id: 4, name: "Hallowieners", desc: "Our spooky special", price: 2, img: ""}
// ],

    locations: [
        { id: 1, name: "Gotham City"},
        { id: 2, name: "Naboo"},
        { id: 3, name: "Central Perk"},
        { id: 4, name: "Starfleet Headquarters"}
    ],
    
}
export const getDrinks = () => {
    database.drinks.map(drink => ({...drink}))
}
export const setDrink = (drinkId) => {
    database.transientState.selectedDrink = drinkId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

// export const getFoods =() => {
//     return database.getFoods.map(f => ({...f}))
// }

// export const setFoods = (foodsId) => {
//     database.transientState.selectedLocation = locationId
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }

export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getLocations = () => {
    return database.locations.map(f => ({...f}))
}

export const completeOrder = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
