import React, { useState } from "react";

const CreateForm = () => {

  const [newHero, setNewHero] = useState({
    name: "",
    age: "",
    secrectIdentity: "",
    power: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newHero.name);
  };


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
            onChange={(e) => setNewHero({name: e.target.value})}
          />
          {console.log(newHero.name)}
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
            onChange={(e) => setNewHero({age: e.target.value})}
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
            onChange={(e) => setNewHero({secrectIdentity: e.target.value})}
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
            onChange={(e) => setNewHero({power: e.target.value})}
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
