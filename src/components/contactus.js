
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <div className="jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:support@ilovedogs.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="support@ilovedogs.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
  
       
            <div className="m-2">
              <a href="https://medium.com/@ilovedogskz" target="_blank" rel="noopener noreferrer">
                <Button id="medium-btn" variant="outline-info" title="Lets write together!">
                <i className="fab fa-youtube"></i> Medium
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;