// import React from "react";
// import Sampleheader from "./layout/Sampleheader";
// import Gal from "./components/Gal";
// import Langbutton from "./layout/langbutton";
// import SampleGal from "./components/SampleGal";
// import NInput from "./components/NInput";
// import SInput from "./components/SInput";
// import MQ from "./ex/MQ";
// import Grid from "./ex/Grid";
// import Cal from "./ex/Cal";
// import Detail from "./components/Detail";

// const App = () => {
//   // 변수 선언 . 너는 너야. 변수 - 변하는 경우의 수
//   //const => 변함없이 계속해서 끝까지 똑같은.
//   //let => 변경 가능

//   return (
//     <div>
//       <Sampleheader />
//       <main>
//         <Gal />
//         {/* <SampleGal /> */}
//         <NInput />
//         {/* <SInput /> */}
//         {/* <MQ /> */}
//         {/* <Grid /> */}
//         {/* <Cal /> */}
//         <Detail />
//       </main>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Header from "./Components2/Header";
// import Gallery from "./Components2/Gallery";
// import Input from "./Components2/Input";
// import Detail from "./Components2/Detail";
// import Calendar from "./Components2/Calendar";
// import LButton from "./Components2/LButton";
// import Poster from "./Components2/Poster";
// import Reason from "./Components2/Reason";
// import FAQ from "./Components2/FAQ";
// import LB from "./Components2/LB";

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Gallery />
//       <Input />
//       <Detail />
//       <Calendar />
//       <Poster />
//       <Poster />
//       <Reason />
//       <FAQ />
//       <LB />
//     </div>
//   );
// };

// export default App;
import React from "react";
import Header from "./practice/Header";
import Gallery from "./practice/Gallery";
import Input from "./practice/Input";
import Detail from "./practice/Detail";
import Poster from "./practice/Poster";
import FAQ from "./practice/FAQ";
import LB from "./practice/LB";
import Footer from "./practice/Footer";
import Reason from "./practice/Reason";
import Langbutton from "./practice/Langbutton";

const App = () => {
  return (
    <div>
      <Header />
      <Gallery />
      <Input />
      <Detail />
      <Poster />
      <Reason />
      <FAQ />
      <LB />
      <Footer />
    </div>
  );
};

export default App;
