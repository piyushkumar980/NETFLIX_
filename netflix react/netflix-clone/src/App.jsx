// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Import your components
// import Content1 from "./components/content1";
// import Box from "./components/Box";
// // import Content2 from "./components/content2";
// // import Content3 from "./components/content3";
// // import Content4 from "./components/content4"; 
// // import Content5 from "./components/content5";
// // import Content6 from "./components/content6";
// // import Content7 from "./components/content7";
// import SignIn from "./components/SignIn"; 
// import Welcome from "./components/Welcome";
// import Welcome2 from "./components/Welcome2";
// import Verify from "./components/Verify";
// import SignOut from "./components/SignOut";
// import ChoosePlan from "./components/choosePlan";
// import BuyPlan from "./components/buyPlan";
// import Confirm from "./components/Confirm";
// import Payment from "./components/payment";
// import Plan from "./components/Plan";
// import Freemovie from "./components/Freemovie";
// import Free from "./components/free";
// import Cartoons from "./components/Cartoons";
// import DummyCarousel from "./components/paidcontent";

// import PlayMovie from "./components/playMovie"; //recently added
// import UploadMovie from "./components/UploadMovie";

// import Pushpa from "./components/pushpa";
// import Squidgame from "./components/squidgame";
// import LuckyBhaskar from "./components/luckybhaskar";
// import BhoolBhulaiya from "./components/bhoolbhulaiya";
// import Venom from "./components/venom";
// import Mismatched from "./components/mismatched";
// import Xyz from "./components/xyz";
// import Amaran from "./components/amaran";
// import Kitty from "./components/kitty";
// import Devara from "./components/devara";
// import Bheem from "./components/bheem";
// import MotuPatlu from "./components/motupatlu";
// import NinjaHattori from "./components/ninjahattori";
// import Doraemon from "./components/doraemon";
// import Shinchan from "./components/shinchan";
// import TomnJerry from "./components/tomnjerry";
// import MrBean from "./components/bean";
// import Junglebook from "./components/junglebook";
// import OggynCockroach from "./components/oggyncockroach";
// import Shiva from "./components/shiva";
// import Song1 from "./components/song1";
// import Song2 from "./components/song2";
// import Song3 from "./components/song3";
// import Song4 from "./components/song4";
// import Song5 from "./components/song5";
// import Song6 from "./components/song6";
// import Song7 from "./components/song7";
// import Song8 from "./components/song8";
// import Song9 from "./components/song9";
// import Song10 from "./components/song10";


// // Home component for main page layout
// const Home = () => {
//   return (
//     <div className="container">
//       <div className="box"></div>
//       <Content1 />
//       <Box />
//       {/* <Content2 />
//       <Box />
//       <Content3 />
//       <Box />
//       <Content4 />
//       <Box />
//       <Content5 />
//       <Box />
//       <Content6 />
//       <Box />
//       <Content7 /> */}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Home Route */}
//         <Route path="/" element={<Home />} />
        
//         {/* Sign In Page Route */}
//         <Route path="/signin" element={<SignIn />} />

//         {/* Welcome Page Route */}
//         <Route path="/welcome" element={<Welcome />} />

//         {/* Additional Routes */}
//         <Route path="/welcome2" element={<Welcome2 />} />
//         <Route path="/verify" element={<Verify />} />
//         <Route path="/signout" element={<SignOut />} />
//         <Route path="/chooseplan" element={<ChoosePlan />} />
//         <Route path="/buyplan" element={<BuyPlan />} />
//         <Route path="/confirm" element={<Confirm />} />
//         <Route path="/payment" element={<Payment />} />

//         {/* <Route path="/play/:id" element={<PlayMovie />} /> */}
//         <Route path="/play" element={<PlayMovie />} />
//         <Route path="/upload" element={<UploadMovie />} /> 
  
