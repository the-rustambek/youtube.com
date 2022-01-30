import { useContext } from 'react';
import { createContext, useEffect, useState } from 'react';
import { GetValue } from './GetValue';

const GetData = createContext();

const Provider = ({ children }) => {
    const search = useContext(GetValue);
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search[0]}&key=AIzaSyAel-11hfxxcXije08LbtrkmiTydRpELNg&maxResults=1000`
            );
            const json = await response.json();
            // ...
            setImages(json.items);
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
        fetchData();
    }, search);

    return (
        <GetData.Provider value={[images, loading]}>
            {children}
        </GetData.Provider>
    );
};

export { GetData, Provider };
