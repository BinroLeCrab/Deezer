import fetchJsonp from 'fetch-jsonp';
import { useEffect, useState } from "react";
import Gallery from './components/Gallery/Gallery';
import Latest from './components/Latest/Latest';
import NavSwitch from './components/NavSwitch/NavSwitch';
import List from './components/List/List';

function App() {

    const audio = new Audio();
    const [page, setPage] = useState('latest');

    const [trackNumber, setTrackNumber] = useState(0);
    const [arrayLastTrack, setArrayLastTrack] = useState();
    const [arrayTrackTotal, setArrayTrackTotal] = useState();
    const [arrayTrackTotalReverse, setArrayTrackTotalReverse] = useState();

    const changePage = (page) => {
        audio.pause();
        audio.src = "";
        setPage(page);
    }

    const fetchTrackNumber = async () => {

        let response = await fetchJsonp('https://api.deezer.com/playlist/5178867444/tracks?output=jsonp', {
            mode: 'no-cors',
        })

        if (response.ok) {
            let data = await response.json();
            setArrayTrackTotal(data.data);
            setTrackNumber(data.total);
        } else {
            console.error('Error:', response.error);
        }

    };

    const fetchTrack = async (index) => {
        let response = await fetchJsonp(`https://api.deezer.com/playlist/5178867444/tracks?output=jsonp&index=${index}`, {
            mode: 'no-cors',
        })

        if (response.ok) {
            let data = await response.json();
            const newArray = arrayTrackTotal.concat(data.data);
            setArrayTrackTotal(newArray);
        } else {
            console.error('Error:', response.error);
        }
    }

    const fetchLastTrack = async () => {
        let response = await fetchJsonp(`https://api.deezer.com/playlist/5178867444/tracks?output=jsonp&index=${trackNumber - 3}`, {
            mode: 'no-cors',
        })

        if (response.ok) {
            let data = await response.json();
            // console.log('--- Track récupérées :', data.data);
            // console.log('--- Nombre de track récupérées :', data.total);
            setArrayLastTrack(data.data.reverse());
        } else {
            console.error('Error:', response.error);
        }
    };

    useEffect(() => {
        // console.log('--- Track number :', trackNumber);
        trackNumber != 0 && fetchLastTrack();
    }, [trackNumber]);

    useEffect(() => {
        if (arrayTrackTotal) {
            if (arrayTrackTotal.length < trackNumber) {
                fetchTrack(arrayTrackTotal.length);
            } else {
                // console.log('--- All tracks fetched');
                setArrayTrackTotalReverse(arrayTrackTotal.reverse());
            }
        }
    }, [arrayTrackTotal]);

    useEffect(() => {
        fetchTrackNumber();
    }, []);

    return (
        <>
            <NavSwitch handleClick={changePage} page={page} />
            {
                page === 'latest' ? <Latest audio={audio} data={arrayLastTrack} />
                    : page === 'gallery' ? <Gallery audio={audio} data={arrayTrackTotalReverse} />
                    : page === 'list' ? <List audio={audio} data={arrayTrackTotalReverse} />
                    : ""
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