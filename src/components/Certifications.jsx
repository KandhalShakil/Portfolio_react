import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { 
  FaCertificate, 
  FaExternalLinkAlt, 
  FaChevronLeft, 
  FaChevronRight,
  FaShieldAlt
} from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { CERTIFICATIONS } from '../data/portfolioData';
import './Certifications.css';

const Certifications = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="certs-section-proper" id="certifications">
      <div className="certs-container-proper">
        <motion.div 
          className="certs-header-proper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="header-top-row">
            <div className="title-group">
              <span className="badge-luxury">Professional Credentials</span>
              <h2 className="certs-title-proper">Verified <span className="gradient-text">Excellence</span></h2>
            </div>
            <div className="carousel-controls-proper">
              <button ref={prevRef} className="control-btn-proper" aria-label="Previous Certificate"><FaChevronLeft /></button>
              <button ref={nextRef} className="control-btn-proper" aria-label="Next Certificate"><FaChevronRight /></button>
            </div>
          </div>
        </motion.div>

        <div className="certs-slider-wrapper-proper">
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
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 }
            }}
            className="certs-swiper-proper"
          >
            {CERTIFICATIONS.map((cert, index) => (
              <SwiperSlide key={cert.name}>
                <div className="cert-card-proper">
                  <div className="cert-media-top">
                    <img src={cert.image} alt={cert.name} className="cert-img-proper" />
                    <div className="cert-badge-overlay">
                      <FaShieldAlt className="shield-icon" />
                      <span>SECURE_VERIFICATION</span>
                    </div>
                  </div>

                  <div className="cert-info-middle">
                    <div className="cert-meta-row">
                      <span className="platform-label">{cert.provider}</span>
                      <span className="issue-year">{cert.year}</span>
                    </div>
                    <h3 className="cert-title-proper">{cert.name}</h3>
                    <p className="cert-desc-short">Credential validation for specialized technical expertise and professional standards.</p>
                  </div>

                  <div className="cert-footer-bottom">
                    <div className="verification-status">
                      <div className="status-indicator-proper"></div>
                      <span>ID: {cert.credentialId?.substring(0, 12)}...</span>
                    </div>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-verify-proper"
                    >
                      <span>Verify</span>
                      <FaExternalLinkAlt />
                    </a>
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

export default Certifications;
