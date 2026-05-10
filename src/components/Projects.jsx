import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaChevronLeft, 
  FaChevronRight,
  FaRocket
} from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { PROJECTS } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="projects-section-proper" id="projects">
      <div className="projects-container-proper">
        <motion.div 
          className="projects-header-proper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="header-top-row">
            <div className="title-group">
              <span className="badge-luxury">Selected Works</span>
              <h2 className="projects-title-proper">Production <span className="gradient-text">Systems</span></h2>
            </div>
            <div className="carousel-controls-proper">
              <button ref={prevRef} className="control-btn-proper" aria-label="Previous Project"><FaChevronLeft /></button>
              <button ref={nextRef} className="control-btn-proper" aria-label="Next Project"><FaChevronRight /></button>
            </div>
          </div>
        </motion.div>

        <div className="projects-slider-wrapper-proper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 }
            }}
            className="projects-swiper-proper"
          >
            {PROJECTS.map((project, index) => (
              <SwiperSlide key={project.title}>
                <div className="project-card-proper">
                  <div className="project-media-top">
                    <img 
                      src={project.image.startsWith('http') || project.image.startsWith('/') ? project.image : '/profile.jpg'} 
                      alt={project.title} 
                      className="project-img-proper"
                    />
                    <div className="project-badge-overlay">
                      <span className="category-tag">{project.category}</span>
                      <div className={`status-tag ${project.comingSoon ? 'dev' : 'live'}`}>
                        <span className="status-dot"></span>
                        {project.comingSoon ? 'DEV_MODE' : 'OPERATIONAL'}
                      </div>
                    </div>
                  </div>

                  <div className="project-info-middle">
                    <h3 className="project-name-proper">{project.title}</h3>
                    <p className="project-desc-proper">{project.description}</p>
                    
                    <div className="project-tech-tags">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="tech-tag-proper">{tag}</span>
                      ))}
                      {project.tags.length > 3 && <span className="tech-tag-more">+{project.tags.length - 3}</span>}
                    </div>
                  </div>

                  <div className="project-footer-bottom">
                    {project.comingSoon ? (
                      <div className="btn-locked-proper">
                        <span>ACCESS_RESTRICTED</span>
                      </div>
                    ) : (
                      <div className="btn-group-proper">
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-action-proper primary">
                          <span>Launch</span>
                          <FaExternalLinkAlt />
                        </a>
                        <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn-action-proper secondary">
                          <FaGithub />
                          <span>Code</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
