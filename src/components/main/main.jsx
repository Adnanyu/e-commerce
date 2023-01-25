import { Link } from "react-router-dom";
import './main.style.scss'
import logo from '../../assests/Rectangle1.png'
const Main = () => {
    return (
        <main>
            <div className="main-text">
                <h1 className="main-header">welcome to <span>AD</span> shop</h1>
                <p>welcome to our e-commerce where you can find the lastest fashion trends with a resinople prices.</p>
                <Link to='/shop' className='profile-links'>Shop Now</Link> 
            </div>
            <div className='memoji'>
                 
            </div>
        </main>
    )
}
export default Main