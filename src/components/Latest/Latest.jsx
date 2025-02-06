import fetchJsonp from 'fetch-jsonp';
import { useEffect, useState } from 'react'
import Track from '../Track/Track';
import BgColor from '../BgColor/BgColor';
import Loading from '../Loading/Loading';
import './Latest.scss';

const Latest = ({ data, audio }) => {

    const [play, setPlay] = useState(false);
    const [track, setTrack] = useState();

    useEffect(() => {
        data && setTrack(data[0]);
    }, [data]);

    useEffect(() => {
        audio.pause();
        audio.src = "";
    }, []);

    return (
        <div className="Latest">
            {track ?
                <main className="Latest__main">
                    {track.album.cover_medium && <BgColor srcImg={track?.album?.cover_medium} />}
                    <div className="Wrapper">
                        <Track id={0} data={track} play={play} setPlay={setPlay} audio={audio} />
                        {data && data.map((track, key) => {
                            if (key != 0) {
                                return <Track micro key={key} id={key} data={track} play={play} setPlay={setPlay} audio={audio} />
                            }
                        })
                        }
                    </div>
                </main>
                : <Loading />
            }
        </div>
    )
}

export default Latest

/* 
     _____     _____
    |  _  |   |  _  |
   -| | | |---| | | |-
    |_____| 7 |_____|  ~B!nro~
    
*/