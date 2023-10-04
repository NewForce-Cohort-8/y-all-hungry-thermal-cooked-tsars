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

export const Locations = () => {
    let html = "<h2>Locations</h2>"
    html += "<select id='locations'>"
    html += '<option value="0">Please Select Your Option...</option>'
        
        const listItems = locations.map(locations => {
            return `
                <option value="${locations.id}"> ${locations.name}</option>`
        })
        html += listItems.join("")
    
        html += "</select>"
        return html
    }