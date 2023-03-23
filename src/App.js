import "./App.css";
import Header from "./component/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/patient/Home";
import ModalSignIn from "./component/modal/SignIn";
import ModalSignUp from "./component/modal/SignUp";
import DetailArticle from "./pages/patient/DetailArticle";
import ReservationPage from "./pages/patient/ReservationPage";
import Inbox from "./pages/patient/Inbox";
import ProfilePatient from "./pages/patient/ProfilePatient";
import ProfileDoctor from "./pages/doctor/ProfileDoctor";
import AddArticle from "./pages/doctor/AddArticle";
import ReservationData from "./pages/doctor/ReservationData";
import InboxAccept from "./pages/patient/InboxAccept";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient/profile" element={<ProfilePatient />} />
        <Route path="/doctor/profile" element={<ProfileDoctor />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/inbox-done" element={<InboxAccept />} />
        <Route path="/sign-in" element={<ModalSignIn />} />
        <Route path="/sign-up" element={<ModalSignUp />} />
        <Route path="/detail-article" element={<DetailArticle />} />
        <Route path="/patient/reservation" element={<ReservationPage />} />
        <Route path="/doctor" element={<ReservationData />} />
      </Routes>
    </>
  );
}

export default App;
