import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteBirthday = ({ setMessage, fetchBirthdays }) => {
  const [name, setName] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:5001/birthdays/${name}`);
      setMessage('Birthday deleted successfully!');
      fetchBirthdays();
    } catch (error) {
      setMessage('Error deleting birthday');
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title text-center">Delete Birthday</h5>
        <form onSubmit={handleDelete}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name to delete"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Delete Birthday
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteBirthday;
