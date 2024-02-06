import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DeatilsModal } from './DetailsModal';
import { loadUser } from '../store/actions/userActions'
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from '../store/actions/userActions';
import { Loader } from './Loader';

export const MediaPreview = ({ item }) => {
  const { loggedinUser } = useSelector((state) => state.userModule)
  const [modal, setModal] = useState(false)
  const [currItem, setCurrItem] = useState(null)
  const [userList, setUserList] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [])

  useEffect(() => {
    // checkItem()
  }, [loggedinUser])

  const onSetToggleShow = (item) => {
    setCurrItem(item)
    setModal(!modal)
  }

  const onCloseModal = () => {
    setModal(!modal)
  }

  const onAddFilmToUserList = (item) => {
    const idx = loggedinUser.favMedia.findIndex((media) => media._id === item._id)
    const res = loggedinUser.favMedia.find((media) => media._id === item._id)
    res ? loggedinUser.favMedia.splice(idx, 1) : loggedinUser.favMedia.unshift(item)
    dispatch(updateUser(loggedinUser))
  }

  if (!item.data.length) return <Loader />
  return (
    <article className='media-preview'>
      <h1 className='title'>{item.title}</h1>
      <section className='flex items-container'>
        {item.data.map((i) => (
          <div className='item' key={i._id}>
            <img src={i.img} onClick={() => onSetToggleShow(i)} loading="lazy" />
            <div className='item-hover' >
              <section className='info-hover flex column'>
                <div className='action-btns flex align-center'>
                  <Link to={`/video-on/${i._id}`}><i className="fa fa-play"></i></Link>
                  <button onClick={() => onAddFilmToUserList(i)}>
                    {loggedinUser.favMedia.some((f) => f._id === i._id) ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-plus" aria-hidden="true"></i>}
                  </button>
                  <button onClick={() => onSetToggleShow(i)}><i className="fa fa-angle-down"></i></button>
                </div>
                <div className='film-info-hover'>
                  <div className='flex align-center gap10'>
                    <h4>{i.title}</h4>
                    <span>+{i.maturity}</span>
                  </div>
                  <h6>{i.genre}<i className='fa fa-circle'></i></h6>
                </div>
              </section>
            </div>
          </div>))}
      </section>
      {modal && <DeatilsModal currItem={currItem} v-show={modal} onCloseModal={onCloseModal} onAddFilmToUserList={onAddFilmToUserList} loggedinUser={loggedinUser}/>}
    </article>
  )
}