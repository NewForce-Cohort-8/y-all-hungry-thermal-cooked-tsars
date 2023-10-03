const database = {
    transientState: {}

    locations: [
        { id: 1, name: "Gotham City"},
        { id: 2, name: "Naboo"},
        { id: 3, name: "Central Perk"},
        { id: 4, name: "Starfleet Headquarters"}
    ],
    // foods: [
    //     { id: 1, name: "The Mothman", desc: "A hot dog with beans and two pepperoni eyes on top", price: 3, img: ""},
    //     { id: 2, name: "The Casa Grande Special", desc: "Definitely not just a taco", price: 3.5, img: ""},
    //     { id: 3, name: "The Kirk Dog", desc: "Ripped shirt not included, but the William Shatner tax is", price: 8, img: ""},
    //     { id: 4, name: "Hallowieners", desc: "Our spooky special", price: 2, img: ""}
    // ]
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
    return database.getLocations.map(f => ({...f}))
}

export const completeOrder = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
