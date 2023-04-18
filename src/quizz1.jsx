
import React from "react"
import "./comtuveuxsituveux.css"
import { Link } from "react-router-dom";

const w = {

  width: "45vw",

}
const s = {
  height: "100vh",
  width: "100vw",
}
function bisou(e, f, g) {
  if (e) {
    e.src = f;
    e.id = g;
  }
}

function changeImage(a, b, c, d) {

  let image0 = document.getElementById(a)
  let image2 = document.getElementById(b)
  console.log("unptitmessageaveclesguymet")
  bisou(image0, c, b)
  bisou(image2, d, a)
}

var Kittens = require('kittens');

var kittens1 = Kittens.run(); // show 0 kittens
var kittens2 = Kittens.run(42); // show 42 kittens
var kittens3 = Kittens.run({
  kittens: 42, // show 42 kittens
  baseIncrement: 7, // base speed (around 7 pixels per tick)
  gif: 'http://.../cat.gif', // use custom gif
  gifWidth: 50,
  gifHeight: 50
});

kittens1.add(3); // add 3 kittens
kittens1.remove(2); // remove 2 kittens

kittens1.stop(); // stop animation and remove kittens
kittens2.stop();
kittens3.stop();



function Quizz1() {
  var kittens1 = Kittens.run();
  return (
    <div style={{ position: "absolute" }}>

      <div style={{ position: "absolute" }} className="bg"></div>

      <div className="fg  absol vh100 vw100">
        <div className="h80p  w100p flex col aitcent jcsb">
          <h1 className=" bisou "> Les petits chats </h1>
          <b> <Link className="lien test blink_me" style={{width: "10vh", height: "2vh" }} to="/p2"
		      > Lien vers les indices</Link> </b>
          <h2 className=" blink_me"> Qui est le cuicui ? </h2>

          <div style={{ height: "3%" }}> </div>
                    <img className="image0 zoom " src="DSC00122.JPG" />
          <div style={{ height: "7%" }}> </div>

          <p className="large"> Cliquez sur la bonne réponse pour remporter la cagnotte </p>



          <div style={w} className=" flex row jcse">
            <p>
              <img alt="" src="lepetitchatdgentoure.svg" style={{ height: "150px", width: "280px" }} id="petitgauche"
                onClick={() => changeImage('petitgauche', 'content', 'charcanciel.svg', 'lepetitchatdgentoure.svg')} />
            </p>

            <p>
              <img alt="" src="lepetitchatddgentoure.svg" style={{ height: "150px", width: "280px" }} id="petitdroit"
                onClick={() => changeImage('petitdroit', 'pascontent', 'chafeu.svg', 'lepetitchatddgentoure.svg')} />
            </p>
          </div>
          <marquee className=" bisou2">  Bientôt plus de quizz sur les petits chats pour toujours plus de rigolade entre amis </marquee>
        </div>

        <div className="h20p w100p flex jcc">
          <img className="h100p" src="chatloucheok.svg" onClick={() => kittens1.add(1)} />

        </div>

      </div>
    </div>
  );
}

export default Quizz1;
