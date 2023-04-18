import { Link } from "react-router-dom";
import React from "react"
import "./comtuveuxsituveux.css"

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

  let image1 = document.getElementById(a)
  let image2 = document.getElementById(b)
  console.log("unptitmessageaveclesguymet")
  bisou(image1, c, b)
  bisou(image2, d, a)
}

function bounceImage(img) {
  const startTime = performance.now();
  const duration = 1010;
  const keyTimes = [0, 0.066, 0.267, 0.533, 0.8, 1];
  const keyVolumes = [1, 1.5, 1.2, 1.5, 1.2, 1];
  const bounceAmplitude = 1;

  function animate() {
    const elapsed = performance.now() - startTime;
    const t = elapsed / duration;

    if (t >= 1) {
      img.style.transform = "";
      return;
    }

    let volume = 1;
    for (let i = 1; i < keyTimes.length; i++) {
      if (t < keyTimes[i]) {
        const tt = (t - keyTimes[i - 1]) / (keyTimes[i] - keyTimes[i - 1]);
        volume = keyVolumes[i - 1] * (1 - tt) + keyVolumes[i] * tt;
        break;
      }
    }

    const scale = volume * (1 - t) + t;
    const offset = Math.sin(t * Math.PI * 2) * bounceAmplitude * volume;
    img.style.transform = `scale(${scale + offset})`;

    requestAnimationFrame(animate);
  }

  animate();
}

function myPlay2(){
  var audio = new Audio("Arm Pit Farts - QuickSounds.com.mp3");
  audio.play();
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



function ChatGPTpetite() {
  var kittens1 = Kittens.run();
  return (
    <div style={{ position: "absolute" }}>

      <div style={{ position: "absolute" }} className="bg"></div>

      <div className="fg absol vh100 vw100">
        <div className="h80p w100p flex col aitcent jcsb">
          <h1 className=" bisou "> Chatte j'ai pété fort </h1>
          <h2 className=" blink_me"> Une question? Cliquez-moi dessus et je vous répondrai en toute franchise </h2>
          <b> <Link className="lien test blink_me" style={{width: "10vh", height: "2vh" }} to="/"
		      > Retour au Quizz</Link> </b>
          <div style={{ height: "2%" }}> </div>
                    <img className="image1" src="petiteok.png" id= "image"
                onClick={() => { myPlay2(); bounceImage(document.getElementById("image")); }} />
          <div style={{ height: "7%" }}> </div>

        


          <p className="large"> <Link  to="/p3"
		      > Demander de l'aide au cuicui</Link>  </p>
          
          <marquee className=" bisou2">  Plus puissante, plus douce, plus bijou</marquee>
        </div>

        <div className="h20p w100p flex jcc">
          <img className="h100p" src="chatloucheok.svg" onClick={() => kittens1.add(1)} />

        </div>

      </div>
    </div>
  );
}

export default ChatGPTpetite;
