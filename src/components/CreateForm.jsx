import React, { useState } from 'react';

const CreateForm = () => {

const [name, setName] = useState('')
const [age, setAge] = useState('')
const [identity, setIdentity] = useState('')
const [power, setPower] = useState('')

console.log(name)
console.log(age)
console.log(identity)
console.log(power)

const handleSubmit = (e) => {
    e.preventDefault()

}

  return (
    <div className="modal-body m-auto col-6">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="col-form-label">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="col-form-label">
            Age
          </label>
          <input
            className="form-control"
            type="number"
            id="age"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="secretID" className="col-form-label">
            Secret Identity
          </label>
          <input
            className="form-control"
            type="text"
            id="secretID"
            placeholder="Secret Identity"
            onChange={(e) => setIdentity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="power" className="col-form-label">
            Power
          </label>
          <input
            className="form-control"
            type="text"
            id="power"
            placeholder="Power"
            onChange={(e) => setPower(e.target.value)}
          />
        </div>
        <button className="btn btn-dark" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
