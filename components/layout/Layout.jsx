import React from "react";
import Footer from "./components/footer/Footer";
import TopBar from "./components/topbar/TopBar";

export default function Layout({ children }) {
  return (
    <div className="main-page">
      <TopBar />
      {children}
      <Footer />
    </div>
  );
}
