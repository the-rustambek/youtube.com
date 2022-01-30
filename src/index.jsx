import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from '../src/context/GetData';
import Value from './context/GetValue';
import VideoId from './context/GetVideoId';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <VideoId>
                <Value>
                    <Provider>
                        <App />
                    </Provider>
                </Value>
            </VideoId>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
