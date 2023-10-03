const database = {
    transientState: {},
    drinks: [
        {id: 1, name: "", desc: "", price: 0, image: "" },
        {id: 1, name: "", desc: "", price: 0, image: "" },
        {id: 1, name: "", desc: "", price: 0, image: "" },
        {id: 1, name: "", desc: "", price: 0, image: "" },
]
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
