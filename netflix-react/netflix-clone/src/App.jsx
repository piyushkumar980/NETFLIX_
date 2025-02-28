import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import Content1 from "./components/content1";
import Box from "./components/box";
import SignIn from "./components/SignIn";
import Welcome from "./components/welcome";
import Welcome2 from "./components/welcome2";
import Verify from "./components/Verify";
import SignOut from "./components/signOut";
import ChoosePlan from "./components/choosePlan";
import BuyPlan from "./components/buyPlan";
import Confirm from "./components/confirm";
import Payment from "./components/payment";
import Plan from "./components/plan";
import Freemovie from "./components/Freemovie";
import Free from "./components/free";
import Cartoons from "./components/cartoons";
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