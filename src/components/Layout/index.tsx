import React, { useRef, useEffect, FC } from "react";
import Header from "components/Header";
import "styles/common.scss";
import * as styles from "./styles.module.scss";
import Footer from "components/Footer";

// import Header from "../Header/Header"
// import Footer from "../Footer/Footer"
// import { TweenMax } from "gsap"
// import ScrollToTop from "../ScrollToTop/ScrollToTop"

// function Layout(props) {
//   let reveal = useRef(null)

//   useEffect(() => {
//     TweenMax.to(reveal, { duration: 1.5, height: 0, ease: "expo.inOut" })
//   }, [reveal])

//   return (
//     <div className="layout">
//       <div
//         className="reveal"
//         ref={item => {
//           reveal = item
//         }}
//       ></div>
//       <div className="container">
//         <div id="top"></div>
//         <Header />
//         {props.children}
//         <Footer />
//         <ScrollToTop showBelow={400} />
//       </div>
//     </div>
//   )
// }

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className="container">
        <div id="top"></div>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
