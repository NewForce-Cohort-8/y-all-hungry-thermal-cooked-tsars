const database = {
    desserts: [
        {id: 1, name: "Peppermint Pepperoni Roll", desc: "With real pepperonis!", price: 3, image: "" },
        {id: 2, name: "Wild Ramp", desc: "Smelly but tasty.", price: 3, image: "" },
        {id: 3, name: "Beans and Cornbread", desc: "Just like Grandma's house. ", price: 2, image: "" },
        {id: 4, name: "Coal", desc: "Don't ask questions.", price: 1, image: "" },
    ]
}
export const getDesserts = () => {
    database.desserts.map(dessert => ({...dessert}))
}

export const setDessert = (dessertId) => {
    database.transientState.selecteddessert = dessertId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}


