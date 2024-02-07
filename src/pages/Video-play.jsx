import { useHistory } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { utilService } from '../services/utilService';
import { Loader } from "../cmps/Loader";
import { mediaService } from "../services/media-service";


export const VideoPlay = (props) => {
    console.log(props.match.params.id)
    const [item, setItem] = useState()
    const [isGifOn, setiSGifOn] = useState(false)
    const [autoplay, setAutoplay] = useState(false)
    const history = useHistory()

    useEffect(() => {
        loadItem()
        setiSGifOn(true)
        startLoading()
    }, [])

    const loadItem = async () => {
        const item = await mediaService.getById(props.match.params.id)
        setItem(item)
    };

    const back = () => {
        history.goBack()
    }

    const startLoading = () => {
        setTimeout(() => {
            setiSGifOn(false)
            setAutoplay(true)
        }, 6000)
    }
    if (!item) return <Loader />
    return (
        <section className='video-play-page'>
            {isGifOn ? <div className="video-opening-container "><video autoPlay src={require('../assets/videos/netflix-opening.mp4')}></video></div> :
            <iframe title="Trailer for Movie XYZ" muted allow="autoplay; encrypted-media" width="100%" height="100%" src={utilService.getUrl(item.trailer)} controls frameBorder="0" allowFullScreen></iframe>
                }
            <div><i onClick={back} className="fa fa-arrow-circle-left"></i></div>
        </section>
    )
}