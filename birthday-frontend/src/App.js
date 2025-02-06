import React, { useState } from 'react';
import axios from 'axios';
import AddBirthday from './components/AddBirthday';
import UpdateBirthday from './components/UpdateBirthday';
import DeleteBirthday from './components/DeleteBirthday';
import SearchBirthday from './components/SearchBirthday';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom styling (if needed)

function App() {
  const [birthdays, setBirthdays] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch birthdays from the backend
  const fetchBirthdays = async () => {
    try {
      const response = await axios.get('http://localhost:5001/birthdays');
      setBirthdays(response.data);
    } catch (error) {
      console.error('Error fetching birthdays', error);
      setMessage('Error fetching birthdays');
    }
  };

  return (
    <div className="App">
      <div className="container mt-4">
        <h1 className="text-center text-primary mb-4 title">Birthday Web</h1>

        <div className="text-center mb-4">
          <button onClick={fetchBirthdays} className="btn btn-success">
            Fetch All Birthdays
          </button>
        </div>

        <h2
          className={message.includes('Error') ? 'text-danger' : 'text-success'}
        >
          {message}
        </h2>
        <div className="">
          <AddBirthday
            setMessage={setMessage}
            fetchBirthdays={fetchBirthdays}
          />
          <UpdateBirthday
            setMessage={setMessage}
            fetchBirthdays={fetchBirthdays}
          />
          <DeleteBirthday
            setMessage={setMessage}
            fetchBirthdays={fetchBirthdays}
          />
          <SearchBirthday
            setMessage={setMessage}
            fetchBirthdays={fetchBirthdays}
          />
        </div>

        <div className="mt-4">
          <h3>All Birthdays</h3>
          <ul className="list-group">
            {birthdays.map((birthday) => (
              <li key={birthday._id} className="list-group-item">
                {birthday.name} -{' '}
                {new Date(birthday.birthdate).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
