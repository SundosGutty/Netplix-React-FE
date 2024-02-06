import { Link } from "react-router-dom"
import { loadUser } from '../store/actions/userActions'
import { userService } from "../services/user.service"
import { ImgChoises } from "../cmps/ImgChoices"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../cmps/Loader";


export const UserProfile = () => {
    const [toggleModal, setToggleModal] = useState(true)
    const { loggedinUser } = useSelector((state) => state.userModule)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())
    }, [])

    const setUserImg = (img) => {
        setToggleModal(!toggleModal)
        if (loggedinUser) loggedinUser.img = img
        userService.update(loggedinUser)
    }

    if (!loggedinUser) return <Loader />
    return (
        <section className="user-profile">
            <h2 className='logo logo-pages'>NetPlix</h2>
            <section className="conatiner flex align-center justify-center column">
                <h1>Who's watching?</h1>
                <div className="flex gap20">
                    <section className="user-account">
                        <Link to="/media">
                            <img src={loggedinUser.img.url} />
                            <h4>{loggedinUser.firstName.charAt(0).toUpperCase() + loggedinUser.firstName.slice(1)}</h4>
                        </Link>
                    </section>
                    <section className="kids-account">
                        <Link to="/kids">
                            <img src={require('../assets/img/kids-profile.jpg')} loading="lazy" />
                            <h4>Kids</h4>
                        </Link>
                    </section>
                </div>
                {toggleModal && loggedinUser.isNew && <ImgChoises setUserImg={setUserImg} />}
            </section>
        </section>
    )

}

