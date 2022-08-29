import React from "react"
import { ImageSlider } from "react-simple-gallery"
import "react-simple-gallery/dist/index.css"
 
function Gallery (props) {
  const data =[
    { title: "chasoleil", src: "charcanciel.svg" },
    { title: "chafeu", src: "chafeu.svg" },
  ]
  return (
    <div>
      <ImageSlider data={data} />
    </div>
  )
}
function Quizz1() {
    return (
      <div >
        <h1>je suis quizz 1 bisou essaie d'importer une photo</h1>
        <Gallery />
      </div>
    );
  }
  
  export default Quizz1;
  .test {  width: 100px;
		height: 50px;
		background-color: red;
		position: relative;
		animation-name: test;
		animation-duration: 4s;
		animation-iteration-count: infinite;
	  }
	  @keyframes test {
		0%   {background-color:rgb(173,176,226); left:0px; top:0px;}
		25%  {background-color:rgb(173,176,226); left:400px; top:0px;}
		50%  {background-color:rgb(173,176,226); left:0px; top:150px;}
		75%  {background-color:rgb(173,176,226); left:400px; top:150px;}
		100% {background-color:rgb(173,176,226); left:0px; top:0px;}
	  }

    .image1 {
		
      height: 25vh;
      
    cursor: url('/public/chatnoir100.svg'), auto; 
      
      
      }
      .image2 {
      width: 300px;
      height: 300px;
      object-fit: contain;
      cursor: url('/public/poules100.svg'), auto; 
      
      }
  
      .image3 {
      width: 300px;
      height: 300px;
      object-fit: contain;
      cursor: url('/public/lapin.svg'), auto; 
      
      }