//         <Route path="/plan" element={<Plan />} />
//         <Route path="/free" element={<Free />} />
//         <Route path="/freemovie" element={<Freemovie />} />
//         <Route path="/cartoons" element={<Cartoons />} />
//         <Route path="/paidcontent" element={<DummyCarousel />} />
//         <Route path="/pushpa" element={<Pushpa />} />
//         <Route path="/squidgame" element={<Squidgame />} />
//         <Route path="/luckybhaskar" element={<LuckyBhaskar />} />
//         <Route path="/bhoolbhulaiya" element={<BhoolBhulaiya />} />
//         <Route path="/venom" element={<Venom />} />
//         <Route path="/mismatched" element={<Mismatched />} />
//         <Route path="/xyz" element={<Xyz />} />
//         <Route path="/amaran" element={<Amaran />} />
//         <Route path="/kitty" element={<Kitty />} />
//         <Route path="/devara" element={<Devara />} />
//         <Route path="/bheem" element={<Bheem />} />
//         <Route path="/motupatlu" element={<MotuPatlu />} />
//         <Route path="/ninjahattori" element={<NinjaHattori />} />
//         <Route path="/doraemon" element={<Doraemon />} />
//         <Route path="/shinchan" element={<Shinchan />} />
//         <Route path="/tomnjerry" element={<TomnJerry />} />
//         <Route path="/bean" element={<MrBean />} />
//         <Route path="/junglebook" element={<Junglebook />} />
//         <Route path="/oggyncockroach" element={<OggynCockroach />} />
//         <Route path="/shiva" element={<Shiva />} />
//         <Route path="/song1" element={<Song1 />} />
//         <Route path="/song2" element={<Song2 />} />
//         <Route path="/song3" element={<Song3 />} />
//         <Route path="/song4" element={<Song4 />} />
//         <Route path="/song5" element={<Song5 />} />
//         <Route path="/song6" element={<Song6 />} />
//         <Route path="/song7" element={<Song7 />} />
//         <Route path="/song8" element={<Song8 />} />
//         <Route path="/song9" element={<Song9 />} />
//         <Route path="/song10" element={<Song10 />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



















































































































































// src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from "axios";

// // Import your components
// import Content1 from "./components/content1";
// import Box from "./components/Box";
// // import Content2 from "./components/content2";
// // import Content3 from "./components/content3";
// // import Content4 from "./components/content4"; 
// // import Content5 from "./components/content5";
// // import Content6 from "./components/content6";
// // import Content7 from "./components/content7";
// import SignIn from "./components/SignIn"; 
// import Welcome from "./components/Welcome";
// import Welcome2 from "./components/Welcome2";
// import Verify from "./components/Verify";
// import SignOut from "./components/SignOut";
// import ChoosePlan from "./components/choosePlan";
// import BuyPlan from "./components/buyPlan";
// import Confirm from "./components/Confirm";
// import Payment from "./components/payment";
// import Plan from "./components/Plan";
// import Freemovie from "./components/Freemovie";
// import Free from "./components/free";
// import Cartoons from "./components/Cartoons";
// import DummyCarousel from "./components/paidcontent";

// import PlayMovie from "./components/playMovie"; //recently added
// import UploadMovie from "./components/UploadMovie";

// import Pushpa from "./components/pushpa";
// import Squidgame from "./components/squidgame";
// import LuckyBhaskar from "./components/luckybhaskar";
// import BhoolBhulaiya from "./components/bhoolbhulaiya";
// import Venom from "./components/venom";
// import Mismatched from "./components/mismatched";
// import Xyz from "./components/xyz";
// import Amaran from "./components/amaran";
// import Kitty from "./components/kitty";
// import Devara from "./components/devara";
// import Bheem from "./components/bheem";
// import MotuPatlu from "./components/motupatlu";
// import NinjaHattori from "./components/ninjahattori";
// import Doraemon from "./components/doraemon";
// import Shinchan from "./components/shinchan";
// import TomnJerry from "./components/tomnjerry";
// import MrBean from "./components/bean";
// import Junglebook from "./components/junglebook";
// import OggynCockroach from "./components/oggyncockroach";
// import Shiva from "./components/shiva";
// import Song1 from "./components/song1";
// import Song2 from "./components/song2";
// import Song3 from "./components/song3";
// import Song4 from "./components/song4";
// import Song5 from "./components/song5";
// import Song6 from "./components/song6";
// import Song7 from "./components/song7";
// import Song8 from "./components/song8";
// import Song9 from "./components/song9";
// import Song10 from "./components/song10";


