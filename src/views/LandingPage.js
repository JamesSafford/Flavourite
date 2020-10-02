import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="LandingPage">
      This is the landing page
      <Link to="search">
        <button className="button-primary" type="button"> 
        Let's get cooking...
        </button>
       </Link>
    </div>
  );
}

/* function LandingPage(props) {
  return (
    <div className="LandingPage">
      This is the landing page
      <button className="button-primary" type="button" onClick={props.onClickButton}> 
        Let's get cooking...
       </button>
    </div>
  );
}
*/

export default LandingPage;
