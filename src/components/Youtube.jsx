/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import { SectionWrapper } from '../hoc';
import YouTube from 'react-youtube';

const Youtube = () => {
    const opts = {
        height: '400',
        width: '700',
      };
    return (
        <div className="pl-[150px]">
            <YouTube opts={opts} videoId="kNgZ4VMmXdo" /> {/* Use the YouTube video ID */}
            <span className="text-[#fff] ml-[200px]">Video hướng dẫn về Cách chơi & Hệ thống</span>
        </div>
    );
};
export default SectionWrapper(Youtube, "system");
