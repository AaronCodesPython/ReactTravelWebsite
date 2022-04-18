import React from "react"
import GeoIcon from "../images/GeoIcon.png"

export default function Location(props) {
   // const imgPath =".//.//public/"
    return (
        <section className="location">
            <img src={props.location.imageUrl} className="location--image" alt="." />
            <div className="location--top">
                <img src={GeoIcon} alt="." className="location--GeoIcon"></img>
                <p className="location--country">{props.location.location}</p>
                <a href={props.location.googleMapsUrl} className="location--GoogleMaps">View on Google Maps</a>

            </div>
            <h1 className="location--title">{props.location.title}</h1>
            <h3 className="location--date">{props.location.startDate} - {props.location.endDate}</h3>
            <p className="location--description">{props.location.description}</p>
            <hr className="location--hr"/>
        </section>
    )
}