// // Home component for main page layout
// const Home = () => {
//   return (
//     <div className="container">
//       <div className="box"></div>
//       <Content1 />
//       <Box />
//       {/* <Content2 />
//       <Box />
//       <Content3 />
//       <Box />
//       <Content4 />
//       <Box />
//       <Content5 />
//       <Box />
//       <Content6 />
//       <Box />
//       <Content7 /> */}
//     </div>
//   );
// };

// const App = () => {

//   const [responseId , setResponseId] = React.useState("");
//   const [responseState, setResponseState] = React.useState([]);

//   const loadScript = (src)=>{
//     return new Promise((resolve)=>{
//       const script = document.createElement("script");

//       script.src = src;

//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     })
//   }

//   const createRazorpayOrder = (amount) => {
//     let data = JSON.stringify({
//       amount: amount * 100, // Convert to paise
//       currency: "INR"
//     });
  
//     let config = {
//       method: "post",
//       url: "http://localhost:5000/orders",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       data: data
//     };
  
//     axios.request(config)
//       .then((response) => {
//         console.log("Order Response:", response.data);
//         handleRazorPayScreen(response.data); // Ensure you handle order ID correctly
//       })
//       .catch((error) => {
//         console.error("Error creating Razorpay order:", error);
//       });
//   };

// const handleRazorpayScreen = async(amount) =>{
//   const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
//   if(!res){
//     alert("some error at razorpay screen loading")
//     return;
//   }

//   const options = {
//     key:"rzp_test_zqRzqKTcn5LTlz",
//     amount:amount,
//     currency:'INR',
//     name:"Piyush Sharma",
//     description:"Payment to Piyush Sharma",
//   // image:"https://"
//     handler: function(response){
//       setResponseId(response.razorpay_payment_id)
//     },
//     profile:{
//       name:"Piyush Sharma",
//       email:"piyushkumarofficial980@gmail.com"
//     },
//     theme:{
//       color:"#F4C430"
//     }
//   }

//   const paymentObject = new window.Razorpay(options)
//   paymentObject.open()
// }

// const paymentFetch = (e)=>{
//   e.preventDefault();

//   const paymentId = e.target.paymentId.value;

//   axios.get(`http://localhost:5000/payment/${paymentId}`)
//   .then((response)=>{
//     console.log(response.data);
//     setResponseState(response.data);
//   })
//   .catch((error)=>{
//     console.log("error occurs",error)
//   })
// }


// return (
//   <div>
//     <div className="App">
//      <button onClick={()=>createRazorpayOrder(1)}>
//       payment of 1 rs.
//      </button>
//      {responseId && <p>{responseId}</p>}
//      <h1>This is payment verification form</h1>
//      <form onSubmit={paymentFetch}>
//       <input type="text" name="paymentId"/>  
//       <button type="submit">Fetch Payment</button>
//       {responseState.length !=0 && (
//         <ul>
//           <li>{responseState.amount/100}rs.</li>
//           <li>{responseState.currency}</li>
//           <li>{responseState.status}</li>
//           <li>{responseState.method}</li>
//         </ul>
//       )}
//       </form>
//     </div>









//     <Router>
//       <Routes>
//         {/* Home Route */}
//         <Route path="/" element={<Home />} />
        
//         {/* Sign In Page Route */}
//         <Route path="/signin" element={<SignIn />} />

//         {/* Welcome Page Route */}
//         <Route path="/welcome" element={<Welcome />} />

//         {/* Additional Routes */}
//         <Route path="/welcome2" element={<Welcome2 />} />
//         <Route path="/verify" element={<Verify />} />
//         <Route path="/signout" element={<SignOut />} />
//         <Route path="/chooseplan" element={<ChoosePlan />} />
//         <Route path="/buyplan" element={<BuyPlan />} />
//         <Route path="/confirm" element={<Confirm />} />
//         <Route path="/payment" element={<Payment />} />

