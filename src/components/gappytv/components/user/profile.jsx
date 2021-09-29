import React from "react";

const Profile = (props) => {

  const {img, name, points} = props;

  return (
    <React.Fragment>
      <div className="d-inline-block m-5" style={{height: "10%", width: "10%"}}>
        <img
          src={img}
          style={{ borderRadius: "50%" }}
          className="img-responsive img-thumbnail"
        />
        <p className="mt-1 h6 text-center text-decoration-none">{name}</p>
        <h5 className="text-center text-success">{points}</h5>
      </div>
    </React.Fragment>
  );
};

Profile.defaultProps = {
  img: "Loading...",
  name: "Loading...",
  points: "0"
};

export default Profile;
