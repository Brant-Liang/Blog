import React from 'react'
import './style.css'
import './index.js'
export default function homePic() {
  const s1 = document.createElement('script');
  const s2 = document.createElement("script");

  s2.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r75/three.min.js'
  s1.type = 'text/javascript';
  s1.src = 'https://static.codepen.io/assets/common/stopExecutionOnTimeout-db44b196776521ea816683afab021f757616c80860d31da6232dedb8d7cc4862.js';
  document.body.appendChild(s1).appendChild(s2);
  return (
    <div>
      <div id="three-container"></div>
    </div>
  )
}
