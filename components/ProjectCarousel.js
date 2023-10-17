import React from 'react';
import { Image } from "@nextui-org/react";
// import Flickity from 'react-flickity-component';
// import "flickity/css/flickity.css";
import projects from '@/data/projects';
import ProjectCard from './ProjectDisplayCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ProjectCarousel = ({ projects, ...props }) => {
  return (
    <Swiper
      // spaceBetween={10}
      slidesPerView={4}
      centeredSlides={true}
      loop
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {projects.map((project, index) => (
        <SwiperSlide
          key={index}
        >
          <ProjectCard
            project={project}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProjectCarousel