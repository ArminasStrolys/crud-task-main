import React, { useState, useEffect } from "react";

const Modal = (props) => {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    secretIdentity: "",
    power: "",
    id: "",
  });
// console.log(props.modalInputs)
  useEffect(() => {
    setInputs({
      name: props.modalInputs.name,
      age: props.modalInputs.age,
      secretIdentity: props.modalInputs.secretIdentity,
      power: props.modalInputs.power,
      id: props.modalInputs.id,
    });
  }, [props.modalInputs]);

  const handleInputChange = (e, input) => {
    const copyInputs = { ...inputs };
    copyInputs[input] = e.target.value;
    setInputs(copyInputs);
  };

const handleSave = () => {
  props.save({
    name: inputs.name,
    age: inputs.age,
    secretIdentity: inputs.secretIdentity,
    power: inputs.power,
  },
  inputs.id
  )
}

  return (
    <div
      style={{
        display: props.visible === true ? "block" : "none",
        opacity: props.visible === true ? "1" : "0",
      }}
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Member
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.invisible}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name" className="col-form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  value={inputs.name}
                  onChange={(e)=>handleInputChange(e, 'name')}
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="age" className="col-form-label">
                  Age
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="age"
                  value={inputs.age}
                  onChange={(e)=>handleInputChange(e, 'age')}
                  placeholder="Enter age"
                />
              </div>
              <div className="form-group">
                <label htmlFor="secretIdentity" className="col-form-label">
                  Secret Identity
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="secretIdentity"
                  value={inputs.secretIdentity}
                  onChange={(e)=>handleInputChange(e, 'secretIdentity')}
                  placeholder="Enter secret identity"
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
                  value={inputs.power}
                  onChange={(e)=>handleInputChange(e, 'power')}
                  placeholder="Enter power"
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={props.invisible}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
