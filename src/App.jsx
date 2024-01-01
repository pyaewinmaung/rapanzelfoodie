import React from "react";
import Navigation from "./header/Navigation";
import Bannerrecipe from "./banner/Bannerrecipe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about/About";
import Contact from "./contact/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./footer/footer";
import Register from "./auth/register/Register";
import Recipesmenu from "./recipes/Recipesmenu";


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
          </Routes>
          <Footer />
          {/* <Login/> */}

        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
