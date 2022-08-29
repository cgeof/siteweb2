import "./comtuveuxsituveux.css"
import React from "react";


var Kittens = require('kittens');

function PageImages() {
  var kittens1 = Kittens.run();

  return (
    <div style={{ position: "absolute" }}>



      <div style={{ position: "absolute" }} className="bg"></div>

      <div className="fg absol vh100 vw100 cadre">
        <div className="cadre h80p w100p flex center">
          <img style={{ height: "30vh" }} src="https://cataas.com/cat/gif" />
          <img style={{ height: "30vh" }} src="https://cataas.com/cat" />

        </div>
        <div className="cadre h20p w100p flex jcc">
          <img src="chatloucheok.svg" onClick={() => kittens1.add(1)} />


        </div>
      </div>
    </div>
  );
}

export default PageImages;