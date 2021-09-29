import React from "react";

const Confirmation = (props) => {
  const { count, pt, pin, handleOnSubmit, handleOnChange } = props;

  return (
    <React.Fragment>
      <div>
        <h3 className="m-5 font-weight-light text-center">
          You have selected one or more boxes, certifying that you have
          completed the associated task of, submitting the appropriate CPTII
          codes for the selected patients
        </h3>
      </div>

      <div className="m-5 d-flex justify-content-center">
        <form onSubmit={handleOnSubmit}>
          <input
            type="password"
            className="form-control mb-3"
            name="pin"
            id="pin"
            value={pin}
            onChange={handleOnChange}
            placeholder="Enter Pin"
          ></input>
          <button type="submit" className="btn p-3 btn-success">
            <h3 className="font-weight-bold text-center">
              Complete to Unlock {count} Points
            </h3>
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Confirmation;
