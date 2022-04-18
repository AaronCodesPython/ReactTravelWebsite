import React from "react"
import Navbar from "./components/Navbar"
import "./Style.css"
import Location from "./components/Location"
import data from "./data"

export default function App() {
    const Locations = data.map(location => {
        return (
            <Location
                key={location.id}
                location={location}
            />
        )
    })        
    
            // <Hero />
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {Locations}
            </section>
        </div>
    )
}