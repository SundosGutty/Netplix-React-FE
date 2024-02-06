import { Link, useHistory, useLocation } from "react-router-dom"
import { logout } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'


export const DropDown = ({ loggedinUser }) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()

    const onLogout = (ev) => {
        ev.preventDefault();
        dispatch(logout({ loggedinUser }))
        history.push('/')
    }

    return (
        <div className="dropdown">
            {location.pathname === '/kids' ? <div className="dropdown-item"><img src={require('../assets/img/kids-profile.jpg')} loading="lazy"/></div> : <div className="dropdown-item"><img src={loggedinUser.img.url} /></div>}
            <div className="dropdown-content flex column ">
                {location.pathname === '/kids' ? <Link to={'/media'}><img src={loggedinUser.img.url} loading="lazy"/></Link> : <Link to={'/kids'}><img src={require('../assets/img/kids-profile.jpg')} loading="lazy"/> </Link>}
                <button onClick={onLogout}>Logout</button>
            </div>
        </div>
  
    )
}