import { Link } from 'react-router-dom';
import './css/navbar.css'

export default function Nav() {

    return (
        <div className='navigation'>
            <Link key={1} className="nav-link text-light" to="/">
                Home
            </Link> 
            <Link key={2} className="nav-link text-light" to="/project">
                Projects
            </Link> 
            <Link key={3} className="nav-link text-light" to="/contact">
                Contact
            </Link> 
            <Link key={4} className="nav-link text-light" to="/about">
                About Me
            </Link>
        </div>
    )

}
