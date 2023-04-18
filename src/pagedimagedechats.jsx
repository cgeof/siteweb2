import { Link } from "react-router-dom";
import "./comtuveuxsituveux.css"
import React from "react";


var Kittens = require('kittens');

function PageImages() {
  var kittens1 = Kittens.run();

  return (
    <div style={{ position: "absolute" }}>

      <div style={{ position: "absolute" }} className="bg"></div>

      <div className="fg absol vh100 vw100 ">
      <div className="h80p  w100p flex col aitcent jcsb">
      <b> <Link className="lien test2 flex textal" style={{width: "15vh", height: "5vh" }} to="/p3"
		      > Demander de l'aide à IA cuicui</Link> </b>
          <div className="h80p w100p flex center">
            <img style={{ height: "30vh" }} src="https://cataas.com/cat/gif" />
            <img style={{ height: "30vh" }} src="https://cataas.com/cat" />
        
          </div>
          <marquee className=" bisou2">  <Link to="/p2" onClick={() => window.location.reload()} className="{{ lien }}">Cliquez ici pour toujours plus d'indices!</Link>  </marquee>
        </div>
        <div className="h20p w100p flex jcc">
          <img src="chatloucheok.svg" onClick={() => kittens1.add(1)} />


        </div>
      </div>
    </div>
  );
}

export default PageImages;