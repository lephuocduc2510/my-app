import React from 'react';
import { Button, Row, Col, Card, Space, Typography, Image, Tabs } from 'antd';
import bg from '../../image/hero-bg-light.webp';
import service from '../../image/hero-services-img.webp';
import './index.css';
import { EyeOutlined, RightOutlined, BoxPlotOutlined, SunOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;



const Home: React.FC = () => {
  return (
    <>
      <section id="hero" className="hero section">
        <div className="hero-bg">
          <img src={bg} alt="" />
        </div>
        <div className="container text-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 data-aos="fade-up">
              Welcome to <span>QuickStart</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              Quickly start your project now and set the stage for success
              <br />
            </p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              
              <Button type="primary" href="#about" className="btn-get-started">
                Get Started <RightOutlined />
              </Button>
              <Button
                type="link"
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </Button>
            </div>
            <img
              src={service}
              className="img-fluid hero-img"
              alt=""
              data-aos="zoom-out"
              data-aos-delay="300"
            />
          </div>
        </div>
      </section>

      <section id="featured-services" className="featured-services section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-briefcase"></i>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-card-checklist"></i>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">Dolor Sitema</a>
                  </h4>
                  <p className="description">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-bar-chart"></i>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">Sed ut perspiciatis</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
              <p className="who-we-are">Who We Are</p>
              <h3>Unleashing Potential with Creative Strategy</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
                </li>
              </ul>
              <a href="#" className="read-more">
                <span>Read More</span><i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <img src={require("../../image/testimonials/about-company-1.jpg")} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-lg-12">
                      <img src={require("../../image/testimonials/about-company-2.jpg")} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-12">
                      <img src={require("../../image/testimonials/about-company-3.jpg")} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section id="clients" className="clients section">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            {/* Import 6 ảnh từ thư mục clients */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="col-xl-2 col-md-3 col-6 client-logo">
                <img src={require(`../../image/clients/client-${index + 1}.png`)} className="img-fluid" alt={`Client ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>



      <section id="features" className="features section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 d-flex align-items-center">
              <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
                {[
                  { icon: "bi-binoculars", title: "Modi sit est dela pireda nest", text: "Ullamco laboris nisi ut aliquip..." },
                  { icon: "bi-box-seam", title: "Unde praesenti mara setra le", text: "Recusandae atque nihil. Delectus vitae..." },
                  { icon: "bi-brightness-high", title: "Pariatur explica nitro dela", text: "Excepteur sint occaecat cupidatat non..." },
                ].map((feature, index) => (
                  <li className="nav-item" key={index}>
                    <a className={`nav-link ${index === 0 ? "active show" : ""}`} data-bs-toggle="tab" data-bs-target={`#features-tab-${index + 1}`}>
                      <i className={`bi ${feature.icon}`}></i>
                      <div>
                        <h4 className="d-none d-lg-block">{feature.title}</h4>
                        <p>{feature.text}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className={`tab-pane fade ${index === 0 ? "active show" : ""}`} id={`features-tab-${index + 1}`}>
                    <img src={require(`../../image/tabs/tabs-${index + 1}.jpg`)} alt="" className="img-fluid" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="features-details" className="features-details section">
        <div className="container">
          {[
            {
              img: "features-1.jpg",
              title: "Corporis temporibus maiores provident",
              text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat...",
              order: [1, 2],
              buttonText: "Learn More",
            },
            {
              img: "features-2.jpg",
              title: "Neque ipsum omnis sapiente quod quia dicta",
              text: "Quidem qui dolore incidunt aut. In assumenda harum id...",
              order: [2, 1],
              buttonText: "Learn More",
              list: [
                { icon: "bi-easel", text: "Et corporis ea eveniet ducimus." },
                { icon: "bi-patch-check", text: "Exercitationem dolorem sapiente." },
                { icon: "bi-brightness-high", text: "Veniam quia modi magnam." },
              ],
            },
          ].map((feature, index) => (
            <div className="row gy-4 justify-content-between features-item" key={index}>
              <div className={`col-lg-6 order-${feature.order[0]}`} data-aos="fade-up" data-aos-delay="100">
                <img src={require(`../../image/features/${feature.img}`)} className="img-fluid" alt="" />
              </div>
              <div className={`col-lg-5 d-flex align-items-center order-${feature.order[1]}`} data-aos="fade-up" data-aos-delay="200">
                <div className="content">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  {feature.list && (
                    <ul>
                      {feature.list.map((item, idx) => (
                        <li key={idx}><i className={`bi ${item.icon} flex-shrink-0`}></i> {item.text}</li>
                      ))}
                    </ul>
                  )}
                  <a href="#" className="btn more-btn">{feature.buttonText}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>







    </>
  );
};

export default Home;
