import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBirthday = ({ setMessage }) => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5001/birthdays/${name}`
      );
      setBirthday(response.data);
      setMessage('');
    } catch (error) {
      setBirthday(null);
      setMessage('Birthday not found');
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title text-center">Search Birthday</h5>
        <form onSubmit={handleSearch}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name to search"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-info w-100">
            Search Birthday
          </button>
        </form>

        {birthday && (
          <div className="mt-3">
            <h5>Birthday Found:</h5>
            <p>
              <strong>Name:</strong> {birthday.name}
            </p>
            <p>
              <strong>Birthdate:</strong>{' '}
              {new Date(birthday.birthdate).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBirthday;
