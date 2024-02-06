import React, { useCallback, useState, useEffect } from 'react';
import { NetplixHeader } from "../cmps/Netplix-header"
import selectionFilter from '../services/selection-filter';
import { useDispatch, useSelector } from 'react-redux';
import { loadMedia, setFilterBy } from '../store/actions/mediaAction';
import { MediaList } from '../cmps/Media-list';


export const Movies = () => {
    const { media } = useSelector((state) => state.mediaModule)
    const [filteredMedia, setFilteredMedia] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadMedia())
    }, [])

    useEffect(() => {
        setFilteredMedia(selectionFilter({ media })[1].filteredMediaByMovies)
    }, [media])

    const onChangeFilter = useCallback((filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadMedia())
    }, [])


    return (
        <>
            <NetplixHeader onChangeFilter={onChangeFilter} />
            {filteredMedia && <MediaList media={filteredMedia} />}
        </>
    )
}