import React from "react";
import "./Banner.css";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerBg from "../../Image/banner-terrace.jpeg";
import banner2 from "../../Image/Banner2.jpeg";
export function Banner() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded.load",
  });
  React.useEffect(() => {
    //parallax scrolling for the banner image
    gsap.to(".banner", {
      backgroundPositionY: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".banner",
        start: "top",
        end: "bottom 30%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <ErrorBoundary>
      <section className="banner">
        <div class="cloud"></div>
        {/* <img src={bannerBg} role="presentation" className="banner-img" /> */}
      </section>
      <h1 className="end">jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>

      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
      <h1>jjjjjjjjj</h1>
    </ErrorBoundary>
  );
}
