import React, { lazy, Suspense } from 'react';
import "./App.css";
import "./App.scss";
import { Route, Routes, Switch } from "react-router-dom";
import Layout from './Components/Common/Layout';
import Loader from './Components/Common/Loader';

const Home = lazy(() => import('./Components/home'));
const About = lazy(() => import("./Components/about"))
const Categories = lazy(() => import("./Components/categories"));
const LatestReport = lazy(() => import("./Components/latestReports"))
const Services = lazy(() => import("./Components/services"))
const ContactUs = lazy(() => import("./Components/contactUs"))
const Career = lazy(() => import("./Components/career"))

function App() {

  const RoutNavigation = (
    <Suspense fallback={<div><Loader ersize="large" isContent={true} /></div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="aboutUs" element={<About />} />
        <Route exact path="categories" element={<Categories />} />
        <Route exact path="latestReports" element={<LatestReport />} />
        <Route exact path="services" element={<Services />} />
        <Route exact path="contactUs" element={<ContactUs />} />
        <Route exact path="career" element={<Career />} />
      </Routes>
    </Suspense>
  )
  return (
    <>
      <Layout>
        {/* <Loader ersize="large" isContent={true} /> */}
        {RoutNavigation}
      </Layout>
    </>
  );
}

export default App;
