import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ApartmentsList from './components/ApartmentsList';
import ApartmentDetails from './components/ApartmentDetails';
import CreateApartment from './components/CreateApartment';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [apartmentsArr, setApartmentsArr] = useState(null);
  //const baseURL = process.env.REACT_APP_API_URL;
  //console.log(baseURL);

  useEffect(() => {
    getApartmentsFromApi();
  }, []);

  const getApartmentsFromApi = (() => {
    axios
      .get('https://ironbnb-m3.herokuapp.com/apartments')
      .then((response) => {
        setApartmentsArr(response.data);
      })
      .catch((error) => {
        console.log('Error getting Apartments...', error);
      });
  });

  return (
    <div className='App container'>
      <Navbar />
      <div className='m-3'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/apartments' element={<ApartmentsList apartmentsArr={apartmentsArr} />} />
          <Route path='/apartment/:apartmentId' element={<ApartmentDetails apartmentsArr={apartmentsArr} />} />
          <Route path='/apartment/create' element={<CreateApartment callbackToUpdateList={getApartmentsFromApi} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
