import './Sidebar.scss';
import { Link, NavLink } from 'react-router-dom';

//Images
import FirstUser from '../../assets/img/home-user.png';
import SecondUser from '../../assets/img/channel-user.png';
import ThirdUser from '../../assets/img/user-three.png';
import FourthUser from '../../assets/img/user-four.png';
import FifthUser from '../../assets/img/user-five.png';
import SixthUser from '../../assets/img/user-six.png';

//Components
import Trending from '../Lib/Svgs/Trending';
import Home from '../Lib/Svgs/home';
import Subscribing from '../Lib/Svgs/Subscribing';
import ChevronDown from '../Lib/Svgs/ChevronDown';
import Library from '../Lib/Svgs/Library';
import History from '../Lib/Svgs/History';
import Clock from '../Lib/Svgs/Clock';
import Liked from '../Lib/Svgs/Liked';
import Music from '../Lib/Svgs/Music';
import Games from '../Lib/Svgs/Games';
import Favourites from '../Lib/Svgs/Favourites';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/"
                    exact
                >
                    <Home />
                    <p className="sidebar__menues-text">Home</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/trending"
                >
                    <Trending />
                    <p className="sidebar__menues-text ">Trending</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/subscribing"
                >
                    <Subscribing />
                    <p className="sidebar__menues-text">Subscribing</p>
                </NavLink>
            </div>
            <div className="sidebar-center">
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/library"
                    exact
                >
                    <Library />
                    <p className="sidebar__menues-text">Library</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/history"
                >
                    <History />
                    <p className="sidebar__menues-text ">History</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/watch-later"
                >
                    <Clock />
                    <p className="sidebar__menues-text">Watch later</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/favourites"
                >
                    <Favourites />
                    <p className="sidebar__menues-text">Favourites</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/liked-videos"
                >
                    <Liked />
                    <p className="sidebar__menues-text">Liked videos</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/music"
                >
                    <Music />
                    <p className="sidebar__menues-text">Music</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/games"
                >
                    <Games />
                    <p className="sidebar__menues-text">Games</p>
                </NavLink>
                <button className="show-more-btn">
                    <ChevronDown />
                    <p className="sidebar__menues-text">Show more</p>
                </button>
            </div>
            <div className="sidebar-bottom">
                <h2 className="sidebar-bottom__title">Subscriptions</h2>
                <Link className="sidebar-bottom__links" to="/channel">
                    <img
                        src={FirstUser}
                        alt="subscription users"
                        width={26}
                        height={26}
                    />
                    <p className="sidebar-bottom__links-text">
                        Gussie Singleton
                    </p>
                </Link>
                <Link className="sidebar-bottom__links" to="/channel">
                    <img
                        src={SecondUser}
                        alt="subscription users"
                        width={26}
                        height={26}
                    />
                    <p className="sidebar-bottom__links-text">Nore Francis</p>
                </Link>
                <Link className="sidebar-bottom__links" to="/channel">
                    <img
                        src={ThirdUser}
                        alt="subscription users"
                        width={26}
                        height={26}
                    />
                    <p className="sidebar-bottom__links-text">Belle Briggs</p>
                </Link>
                <Link className="sidebar-bottom__links" to="/channel">
                    <img
                        src={FourthUser}
                        alt="subscription users"
                        width={26}
                        height={26}
                    />
                    <p className="sidebar-bottom__links-text">Eunice Cortez</p>
                </Link>
                <Link className="sidebar-bottom__links" to="/channel">
                    <img
                        src={FifthUser}
                        alt="subscription users"
                        width={26}
                        height={26}
                    />
                    <p className="sidebar-bottom__links-text">Emma Hanson</p>
                </Link>
                <Link className="sidebar-bottom__links" to="/channel">
                    <img
                        src={SixthUser}
                        alt="subscription users"
                        width={26}
                        height={26}
                    />
                    <p className="sidebar-bottom__links-text">Leah Berry</p>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
