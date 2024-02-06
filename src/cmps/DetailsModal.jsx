import { Link } from 'react-router-dom';


export const DeatilsModal = ({ currItem, onCloseModal, onAddFilmToUserList, loggedinUser }) => {
    return (
        <div className='details-modal'>
            <section className='modal-content flex column align-center justify-center'>
                <section className='img-container'>
                    <img width="100%" height="100%" src={currItem.img} loading="lazy" />
                    <button onClick={onCloseModal}>x</button>
                </section>
                <section className="media-info flex column justify-center gap10 ">
                    <section className='general flex space-between'>
                        <section className='general-media-info flex gap5 align-center justify-center'>
                            <span>{currItem.type}</span><i className='fa fa-circle'></i>
                            <span>{currItem.genre}</span><i className='fa fa-circle'></i>
                            <span>+{currItem.maturity}</span>
                        </section>
                        <section className='play-btn-container flex align-center gap10'>
                            <button className='details-add-btn' onClick={() => onAddFilmToUserList(currItem)}>
                                {loggedinUser.favMedia.some((f) => f._id === currItem._id) ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-plus" aria-hidden="true"></i>}
                            </button>
                            <Link to={`/video-on/${currItem._id}`}>Play</Link>
                        </section>
                    </section>
                    <p>{currItem.description}</p>
                </section>
            </section>
        </div>
    )
}