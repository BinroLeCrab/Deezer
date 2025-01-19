import fetchJsonp from 'fetch-jsonp';
import { use } from 'react';
import { useEffect, useState } from 'react'

function App() {

    const [trackNumber, setTrackNumber] = useState(0);
    const [track, setTrack] = useState();

    const fetchTrackNumber = async () => {

        let response = await fetchJsonp('https://api.deezer.com/playlist/5178867444/tracks?output=jsonp', {
            mode: 'no-cors',
        })

        if (response.ok) {
            let data = await response.json();
            // console.log(data);
            console.log('--- Nombre de track récupérées :', data.total);
            setTrackNumber(data.total);
        } else {
            console.error('Error:', response.error);
        }

    };

    const fetchLastTrack = async () => {
        let response = await fetchJsonp(`https://api.deezer.com/playlist/5178867444/tracks?output=jsonp&index=${trackNumber - 1}`, {
            mode: 'no-cors',
        })

        if (response.ok) {
            let data = await response.json();
            console.log('--- Track récupérée :', data.data[0]);
            // console.log('--- Nombre de track récupérées :', data.total);
            setTrack(data.data[0]);
        } else {
            console.error('Error:', response.error);
        }
    };

    useEffect(() => {
        fetchTrackNumber();
    }, []);

    useEffect(() => {
        console.log('--- Track number :', trackNumber);
        trackNumber != 0 && fetchLastTrack();
    }, [trackNumber]);

    return (
        <>
            {track &&
                <div>
                    <h1>{track?.title}</h1>
                    <img src={track?.album?.cover_medium} alt="" />
                    <p>{track?.artist?.name}</p>
                    <img src={track?.artist?.picture} alt="" />
                    <audio controls>
                        <source src={track?.preview} type="audio/mp3" />
                    </audio>
                </div>
            }
        </>
    )
}

export default App
