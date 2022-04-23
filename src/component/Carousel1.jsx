import React from "react";
import "./Carousel1.css"


var left = 1;
var right = 4;

const prev = () => {
  if (left <= 1) return;
  document.getElementById("c" + right).style.display = "none";
  left -= 1;
  right -= 1;

  for (var i = left; i <= right; i++)
    document.getElementById("c" + i).style.display = "inline-block";
};
const next = () => {
  if (right >= 7) return;

  document.getElementById("c" + left).style.display = "none";
  left += 1;
  right += 1;

  for (var i = left; i <= right; i++) {
    document.getElementById("c" + i).style.display = "inline-block";
  }
};

 const Carousel1 = () => {
     return (
      <div className="carousel2setting">
    <div className="container2" >
      <button onClick={prev}> &#60; </button>
      <img id="c1" className="cor"  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-03/morning.png" alt=""/>
      <img id="c2" className="cor"  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-04/ice-cream-2.jpg" alt="" />
      <img id="c3" className="cor"  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-03/Kids_Zone_HomePageBanner_1.jpg" alt="" />
      <img id="c4" className="cor " src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-03/dry-fruits.png" alt="" />
      <img id="c5" className="cor disap" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-03/seasonal-fruit_mango_0.png" alt="" />
          <img id="c6" className="cor disap" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-03/repllents.png" alt="" />
          <img id="c7" className="cor disap" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-04/Ramadan-Special_0.jpg" alt="" />
     
      <button  onClick={next}> &#62; </button>
             </div>
             </div>
  );
};
export default Carousel1;