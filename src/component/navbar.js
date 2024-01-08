import logo from '../assets/images/LOGO.png';
import user from '../assets/images/user-2.png';

const Navbar =() =>{
    return(
       <nav className="flex justify-between items-center max-w-screen-xl w-90 m-auto pt-5">
        <ul className="flex justify-between w-1/2">
            <li><img src={logo} alt="logo" /></li>
            <li>Find a Property</li>
            <li>Share Stories</li>
            <li>Rental guides</li>
            <li>Download mobile App</li>
        </ul>
        <ul className="flex justify-between items-center gap-3">
            <li>AR</li>
            <li><img src={user} alt="user" /></li>
        </ul>
       </nav>
    )
}
export default Navbar;