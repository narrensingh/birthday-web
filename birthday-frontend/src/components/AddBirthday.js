import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddBirthday = ({ setMessage, fetchBirthdays }) => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://birthday-web-backend.onrender.com/birthdays', { name, birthdate });
      setMessage('Birthday added successfully!');
      fetchBirthdays(); // Fetch updated list of birthdays
    } catch (error) {
      setMessage('Error adding birthday');
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title text-center">Add Birthday</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Birthdate</label>
            <input
              type="date"
              className="form-control"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Add Birthday
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBirthday;
