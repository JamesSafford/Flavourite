import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';

function LandingPage() {
  return (
    <div>
    <p className="HeroText">Got an ingredient you want to use up? Here’s how the best chefs would use them...</p>
    </div>
    )

   /* <div className="LandingPage">
      This is the landing page
      <Link to="search">
        <button className="button-primary" type="button"> 
        Let's get cooking...
        </button>
       </Link>
    </div> */
  ; 
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
