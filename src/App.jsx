import fetchJsonp from 'fetch-jsonp';
import { use } from 'react';
import { useEffect, useState } from 'react'
import Track from './components/Track/Track';
import Micro_track from './components/Micro_Track/Micro_Track';

function App() {

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
            console.log('--- Nombre de track récupérées :', data.total);
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
            console.log('--- Track récupérées :', data.data);
            // console.log('--- Nombre de track récupérées :', data.total);
            setTrackArray(data.data);
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

    useEffect(() => {
        console.log('--- Track array :', trackArray);
        trackArray != undefined && setTrack(trackArray[2]);
    }, [trackArray]);

    return (
        <>
            {track ?
                <div className="Wrapper">
                    <Track data={track} />
                    <Micro_track data={trackArray[1]} />
                    <Micro_track data={trackArray[0]} />
                </div>
                : <p>Chargement...</p>
            }
        </>
    )
}

export default App
