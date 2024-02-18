import { Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import NavBar from "./components/NavBar";
import Home from "./pages/Home3";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Register";
import UpdatePassword from "./pages/UpdatePassword";
import Home2 from "./pages/Home2";
import MainPage from "./pages/MainPage";
import AudioPage from "./pages/AudioPage";
import VivaPage from "./pages/VivaPage";
import TextPage from "./pages/TextPage";
import SummaryPage from "./pages/SummaryPage";
import ChatHistory from "./pages/ChatHistory";
import "./index.css";
const App = () => {
  return (
    <>
      <NavBar />
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/audio" element={<AudioPage />} />
            <Route path="/viva" element={<VivaPage />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/text" element={<TextPage />} />
            <Route path="/chathistory" element={<ChatHistory />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/update-password" element={<UpdatePassword />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainPage from "./pages/MainPage";
// import Home from "./pages/Home";
// import TextPage from "./pages/TextPage";
// import AudioPage from "./pages/AudioPage";
// import Navbar from "./components/Navbarog";
// import VivaPage from "./pages/VivaPage";
// import SummaryPage from "./pages/SummaryPage";
// import AuthenticatedWrapper from "./AuthenticatedWrapper"; // adjust the import path as needed
// import PreMain from "./pages/PreMain";
// import Audiopage2 from "./pages/Audiopage2";
// import Home2 from "./pages/Home2";
// import McqPage from "./pages/McqPage";
// import UrlPage from "./pages/UrlPage";
// import ChatHistory from "./pages/ChatHistory";
// import { ProtectedRoute } from "./ProtectedRoute";
// import { AuthProvider } from "./AuthContext";
// const App = () => {
//   return (
//     <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
//       <BrowserRouter>
//         <Navbar />
//         <AuthProvider>
//           <Routes>
//             <Route
//               path="/main"
//               element={
//                 <ProtectedRoute>
//                   <MainPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/text"
//               element={
//                 <ProtectedRoute>
//                   <TextPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/audio"
//               element={
//                 <ProtectedRoute>
//                   <AudioPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/viva"
//               element={
//                 <ProtectedRoute>
//                   <VivaPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/summary"
//               element={
//                 <ProtectedRoute>
//                   <SummaryPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/premain"
//               element={
//                 <ProtectedRoute>
//                   <PreMain />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/audio2"
//               element={
//                 <ProtectedRoute>
//                   <Audiopage2 />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/home2"
//               element={
//                 <ProtectedRoute>
//                   <Home2 />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/mcq"
//               element={
//                 <ProtectedRoute>
//                   <McqPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/url"
//               element={
//                 <ProtectedRoute>
//                   <UrlPage />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/chathistory"
//               element={
//                 <ProtectedRoute>
//                   <ChatHistory />{" "}
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         </AuthProvider>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
