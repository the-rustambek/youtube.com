import { Switch, Route } from 'react-router-dom';
import './App.scss';

//Components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

//Pages
import Home from './pages/Home/Home';
import Channel from './pages/Channel/Channel';
import Video from './pages/Video/Video';

function App() {
    return (
        <div className="app">
            <div className="render-pages">
                <Header />
                <Switch>
                    <Route path="/channel">
                        <Channel />
                    </Route>
                    <Route path="/trending" exact>
                        <Sidebar />
                        /trending
                    </Route>
                    <Route path="/subscribing" exact>
                        <Sidebar />
                        /subscribing
                    </Route>
                    <Route path="/library" exact>
                        <Sidebar />
                        /library
                    </Route>
                    <Route path="/history" exact>
                        <Sidebar />
                        /history
                    </Route>
                    <Route path="/watch-later" exact>
                        <Sidebar />
                        /watch-later
                    </Route>
                    <Route path="/favourites" exact>
                        <Sidebar />
                        /favourites
                    </Route>
                    <Route path="/liked-videos" exact>
                        <Sidebar />
                        /liked-videos
                    </Route>
                    <Route path="/music" exact>
                        <Sidebar />
                        /music
                    </Route>
                    <Route path="/games" exact>
                        <Sidebar />
                        /games
                    </Route>
                    <Route path="/" exact>
                        <Sidebar />
                        <Home />
                    </Route>
                </Switch>
            </div>
            <Switch>
                <Route path="/video" exact>
                    <Video />
                </Route>
            </Switch>
        </div>
    );
}
export default App;
