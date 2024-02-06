import { useDispatch, useSelector } from "react-redux";
import { loadUser } from '../store/actions/userActions'
import { userService } from "../services/user.service"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { NetplixHeader } from "../cmps/Netplix-header";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { updateUser } from '../store/actions/userActions';
import { DeatilsModal } from '../cmps/DetailsModal';


export const UserList = () => {
    const { loggedinUser } = useSelector((state) => state.userModule)
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [currItem, setCurrItem] = useState(null)
    const [userList, setUserList] = useState()

    useEffect(() => {
        dispatch(loadUser())
        setUserList(loggedinUser.favMedia)
    }, [])

    useEffect(() => {
        setUserList(loggedinUser.favMedia)
        // userService.update(loggedinUser)
        dispatch(updateUser(loggedinUser))
    }, [userList])

    async function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(userList);
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        setUserList(items)
        loggedinUser.favMedia = items
        dispatch(updateUser(loggedinUser))
        // await userService.update(loggedinUser)
    }

    const onCloseModal = () => {
        setModal(!modal)
      }
    

    const onSetToggleShow = (item) => {
        setCurrItem(item)
        setModal(!modal)
    }

    const onRemoveFilmFromUserList = (itemId) => {
        const idx = userList.findIndex(media => media._id === itemId)
        const newList = loggedinUser.favMedia.splice(idx, 1)
        dispatch(updateUser(loggedinUser))
        setUserList(newList)
    }

    return (
        <section className="user-list-page">
            <NetplixHeader />
            <section className='user-list flex column'>
                <h1>My list</h1>
                {userList && <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters" direction="horizontal">
                        {(provided) => (
                            <section className=" flex wrap" {...provided.droppableProps} ref={provided.innerRef}>
                                {userList.map((media, index) => {
                                    return (<Draggable key={media._id} draggableId={media._id} index={index}>
                                        {(provided) => (
                                            <div className='item' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <img src={media.img} loading="lazy" />
                                                <div className='item-hover' >
                                                    <section className='info-hover flex column'>
                                                        <div className='action-btns flex align-center'>
                                                            <Link to={`/video-on/${media._id}`}><i className="fa fa-play"></i></Link>
                                                            <button onClick={() => onRemoveFilmFromUserList(media._id)}><i className="fa fa-check" aria-hidden="true"></i></button>
                                                            <button onClick={() => onSetToggleShow(media)}><i className="fa fa-angle-down"></i></button>
                                                        </div>
                                                        <div className='film-info-hover'>
                                                            <div className='flex align-center gap10'>
                                                                <h4>{media.title}</h4>
                                                                <span>+{media.maturity}</span>
                                                            </div>
                                                            <h6>{media.genre}<i className='fa fa-circle'></i></h6>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>)}
                                    </Draggable>)
                                })}
                                {provided.placeholder}
                            </section>)}
                    </Droppable>
                </DragDropContext>}
            </section>
            {modal && <DeatilsModal currItem={currItem} v-show={modal} onCloseModal={onCloseModal} />}
        </section>
    )
}