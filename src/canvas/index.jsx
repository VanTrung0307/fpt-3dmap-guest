/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  Timeline,
} from "./../components";
import { useState } from "react";

const MainHome = () => {
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);

  const handleTimelineToggle = () => {
    setIsTimelineOpen(!isTimelineOpen);
  };

  const handleCloseTimeline = () => {
    setIsTimelineOpen(false);
  };

  const [showTopButton, setShowTopButton] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const scrollTop = timelineRef.current.scrollTop;
        setShowTopButton(scrollTop > 0);
      }
    };

    if (timelineRef.current) {
      timelineRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScrollToTop = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative z-0 bg-dark">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      {!isTimelineOpen && (
        <button
          className="button-29"
          onClick={handleTimelineToggle}
          role="button"
        >
          📆 Sự kiện
        </button>
      )}
      {isTimelineOpen && (
        <div className="timeline-container slide-out" ref={timelineRef}>
          <button className="timeline-close" onClick={handleCloseTimeline}>
            <span className="close-text">X</span>
          </button>
          <Timeline />
          {showTopButton && (
            <button className="top-button" onClick={handleScrollToTop}>
              🔼
            </button>
          )}
        </div>
      )}
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default MainHome;
