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
                    {track.album.cover_medium ? <BgColor srcImg={track?.album?.cover_medium} /> : track.album.md5_image ? <BgColor srcImg={`https://cdn-images.dzcdn.net/images/cover/${track?.album?.md5_image}/250x250.jpg`} /> :""}
                    <div className="Wrapper">
                        <Track id={0} data={track} play={play} setPlay={setPlay} audio={audio} />
                        {data && data.map((track, key) => {
                            if (key != 0) {
                                return <Track variant="micro" key={key} id={key} data={track} play={play} setPlay={setPlay} audio={audio} />
                            }
                        })
                        }
                    </div>
                </main>
                : <Loading variant="latest" />
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