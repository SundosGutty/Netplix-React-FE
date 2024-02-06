import React, { useEffect, useState } from 'react';
import { MediaPreview } from './Media-preview';

export const MediaList = ({ media }) => {
    return (
        <div>
            <div className='linear-background layout'>
                {media && media.map((item) => (<MediaPreview item={item} key={item.title} />))}
            </div>
        </div>
    );
};
