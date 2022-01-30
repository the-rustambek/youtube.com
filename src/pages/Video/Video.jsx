import './Video.scss';
import { GetVideoId } from '../../context/GetVideoId';

//Images
import Like from '../../assets/img/like.png';
import disLike from '../../assets/img/dislike.png';
import Share from '../../assets/img/share.png';
import Food from '../../assets/img/food.png';
import Check from '../../assets/img/check.png';

//Components
import RenderVideos from '../../components/RenderVideos/RenderVideos';
import More from '../../components/Lib/Svgs/More';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const Video = () => {
    const videoId = useContext(GetVideoId);
    return (
        <div className="video">
            <div className="video-top">
                <iframe
                    width={859}
                    height={483}
                    style={{ borderradius: 14 + 'px', marginbottom: 20 + 'px' }}
                    src={'https://www.youtube.com/embed/' + videoId[0]}
                    title="YouTube video player"
                    frameBorder={0}
                    allowFullScreen
                />

                <h2 className="video-top__title">
                    Dude You Re Getting A Telescope
                </h2>
                <div className="video-top__content">
                    <p className="video-top__content-right">123k views</p>
                    <div className="video-top__content-left">
                        <button className="video-top__content-btn">
                            <img src={Like} alt="" />
                            <p>123k</p>
                        </button>
                        <button className="video-top__content-btn">
                            <img src={disLike} alt="" />
                            <p>435k</p>
                        </button>
                        <button className="video-top__content-btn">
                            <img src={Share} alt="" />
                            <p>Share</p>
                        </button>
                        <More />
                    </div>
                </div>
                <div className="video-bottom">
                    <Link className="video-bottom__firstLink" to="/channel">
                        <img src={Food} alt="" width={80} height={80} />
                    </Link>
                    <div>
                        <h2>Food & Drink</h2>
                        <p className="video-bottom__firstText">
                            Published on 14 Jun 2019
                        </p>
                        <p className="video-bottom__secondText">
                            A successful marketing plan relies heavily on the
                            pulling-power of advertising copy. Writing
                            result-oriented ad copy is difficult, as it must
                            appeal to, entice, and convince consumers to take
                            action. There is no magic formula to write perfect
                            ad copy; it is based on a number of factors,
                            including ad placement, demographic, even the
                            consumer’s mood when they see your ad.{' '}
                        </p>
                        <Link className="video-bottom__secondLink" to="/video">
                            Show more
                        </Link>
                    </div>
                    <button>Subscribe 2.3m</button>
                </div>
            </div>
            <div className="left">
                <div className="left-top">
                    <h2>Next</h2>
                    <div>
                        <p>Autoplay</p>
                        <img src={Check} alt="" width={44} height={28} />
                    </div>
                </div>
                <RenderVideos
                    display={'column'}
                    width={367}
                    height={293}
                    imgHeight={213}
                    margin={0}
                    n={0}
                    m={10}
                    onClick={(e) => console.log(e.currentTarget)}
                />
            </div>
        </div>
    );
};

export default Video;
