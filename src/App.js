// import { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import CustomModal from "./Modal";

// const Data = [
//   {
//     youtubeUrl: "https://www.youtube.com/embed/h_O3k9A_X_k",
//     description: "React Js Tutorial",
//   },
//   {
//     youtubeUrl: "https://www.youtube.com/embed/9Sk-UBkrtgQ",
//     description: "Shark Tank",
//   },
//   {
//     youtubeUrl: "https://www.youtube.com/embed/d40WT32QJgU",
//     description: "React Js Mern Stack Tutorial",
//   },
//   {
//     youtubeUrl: "https://www.youtube.com/embed/9i1Ri8kPoec",
//     description: "Bhajarangi Bhaijan | Tu jo mila",
//   },
// ];
// function App() {
//   const [dimensions, setDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });
//   const [openModal, setOpenModal] = useState(false);
//   const [youtubeData, setYouTubeData] = useState({});
//   const containerStyle = {
//     minWidth: 280,
//     minHeight: 200,
//     maxWidth: dimensions.width * 0.3,
//     margin: 10,
//   };

//   const updateDimensions = () => {
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("resize", updateDimensions);
//     return () => window.removeEventListener("resize", updateDimensions);
//   }, []);

//   return (
//     <>
//       <div
//         style={{
//           width: dimensions.width,
//           display: "flex",
//           justifyContent: "space-evenly",
//           flexDirection: dimensions.width < 650 ? "column" : "row",
//           flexWrap: "wrap",
//           alignItems: "center",
//         }}
//       >
//         {Data &&
//           Data?.map((items, index) => (
//             <>
//               <div
//                 style={{
//                   ...containerStyle,
//                 }}
//                 onClick={() => {
//                   setYouTubeData({ ...items });
//                   setOpenModal(true);
//                 }}
//               >
//                 <video width="100%" height="100%" controls>
//                   <source src={items.youtubeUrl} type="video/mp4" />
//                 </video>
//                 <p>{items.description}</p>
//               </div>
//             </>
//           ))}

//         {openModal && (
//           <CustomModal
//             open={openModal}
//             onCloseModal={() => {
//               setOpenModal(false);
//             }}
//           >
//             {" "}
//             <iframe
//               width={
//                 dimensions.width > 600
//                   ? dimensions.width * 0.6
//                   : dimensions.width * 0.8
//               }
//               height={dimensions.height * 0.6}
//               src={youtubeData.youtubeUrl}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               title="Embedded youtube"

//             />
//           </CustomModal>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Navbar1 from "./components/Navbar1";

import "bootstrap/dist/css/bootstrap.min.css";

import Carosels from "./components/Carosels";

import Fig from "./components/Fig";
import TableData from './components/TableData';

function App() {
  return (
    <div className="main">
      <Navbar1 />
      <Carosels />
      <Fig />
      <TableData/>
    </div>
  );
}

export default App;
