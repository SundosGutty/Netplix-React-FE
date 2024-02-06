import { infoService } from "../services/infoSevice";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { AppFooter } from "../cmps/App-footer";
import { userService } from "../services/user.service";
import { useHistory } from 'react-router-dom';
import { Loader } from "../cmps/Loader";


export function NetplixHome() {
    const history = useHistory()
    const [toggleShow, setToggleShow] = useState(false)
    const [emailAddress, setEmailAddress] = useState('')
    const infos = infoService.getInfoIntro()
    const questsAns = infoService.getQueAns()

    const onSetToggleShow = (id) => {
        const idx = questsAns.findIndex((quest) => quest.id === id)
        questsAns[idx].body.isShown = !questsAns[idx].body.isShown
        setToggleShow(questsAns[idx].body.toggleShow = !questsAns[idx].body.toggleShow)
    }

    const checkProfile = async (ev) => {
        ev.preventDefault()
        try {
            const res = await userService.checkProfile(emailAddress)
            if (res) history.push({ pathname: '/signin', state: { detail: emailAddress } })
            else history.push({ pathname: '/signup', state: { detail: emailAddress } })
        } catch (err) {
            console.log(err)
        }
    }

    if (!infos || !questsAns) return <Loader />
    return (
        <div className="home-page flex column">
            <header className="home-header">
                <nav className="flex space-between main-layout align-center">
                    <h1 className="logo">NetPlix</h1>
                    <Link to="/signin">Sign In</Link>
                </nav>
                <div className="flex column">
                    <p>Unlimited films, Tv programmes and more.</p>
                    <h5>Watch anywhere. Cancel at any time.</h5>
                    <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
                    <form onSubmit={checkProfile} className="flex form  align-center">
                        <input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                            required
                        ></input>
                        <button >Get started<i className="fa fa-angle-right"></i></button>
                    </form>
                </div>
            </header>
            <main className="flex column">
                <section className="extra-info flex column">
                    <React.Fragment> {infos.map((info) => (<div className="flex container justify-center align-center" key={info.id}>
                        <div className="txt-container flex column">
                            <h1>{info.title}</h1>
                            <p>{info.subTitle}</p>
                        </div>
                        <React.Fragment>{
                            info.video ? <div className="visual-container">
                                <img className="img-border" src={require(`../assets/img/${info.image}`)} loading="lazy" />
                                <div className="animation-container">
                                    <video className={info.video.className} muted autoPlay={"autoPlay"} loop><source src={require(`../assets/videos/${info.video.url}`)} type="video/mp4" /></video></div>
                            </div> : <div className="flex img-container "><img className={info.image.className} src={require(`../assets/img/${info.image.url}`)} />{info.image.className === 'phone-img' ? <div className="phone-animation-container flex align-center gap5">
                                <div><img src={require('../assets/img/boxshot.jpg')} loading="lazy" /></div>
                                <div className="flex column align-start gap10"><h3>Stranger Things</h3>
                                    <h4>Downloading...</h4></div>
                                <div className="loader-img"></div>
                            </div> : ''}</div>}
                        </React.Fragment>
                        <div>
                        </div>
                    </div>))}
                    </React.Fragment>
                </section>
                <section className="questsAns">
                    <h1 className="title">Frequently Asked Questions</h1>
                    <div className="frame">
                        {questsAns.map((item) => (
                            <div className="item" key={item.id}>
                                <span onClick={() => onSetToggleShow(item.id)}>
                                    {item.header}
                                    {item.body.isShown ? (
                                        <img
                                            src={require(`../assets/img/icons/close-slim.png`)}
                                            alt="Close"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <img
                                            src={require(`../assets/img/icons/add.png`)}
                                            alt="Open"
                                            loading="lazy"
                                        />
                                    )}
                                </span>
                                <div className="body" className={item.body.isShown ? 'open' : 'closed'}>
                                    <span>{item.body.txt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex column justify-center align-center">
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <form className="flex form align-center ">
                            <input placeholder="Email address" />
                            <button>Try it now</button>
                        </form>
                    </div>
                </section>
            </main>
            <AppFooter />
        </div>
    )
}