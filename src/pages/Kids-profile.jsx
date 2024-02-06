import React, { useCallback, useState, useEffect } from 'react';
import { NetplixHeader } from "../cmps/Netplix-header"
import { useDispatch, useSelector } from 'react-redux';
import { MediaList } from '../cmps/Media-list';
import selectionFilter from '../services/selection-filter';
import { loadMedia, setFilterBy } from '../store/actions/mediaAction';

export const KidsProfile = () => {
    const { media } = useSelector((state) => state.mediaModule)
    const [filteredMedia, setFilteredMedia] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadMedia())
    }, [])

    useEffect(() => {
        setFilteredMedia(selectionFilter({ media })[3].filteredMediaForKids)
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