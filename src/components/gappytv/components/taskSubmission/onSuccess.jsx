import React from "react";

// External Libraries
import { Link } from "react-router-dom";

// Assets
import congrats from '../../assets/congrats.jpeg';

const onSuccess = () => {
  return (
      <React.Fragment>
        <div className="d-flex justify-content-center">
            <img className="img-fluid" width="50%" src={congrats}/>
        </div>

        <div>
          <h2 className="m-5 font-weight-bold text-success text-center">
            Congratulations!!!
          </h2>
          <h3 className="m-5 font-weight-light text-center">
            You've just earned 15 points, you can use these points to redeem cash, giftcards or products. To redeem, head to the profile section!
          </h3>
        </div>

        <div className="m-5 d-flex justify-content-center">
            <Link className="btn p-2 btn-primary" to="/home">
              <h3 className="font-weight-bold text-center">
                Home
              </h3>
            </Link>
        </div>
      </React.Fragment>
  );
};

export default onSuccess;
