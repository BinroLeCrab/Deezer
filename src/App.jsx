import fetchJsonp from 'fetch-jsonp';
import { useEffect, useState } from 'react'
import Track from './components/Track/Track';
import BgColor from './components/BgColor/BgColor';
import Loading from './components/Loading/Loading';

function App() {

    const [play, setPlay] = useState(false);
    const [trackNumber, setTrackNumber] = useState(0);
    const [track, setTrack] = useState();
    const [trackArray, setTrackArray] = useState();

    const fetchTrackNumber = async () => {

        let response = await fetchJsonp('https://api.deezer.com/playlist/5178867444/tracks?output=jsonp', {
            mode: 'no-cors',
        })

        if (response.ok) {
            let data = await response.json();
            // console.log(data);
            // console.log('--- Nombre de track récupérées :', data.total);
            setTrackNumber(data.total);
        } else {
            console.error('Error:', response.error);
        }

    };

    const fetchLastTrack = async () => {
        let response = await fetchJsonp(`https://api.deezer.com/playlist/5178867444/tracks?output=jsonp&index=${trackNumber - 3}`, {
            mode: 'no-cors',
        })

        if (response.ok) {
            let data = await response.json();
            // console.log('--- Track récupérées :', data.data);
            // console.log('--- Nombre de track récupérées :', data.total);
            setTrackArray(data.data.reverse());
        } else {
            console.error('Error:', response.error);
        }
    };

    useEffect(() => {
        fetchTrackNumber();
    }, []);

    useEffect(() => {
        // console.log('--- Track number :', trackNumber);
        trackNumber != 0 && fetchLastTrack();
    }, [trackNumber]);

    useEffect(() => {
        // console.log('--- Track array :', trackArray);
        trackArray != undefined && setTrack(trackArray.shift());
    }, [trackArray]);

    return (
        <>
            {track ?
                <main>
                    {track.album.cover_medium && <BgColor srcImg={track?.album?.cover_medium} />}
                    <div className="Wrapper">
                        <Track id={40} data={track} play={play} setPlay={setPlay} />
                        {trackArray.map((track, key) => (
                            <Track micro key={key} id={key} data={track} play={play} setPlay={setPlay} />
                        ))
                        }
                    </div>
                </main>
                : <Loading />
            }
        </>
    )
}

export default App

/* 
     _____     _____
    |  _  |   |  _  |
   -| | | |---| | | |-
    |_____| 7 |_____|  ~B!nro~
    
*/