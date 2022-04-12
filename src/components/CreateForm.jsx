import React, { useState } from "react";

const CreateForm = (props) => {
  const [newHero, setNewHero] = useState({
    name: "",
    age: "",
    secretIdentity: "",
    power: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(newHero);
  };

  const clearInputs = () => {
    setNewHero({
      name: "",
      age: "",
      secretIdentity: "",
      power: "",
    })
  }

  const handleInputChange = (e, inputName) => {
    const copyNewHero = { ...newHero };
    copyNewHero[inputName] = e.target.value;
    setNewHero(copyNewHero);
    clearInputs()
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
            onChange={(e) => handleInputChange(e, "name")}
          />
          {/* {console.log(newHero.name)} */}
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
            onChange={(e) => handleInputChange(e, "age")}
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
            onChange={(e) => handleInputChange(e, "secretIdentity")}
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
            onChange={(e) => handleInputChange(e, "power")}
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
