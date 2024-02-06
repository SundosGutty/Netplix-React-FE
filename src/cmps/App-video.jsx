import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Loader } from "./Loader"

export const AppVideo = ({ currMedia }) => {
    const [isShown, setIsShown] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(!isShown)
        }, 10000)
        return () => clearTimeout(timer)
    }, [])

    if (!currMedia) return <Loader />
    return (
        <section className='media-playing-header'>
            <section className='video-container'>
                <video width="100%" height="100%" src={currMedia[0].trailer}  muted autoPlay={"autoPlay"} loop frameBorder="0" allowFullScreen></video>
                <img width="100%" height="130%" src={currMedia[0].img} loading="lazy" />
            </section>
            <section className='header-media-info'>
                <h1>{currMedia[0].title}</h1>
                <p className={isShown ? '' : 'fade-out'}>{currMedia[0].description}</p>
                <Link to={`/video-on/${currMedia[0]._id}`}>Play</Link>
            </section>
        </section>
    )
}

