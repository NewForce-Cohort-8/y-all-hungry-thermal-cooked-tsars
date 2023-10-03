const database = {
<<<<<<< HEAD
    transientState: {},
    drinks: [
        {id: 1, name: "", desc: "", price: 0, image: "" },
        {id: 1, name: "", desc: "", price: 0, image: "" },
        {id: 1, name: "", desc: "", price: 0, image: "" },
        {id: 1, name: "", desc: "", price: 0, image: "" },
]
=======
    transientState: {}

    locations: [
        { id: 1, name: "Gotham City"},
        { id: 2, name: "Naboo"},
        { id: 3, name: "Central Perk"},
        { id: 4, name: "Starfleet Headquarters"}
    ]
>>>>>>> 2edb63499be87bce1cefad456e6bf1dbfeb00559
}
export getDrinks = 

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
