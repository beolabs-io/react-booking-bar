import React from 'react';
import './App.css';

import BookingBar from './components/booking-bar/BookingBar';

function App() {
  return (

    <div className="app">

      <BookingBar 

          companyType="Hôtel"
          companyName="Paxos Island Sunset" 
          starsCount={ 3 } 
          maxCustomerPerReservation={ 10 }
      />

    </div>
  );
}

export default App;
