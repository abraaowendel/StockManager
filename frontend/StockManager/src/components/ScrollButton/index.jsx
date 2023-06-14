import { useState } from "react";
import * as C from "./styled";

export const ScrollButton  = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
    return(
        <C.ScrollButton className="scrollButton " onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><metadata> </metadata><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#26748A" stroke="none"><path d="M2310 4549 c-744 -95 -1371 -581 -1648 -1276 -220 -553 -184 -1201 95 -1723 200 -373 521 -684 898 -870 651 -321 1439 -271 2041 129 624 416 976 1153 904 1892 -93 958 -814 1714 -1758 1843 -121 17 -418 20 -532 5z m315 -819 c56 -27 979 -953 1000 -1003 19 -46 19 -90 1 -125 -26 -48 -189 -201 -226 -212 -74 -21 -97 -6 -325 221 -116 115 -214 209 -218 209 -4 0 -7 -323 -7 -717 0 -694 -1 -719 -20 -750 -39 -64 -54 -68 -260 -68 -210 0 -237 6 -272 64 l-23 36 -3 719 -3 720 -212 -211 c-183 -183 -218 -213 -256 -223 -69 -18 -113 4 -214 109 -96 100 -114 138 -96 206 9 34 78 108 498 528 550 552 540 544 636 497z"/></g></svg>
        </C.ScrollButton>
    )
}