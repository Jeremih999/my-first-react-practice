import React from "react";
import Cards from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Cards
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        mail="b@beyonce.com"
      />

      <Cards
        name="Wizkid"
        img="https://media.premiumtimesng.com/wp-content/files/2022/11/WIZKID-1-e1667914540115-728x570.jpg"
        mail="wiz@bigwiz.com"
        tel="+234 1234 124 5211"
      />

      <Cards
        name="Davido"
        img="https://dailypost.ng/wp-content/uploads/2021/02/davido.jpg"
        mail="obo@001.com"
        tel="+234 23456 235 25325"
      />
    </div>
  );
}

export default App;
