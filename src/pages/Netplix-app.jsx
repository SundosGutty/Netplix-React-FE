import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MediaList } from '../cmps/Media-list';
import { NetplixHeader } from '../cmps/Netplix-header';
import { loadMedia, setFilterBy } from '../store/actions/mediaAction';
import selectionFilter from '../services/selection-filter';


export const NetplixApp = () => {
    const { media } = useSelector((state) => state.mediaModule)
    const [filteredMedia, setFilteredMedia] = useState()
    // const [filterMode, setFilterMode] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadMedia())
    }, [])

    useEffect(() => {
        setFilteredMedia(selectionFilter({ media })[0].filteredMedia)
    }, [media])

    const onChangeFilter = useCallback((filterBy) => {
        dispatch(setFilterBy(filterBy))
        // setFilterMode(filterBy)
        dispatch(loadMedia())
    }, [])

    return (
        <div className="netplix-app">
            <NetplixHeader onChangeFilter={onChangeFilter}/>
            {filteredMedia && <MediaList media={filteredMedia} />}
        </div >
    )
}
