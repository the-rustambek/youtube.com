import './ChannelItem.scss';
import { Link } from 'react-router-dom';

//Images
import ChannelVideo from '../../assets/img/channel-video.png';

const ChannelItem = () => {
    return (
        <div className="section">
            <Link to="video">
                <img
                    className="section__img"
                    src={ChannelVideo}
                    width={540}
                    height={250}
                    alt=""
                />
            </Link>
            <div className="section__content">
                <h3 className="section__content-title">
                    Choosing The Best Audio Player Software For Your Computer
                </h3>
                <p className="section__content-text ">
                    Your cheap internet-based banner advertising will become one
                    of the sought for ads there are. Today, the world of
                    Internet advertising is rapidly evolving beyond banner ads
                    and intrusive pop-ups. Bayles A common medium for
                    advertising on the Internet is the use of banner ads.{' '}
                </p>
                <p className="section__content-viewer">
                    11k views · 6 months ago
                </p>
            </div>
        </div>
    );
};

export default ChannelItem;
