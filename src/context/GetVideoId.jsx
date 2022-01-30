import React, { createContext, useState } from 'react';

export const GetVideoId = createContext();

const VideoId = ({ children }) => {
    const [id, setId] = useState('');
    return (
        <GetVideoId.Provider value={[id, setId]}>
            {children}
        </GetVideoId.Provider>
    );
};

export default VideoId;
