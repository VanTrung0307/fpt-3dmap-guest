/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  isSupervisor,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className={`p-10 bg-black-200 rounded-3xl xs:w-[320px] w-full ${
      isSupervisor ? "text-[#FFB347]" : "text-white"
    }`}
  >
    <p className="font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="font-medium text-[16px]">
            <span className={`${ isSupervisor ? "orange-text-gradient" : "blue-text-gradient"}`}>@</span> {name}
          </p>
          <p className={`mt-1 text-[12px] ${ isSupervisor ? "text-[#fcd194]" : "blue-text-gradient"}`}>
            {designation} của {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const supervisorTestimonial = testimonials[0];

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Những người đóng góp</p>
          <h2 className={styles.sectionHeadText}>Thông tin cơ bản</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            isSupervisor={testimonial === supervisorTestimonial}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
