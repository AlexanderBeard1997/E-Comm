import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id='navbar'>
            <header>
                <div>
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to='/cart'>
                        Cart
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar