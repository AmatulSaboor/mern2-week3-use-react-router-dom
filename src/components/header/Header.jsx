import {Link} from 'react-router-dom';
let menuItems = [
    {
        number: 1,
        name: 'Home',
        link: '/' 
    },
    {
        number: 2,
        name: 'About',
        link: '/about' 
    },
    {
        number: 3,
        name: 'News',
        link: '/news' 
    },
    {
        number: 4,
        name: 'Contact',
        link: '/contact' 
    }
] 
let Header = () => {
    return (
        <ul>
            {menuItems.map((item, i) => {
                return (
                    <li key={i}>
                        <Link to={item.link}>{item.name}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Header;