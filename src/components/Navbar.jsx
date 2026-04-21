import logo from "../assets/images/logo.svg"
import cart from "../assets/images/icon-cart.svg"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div>
            <img src={logo} alt="Sneakers Logo" />
            
            <ul>
                <li><a href="">Collections</a></li>
                <li><a href="">Men</a></li>
                <li><a href="">Women</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div>
            <button>
                <img src={cart} alt="Cart icon" />
            </button>
            <button>
                <img src="/images/image-avatar.png" alt="Avatar image" />
            </button>
        </div>
    </nav>
  )
}

export default Navbar