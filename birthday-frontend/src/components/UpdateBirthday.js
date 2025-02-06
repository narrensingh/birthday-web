import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateBirthday = ({ setMessage, fetchBirthdays }) => {
  const [name, setName] = useState('');
  const [newBirthdate, setNewBirthdate] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://birthday-web-backend.onrender.com/birthdays/${name}`, {
        birthdate: newBirthdate,
      });
      setMessage('Birthday updated successfully!');
      fetchBirthdays();
    } catch (error) {
      setMessage('Error updating birthday');
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title text-center">Update Birthday</h5>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name to update"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">New Birthdate</label>
            <input
              type="date"
              className="form-control"
              value={newBirthdate}
              onChange={(e) => setNewBirthdate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning w-100">
            Update Birthday
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBirthday;
