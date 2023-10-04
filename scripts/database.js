const database = {
    
    transientState: {},
    desserts: [
        {
            id: 1, 
            name: "Peppermint Pepperoni Roll", 
            desc: "With real pepperonis!", 
            price: 3, 
            image: "https://jahzkitchen.com/wp-content/uploads/2020/04/Pizza-Dogs-with-Fried-Hot-Dog.jpg"
         },
        {
            id: 2, 
            name: "Wild Ramp", 
            desc: "Smelly but tasty.", 
            price: 3, 
            image: "https://www.visitmountaineercountry.com/wp-content/uploads/2022/05/cburkhardt45-Instagram-3205-ig-18006239062406098-257x300.jpg" 
        },
        {
            id: 3, 
            name: "Beans and Cornbread", 
            desc: "Just like Grandma's house. ", 
            price: 2, 
            image: "https://irepo.primecp.com/2015/06/226067/Hot-Dog-Cornbread-Casserole_MASTER_ID-1062618.jpg?v=1062618" 
        },
        {
            id: 4, 
            name: "Coal", 
            desc: "Don't ask questions.", 
            price: 1, 
            image: "https://media.istockphoto.com/id/96648320/photo/burnt-hotdog.jpg?s=612x612&w=0&k=20&c=foEYHGYJDDW1Q-mcqMdBa6Ya_XlnOK1bQJix_mIXv_c=" },
    ],

    toys: [
        {
            id: 10,
            name: "Extreme Whistle",
            desc: "An extremely loud whistle!",
            price: 1,
            image: "https://m.media-amazon.com/images/I/71XNgkDwZ3L.jpg"
        },
        {
            id: 11,
            name: "Permanent Marker",
            desc: "A marker, but permanent.",
            price: 1,
            image: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/927590/927590_o01_avery_marks_a_lot_permanent_markers_110419/927590"
        },
        {
            id: 12,
            name: "Large rat",
            desc: "Rotund rodent.",
            price: 2,
            image: "https://www.shutterstock.com/shutterstock/photos/1903676182/display_1500/stock-photo-big-brown-rat-on-hand-farmer-in-a-farm-1903676182.jpg"
        },
        {
            id: 13,
            name: "Two Rats",
            desc: "Two slightly similar rats.",
            price: 3,
            image: "https://images.squarespace-cdn.com/content/v1/54e4cf18e4b0706bb3dfd921/1425504587316-WGA57Z770NWV9BES55TL/Dallas+Rat+Control"
        },
    ],

    drinks: [
        {id: 1, name: "Aldebaran Whiskey", desc: "", price: 3, image: "" },
        {id: 1, name: "Darmok and Gelatto", desc: "", price: 4, image: "" },
        {id: 1, name: "Romulan Ale", desc: "", price: 1, image: "" },
        {id: 1, name: "Bantha Milk", desc: "", price: 2, image: "" },
    ],

    foods: [
    { id: 1, name: "The Mothman", desc: "A hot dog with beans and two pepperoni eyes on top", price: 3, img: ""},
    { id: 2, name: "The Casa Grande Special", desc: "Definitely not just a taco", price: 3.5, img: ""},
    { id: 3, name: "The Kirk Dog", desc: "Ripped shirt not included, but the William Shatner tax is", price: 8, img: ""},
    { id: 4, name: "Hallowieners", desc: "Our spooky special", price: 2, img: ""}
    ],

    locations: [
        { id: 1, name: "Gotham City"},
        { id: 2, name: "Naboo"},
        { id: 3, name: "Central Perk"},
        { id: 4, name: "Starfleet Headquarters"}
    ],
    
}

//The DB will maintain the state, but the getter and setter functions will export a copy of state to other modules to use for their purposes://
export const getToys = () => {
    return database.toys.map(toys => ({...toys}))
}
    
export const getDrinks = () => {
    return database.drinks.map(drink => ({...drink}))
}

export const getFoods =() => {
    return database.getFoods.map(foods => ({...foods}))
}

export const getDesserts = () => {
    return database.desserts.map(dessert => ({...dessert}))
}

export const getLocations = () => {
    return database.locations.map(f => ({...f}))
}

export const setToy = (toyId) => {
    database.transientState.selectedToy = toyId;
    document.dispatchEvent(new CustomEvent("stateChanged"));
}

export const setDrink = (drinkId) => {
    database.transientState.selectedDrink = drinkId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setFoods = (foodsId) => {
    database.transientState.selectedLocation = foodsId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setDessert = (dessertId) => {
    database.transientState.selecteddessert = dessertId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

