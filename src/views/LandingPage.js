import React from "react";

function LandingPage(props) {
  return (
    <div className="LandingPage">
      This is the landing page
      <button className="button-primary" type="button" onClick={props.onClickButton} >
        Let's get cooking...
      </button>
    </div>
  );
}

export default LandingPage;
