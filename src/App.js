import Mapp from './components/Mapp';
import {useEffect, useState} from 'react';
import Loader from './components/Loader';
import axios from 'axios';
import Header from './components/Header';

function App() {

  const [eventData, setEventData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);

      await axios.get('https://eonet.gsfc.nasa.gov/api/v2.1/events')
        .then(res => {
          setEventData(res.data.events);
        })
        .catch(err => {
          console.log(err);
        })
    
      setLoading(false);
    }

    fetchEvents();
    console.log(eventData)
  }, [])

  return (
    <div>
        <Header/>
        {isLoading ? <Loader/> : <Mapp eventData={eventData}/>}
    </div>
  );
}

export default App;

