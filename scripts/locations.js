import { getLocations, setLocation } from "./database.js";

const locations = getLocations()

document.addEventListener(
    "change",
    (event) => {
        if( event.target.name === "locations") {
            setLocation(parseInt(event.target.value))
        }
    }
)

