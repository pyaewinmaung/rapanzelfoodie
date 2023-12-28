import React from "react";
import Navigation from "./header/Navigation";
import Bannerrecipe from "./banner/Bannerrecipe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about/About";
import Contact from "./contact/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./footer/footer";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Navigation />
          <Routes>
            <Route path="/" elemtent={<Navigation/>}/>
            <Route index element={<Bannerrecipe />} />
            <Route path="home" element={<Bannerrecipe />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
