import React from 'react';
import { Button, Row, Col, Card, Space, Typography, Image, Tabs } from 'antd';
import bg from '../../image/hero-bg-light.webp'; 
import service from '../../image/hero-services-img.webp';
import './index.css';
import { EyeOutlined, RightOutlined, BoxPlotOutlined, SunOutlined } from '@ant-design/icons';
import TabPane from 'antd/es/tabs/TabPane';
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
                Get Started
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
      
      {/* Featured Services Section */}
      <section id="featured-services" className="featured-services section light-background">
        <div className="container">
          <Row gutter={[16, 16]} justify="center">
            <Col xl={8} lg={12} xs={24} data-aos="fade-up" data-aos-delay="100">
              <Card className="service-item d-flex" title="Lorem Ipsum">
                <div className="icon"><i className="bi bi-briefcase"></i></div>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </Card>
            </Col>

            <Col xl={8} lg={12} xs={24} data-aos="fade-up" data-aos-delay="200">
              <Card className="service-item d-flex" title="Dolor Sitema">
                <div className="icon"><i className="bi bi-card-checklist"></i></div>
                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa</p>
              </Card>
            </Col>

            <Col xl={8} lg={12} xs={24} data-aos="fade-up" data-aos-delay="300">
              <Card className="service-item d-flex" title="Sed ut perspiciatis">
                <div className="icon"><i className="bi bi-bar-chart"></i></div>
                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
              </Card>
            </Col>
          </Row>
        </div>
      </section>





      <section id="about" className="about section">
      <div className="container">
        <Row gutter={[16, 16]}>
          {/* Left Section */}
          <Col lg={12} data-aos="fade-up" data-aos-delay="100">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <p className="who-we-are">Who We Are</p>
              <Title level={3}>Unleashing Potential with Creative Strategy</Title>
              <Paragraph italic>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </Paragraph>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
              </ul>
              <Button type="link" href="#" icon={<RightOutlined />} className="read-more">
                Read More
              </Button>
            </Space>
          </Col>

          {/* Right Section (Images) */}
          <Col lg={12} data-aos="fade-up" data-aos-delay="200">
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <img src="assets/img/about-company-1.jpg" className="img-fluid" alt="Company 1" />
              </Col>
              <Col span={12}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <img src="assets/img/about-company-2.jpg" className="img-fluid" alt="Company 2" />
                  </Col>
                  <Col span={24}>
                    <img src="assets/img/about-company-3.jpg" className="img-fluid" alt="Company 3" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>


   
    <section id="clients" className="clients section">
      <div className="container" data-aos="fade-up">
        <Row gutter={[16, 16]}>
          <Col xl={2} md={3} sm={6} className="client-logo">
            <Image src="assets/img/clients/client-1.png" alt="Client 1" className="img-fluid" />
          </Col>
          <Col xl={2} md={3} sm={6} className="client-logo">
            <Image src="assets/img/clients/client-2.png" alt="Client 2" className="img-fluid" />
          </Col>
          <Col xl={2} md={3} sm={6} className="client-logo">
            <Image src="assets/img/clients/client-3.png" alt="Client 3" className="img-fluid" />
          </Col>
          <Col xl={2} md={3} sm={6} className="client-logo">
            <Image src="assets/img/clients/client-4.png" alt="Client 4" className="img-fluid" />
          </Col>
          <Col xl={2} md={3} sm={6} className="client-logo">
            <Image src="assets/img/clients/client-5.png" alt="Client 5" className="img-fluid" />
          </Col>
          <Col xl={2} md={3} sm={6} className="client-logo">
            <Image src="assets/img/clients/client-6.png" alt="Client 6" className="img-fluid" />
          </Col>
        </Row>
      </div>
    </section>



    <section id="features" className="features section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <Row justify="space-between">
          <Col lg={5} className="d-flex align-items-center">
            <Tabs defaultActiveKey="1" data-aos="fade-up" data-aos-delay="100">
              <TabPane
                tab={
                  <span>
                    <EyeOutlined />
                    <h4>Modi sit est dela pireda nest</h4>
                  </span>
                }
                key="1"
              >
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </p>
              </TabPane>

              <TabPane
                tab={
                  <span>
                    < BoxPlotOutlined/>
                    <h4>Unde praesenti mara setra le</h4>
                  </span>
                }
                key="2"
              >
                <p>
                  Recusandae atque nihil. Delectus vitae non similique magnam molestiae sapiente similique tenetur aut voluptates sed voluptas ipsum voluptas
                </p>
              </TabPane>

              <TabPane
                tab={
                  <span>
                    <SunOutlined />
                    <h4>Pariatur explica nitro dela</h4>
                  </span>
                }
                key="3"
              >
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Debitis nulla est maxime voluptas dolor aut
                </p>
              </TabPane>
            </Tabs>
          </Col>

          <Col lg={6}>
            <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
              <div className="tab-pane fade active show" id="features-tab-1">
                <Image src="assets/img/tabs-1.jpg" alt="Feature 1" className="img-fluid" />
              </div>
              <div className="tab-pane fade" id="features-tab-2">
                <Image src="assets/img/tabs-2.jpg" alt="Feature 2" className="img-fluid" />
              </div>
              <div className="tab-pane fade" id="features-tab-3">
                <Image src="assets/img/tabs-3.jpg" alt="Feature 3" className="img-fluid" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>




    <section id="features-details" className="features-details section">
      <div className="container">
        <Row gutter={[16, 16]} justify="space-between">
          <Col lg={6} data-aos="fade-up" data-aos-delay="100">
            <Image src="assets/img/features-1.jpg" alt="Feature 1" className="img-fluid" />
          </Col>
          <Col lg={5} className="d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>Corporis temporibus maiores provident</h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <Button type="primary">Learn More</Button>
            </div>
          </Col>
        </Row>

        <Row gutter={[16, 16]} justify="space-between" className="features-item">
          <Col lg={5} className="d-flex align-items-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
            <div className="content">
              <h3>Neque ipsum omnis sapiente quod quia dicta</h3>
              <p>
                Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena plasico mares
              </p>
              <ul>
                <li><i className="bi bi-easel flex-shrink-0"></i> Et corporis ea eveniet ducimus.</li>
                <li><i className="bi bi-patch-check flex-shrink-0"></i> Exercitationem dolorem sapiente.</li>
                <li><i className="bi bi-brightness-high flex-shrink-0"></i> Veniam quia modi magnam.</li>
              </ul>
              <Button type="primary">Learn More</Button>
            </div>
          </Col>
          <Col lg={6} className="order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
            <Image src="assets/img/features-2.jpg" alt="Feature 2" className="img-fluid" />
          </Col>
        </Row>
      </div>
    </section>

      



     
      
    </>
  );
};

export default Home;
