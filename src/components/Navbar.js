import Icon from "../images/Icon.png"

export default function Navbar(){
    return(
        <nav>
            <img src={Icon} alt="." className="nav--icon"></img>
            <p className="nav--text">my travel journal.</p>
        </nav>
    )
}