//         {/* <Route path="/play/:id" element={<PlayMovie />} /> */}
//         <Route path="/play" element={<PlayMovie />} />
//         <Route path="/upload" element={<UploadMovie />} /> 

//         <Route path="/plan" element={<Plan />} />
//         <Route path="/free" element={<Free />} />
//         <Route path="/freemovie" element={<Freemovie />} />
//         <Route path="/cartoons" element={<Cartoons />} />
//         <Route path="/paidcontent" element={<DummyCarousel />} />
//         <Route path="/pushpa" element={<Pushpa />} />
//         <Route path="/squidgame" element={<Squidgame />} />
//         <Route path="/luckybhaskar" element={<LuckyBhaskar />} />
//         <Route path="/bhoolbhulaiya" element={<BhoolBhulaiya />} />
//         <Route path="/venom" element={<Venom />} />
//         <Route path="/mismatched" element={<Mismatched />} />
//         <Route path="/xyz" element={<Xyz />} />
//         <Route path="/amaran" element={<Amaran />} />
//         <Route path="/kitty" element={<Kitty />} />
//         <Route path="/devara" element={<Devara />} />
//         <Route path="/bheem" element={<Bheem />} />
//         <Route path="/motupatlu" element={<MotuPatlu />} />
//         <Route path="/ninjahattori" element={<NinjaHattori />} />
//         <Route path="/doraemon" element={<Doraemon />} />
//         <Route path="/shinchan" element={<Shinchan />} />
//         <Route path="/tomnjerry" element={<TomnJerry />} />
//         <Route path="/bean" element={<MrBean />} />
//         <Route path="/junglebook" element={<Junglebook />} />
//         <Route path="/oggyncockroach" element={<OggynCockroach />} />
//         <Route path="/shiva" element={<Shiva />} />
//         <Route path="/song1" element={<Song1 />} />
//         <Route path="/song2" element={<Song2 />} />
//         <Route path="/song3" element={<Song3 />} />
//         <Route path="/song4" element={<Song4 />} />
//         <Route path="/song5" element={<Song5 />} />
//         <Route path="/song6" element={<Song6 />} />
//         <Route path="/song7" element={<Song7 />} />
//         <Route path="/song8" element={<Song8 />} />
//         <Route path="/song9" element={<Song9 />} />
//         <Route path="/song10" element={<Song10 />} />
//       </Routes>
//     </Router>
//   </div>
// );
// }
// export default App;






























// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from "axios";

// // Import your components
// import Content1 from "./components/content1";
// import Box from "./components/Box";
// import SignIn from "./components/SignIn";
// import Welcome from "./components/Welcome";
// import Welcome2 from "./components/Welcome2";
// import Verify from "./components/Verify";
// import SignOut from "./components/SignOut";
// import ChoosePlan from "./components/choosePlan";
// import BuyPlan from "./components/buyPlan";
// import Confirm from "./components/Confirm";
// import Payment from "./components/payment";
// import Plan from "./components/Plan";
// import Freemovie from "./components/Freemovie";
// import Free from "./components/free";
// import Cartoons from "./components/Cartoons";
// import DummyCarousel from "./components/paidcontent";
// import PlayMovie from "./components/playMovie";
// import UploadMovie from "./components/UploadMovie";

// // Home component for main page layout
// const Home = () => {
//   return (
//     <div className="container">
//       <div className="box"></div>
//       <Content1 />
//       <Box />
//     </div>
//   );
// };

// const App = () => {
//   const [responseId, setResponseId] = React.useState("");
//   const [responseState, setResponseState] = React.useState([]);

//   const loadScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const createRazorpayOrder = (amount) => {
//     let data = JSON.stringify({
//       amount: amount * 100, // Convert to paise
//       currency: "INR",
//     });

