import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

const Profile = () => {
  return (
    <Row>
      <Col>
        <div className="profile-page">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                rel="tooltip"
                title="Follow us on Twitter"
                data-placement="bottom"
                to="#"
              >
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                rel="tooltip"
                title="Like us on Facebook"
                data-placement="bottom"
                to="https://www.facebook.com/lima.hmd.39"
              >
                <i className="fab fa-facebook-square"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                rel="tooltip"
                title="Follow us on Instagram"
                data-placement="bottom"
                to="https://www.instagram.com/lamoush__/"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
          {/* <-- End Navbar -->*/}
          <div className="wrapper">
            <div className="page-header clear-filter">
              <div className="container">
                <div className="photo-container">
                  <img
                    src="https://images.unsplash.com/photo-1549669944-ca3e8b576248?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    alt=""
                  />
                </div>
                <h3 className="title">Laura Egan</h3>
                <p className="category">Менеджер</p>
                <div className="content">
                  <div className="social-description">
                    <h2>6999</h2>
                    <p>Балы</p>
                  </div>
                  <div className="social-description">
                    <h2>15</h2>
                    <p>Торговые точки</p>
                  </div>
                  <div className="social-description">
                    <h2>2</h2>
                    <p>Категория</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Profile;
