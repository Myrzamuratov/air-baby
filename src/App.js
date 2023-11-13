import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ChangeLang from "./components/ChangeLang/ChangeLang";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <ChangeLang />
      <Footer />
    </>
  );
};

export default App;