//     let config = {
//       method: "post",
//       url: "http://localhost:5000/api/orders",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };

//     axios
//       .request(config)
//       .then((response) => {
//         console.log("Order Response:", response.data);
//         handleRazorPayScreen(response.data); // Pass the order data here
//       })
//       .catch((error) => {
//         console.error("Error creating Razorpay order:", error);
//       });
//   };

//   const handleRazorPayScreen = async (order) => {
//     const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

//     if (!res) {
//       alert("Razorpay SDK failed to load. Are you online?");
//       return;
//     }

//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY, // ✅ Uses frontend-safe key
//       amount: order.amount,
//       currency: order.currency,
//       order_id: order.order_id,
//       handler: function (response) {
//         console.log("Payment Successful:", response);
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   const paymentFetch = (e) => {
//     e.preventDefault();
//     const paymentId = e.target.paymentId.value;

//     axios
//       .get(`http://localhost:5000/payment/${paymentId}`)
//       .then((response) => {
//         console.log(response.data);
//         setResponseState(response.data);
//       })
//       .catch((error) => {
//         console.log("Error occurs", error);
//       });
//   };

//   return (
//     <div>
//       <div className="App">
//         <button onClick={() => createRazorpayOrder(1)}>Payment of 1 rs.</button>
//         {responseId && <p>{responseId}</p>}
//         <h1>This is payment verification form</h1>
//         <form onSubmit={paymentFetch}>
//           <input type="text" name="paymentId" />
//           <button type="submit">Fetch Payment</button>
//           {responseState.length !== 0 && (
//             <ul>
//               <li>{responseState.amount / 100}rs.</li>
//               <li>{responseState.currency}</li>
//               <li>{responseState.status}</li>
//               <li>{responseState.method}</li>
//             </ul>
//           )}
//         </form>
//       </div>

//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/welcome" element={<Welcome />} />
//           <Route path="/welcome2" element={<Welcome2 />} />
//           <Route path="/verify" element={<Verify />} />
//           <Route path="/signout" element={<SignOut />} />
//           <Route path="/chooseplan" element={<ChoosePlan />} />
//           <Route path="/buyplan" element={<BuyPlan />} />
//           <Route path="/confirm" element={<Confirm />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/play" element={<PlayMovie />} />
//           <Route path="/upload" element={<UploadMovie />} />
//           <Route path="/plan" element={<Plan />} />
//           <Route path="/free" element={<Free />} />
//           <Route path="/freemovie" element={<Freemovie />} />
//           <Route path="/cartoons" element={<Cartoons />} />
//           <Route path="/paidcontent" element={<DummyCarousel />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;




















































































































































































































































import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import Content1 from "./components/content1";
import Box from "./components/Box";
import SignIn from "./components/SignIn";
import Welcome from "./components/Welcome";
import Welcome2 from "./components/Welcome2";
import Verify from "./components/Verify";
import SignOut from "./components/SignOut";
import ChoosePlan from "./components/choosePlan";
import BuyPlan from "./components/buyPlan";
import Confirm from "./components/Confirm";
import Payment from "./components/payment";
import Plan from "./components/Plan";
import Freemovie from "./components/Freemovie";
import Free from "./components/free";
import Cartoons from "./components/Cartoons";
import DummyCarousel from "./components/paidcontent";
import PlayMovie from "./components/playMovie";
import UploadMovie from "./components/UploadMovie";

// Home component for main page layout
const Home = () => {
  return (
    <div className="container">
      <div className="box"></div>
      <Content1 />
      <Box />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/welcome2" element={<Welcome2 />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/chooseplan" element={<ChoosePlan />} />
        <Route path="/buyplan" element={<BuyPlan />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/play" element={<PlayMovie />} />
        <Route path="/upload" element={<UploadMovie />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/free" element={<Free />} />
        <Route path="/freemovie" element={<Freemovie />} />
        <Route path="/cartoons" element={<Cartoons />} />
        <Route path="/paidcontent" element={<DummyCarousel />} />
      </Routes>
    </Router>
  );
};

export default App;