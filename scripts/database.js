const database = {
    transientState: {},

    drinks: [
        {id: 1, name: "Aldebaran Whiskey", desc: "", price: 3, image: "" },
        {id: 1, name: "Darmok and Gelatto", desc: "", price: 4, image: "" },
        {id: 1, name: "Romulan Ale", desc: "", price: 1, image: "" },
        {id: 1, name: "Bantha Milk", desc: "", price: 2, image: "" },
    ],


    locations: [
        { id: 1, name: "Gotham City"},
        { id: 2, name: "Naboo"},
        { id: 3, name: "Central Perk"},
        { id: 4, name: "Starfleet Headquarters"}
    ]
}

export const getDrinks = () => {
    database.drinks.map(drink => ({...drink}))
}

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
