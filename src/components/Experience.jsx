/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import Confetti from "react-confetti";
import { useEffect } from "react";

import { navLinks } from "../constants";


const ExperienceCard = ({ experience, isLast }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    // Kích hoạt hiệu ứng pháo hoa sau 2 giây khi component render
    if (isLast) {
      const timer = setTimeout(() => {
        setShowConfetti(true);
      }, 3000);

      // Xóa timer khi component unmount để tránh memory leak
      return () => clearTimeout(timer);
    }
  }, [isLast]);

  return (
    <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.step}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.title}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      {/* <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.role}
      </p> */}
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => {
        const isSignUpLink = point.includes("tại đây");
        const isRuleLink = point.includes("Hệ thống và Cách chơi");
        const isContactLink = point.includes("Liên hệ");

        if (isSignUpLink) {
          return (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              <span>{point.replace("tại đây", "")}</span>
              <Link to="/signup">
                <a className="text-orange-500 hover:text-orange-700 font-semibold">
                  tại đây
                </a>
              </Link>
            </li>
          );
        } else if (isRuleLink) {
          return (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              <Link to="/login">
              <span>{point.replace("Hệ thống và Cách chơi", "")}</span>
                <a className="text-orange-500 hover:text-orange-700 font-semibold">
                  Hệ thống và Cách chơi
                </a>
              </Link>
            </li>
          );
        } else if (isContactLink) {
          return (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              <Link to="/#contact">
              <span>{point.replace("Liên hệ", "")}</span>
                <a className="text-orange-500 hover:text-orange-700 font-semibold">
                  Liên hệ
                </a>
              </Link>
            </li>
          );
        }  else {
          return (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          );
        }
      })}
    </ul>
    {isLast && showConfetti && (
        // Hiển thị hiệu ứng pháo hoa nếu là mục cuối cùng và showConfetti = true
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
  </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Những điều bạn cần biết</p>
        <h2 className={styles.sectionHeadText}>Hướng dẫn chi tiết</h2>
      </motion.div>

      {/* <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div> */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              isLast={index === experiences.length - 1} // Truyền vào isLast cho mục cuối cùng
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
