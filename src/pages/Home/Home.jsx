import './Home.scss';
import RenderVideos from '../../components/RenderVideos/RenderVideos';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home-section">
                    <RenderVideos width={250} height={200} imgHeight={150} />
                </div>
            </div>
        </>
    );
};

export default Home;
