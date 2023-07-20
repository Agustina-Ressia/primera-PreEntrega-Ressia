import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';

const NavBar = () => {
    return(
        <nav>
            <h3>Mangas</h3>
            <div className="NavBar">
                <button>Shones</button>
                <button>Seinen</button>
                <button>Josei</button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar