import { getLocations, setLocation } from "./database";

const locations = getLocations()

document.addEventListener(
    "change",
    (event) => {
        if( event.target.name === "locations") {
            setLocation(parseInt(event.target.value))
        }
    }
)

