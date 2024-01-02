import React from "react";
import Navigation from "./header/Navigation";
import Bannerrecipe from "./banner/Bannerrecipe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about/About";
import Contact from "./contact/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Register from "./auth/register/Register";
import Recipesmenu from "./recipes/Recipesmenu";
import Footer from "./footer/Footer";
import Accessibility from "./policy/Accessibility";
import Privacy from "./policy/Privacy";
import Terms from "./policy/Terms";


const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>

          <Navigation />
          <Routes>
            <Route path="/" elemtent={<Navigation />} />
            <Route index element={<Bannerrecipe />} />
            <Route path="home" element={<Bannerrecipe />} />
            <Route path="about" element={<About />} />
            <Route path="recipes" element={<Recipesmenu />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
            <Route path="accessibility" element={<Accessibility/>} />
            <Route path="privacy" element={<Privacy/>} />
            <Route path="terms" element={<Terms/>} />
          </Routes>
          <Footer/>
          {/* <Login/> */}

        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
