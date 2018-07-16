import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  };

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center center">
                <h1 className="display-3 mb-2 heading-primary">
                  Developer Connector
                </h1>
                <p className="landing-lead lead">
                  {" "}
                  Create your profile, share posts, and get help from others
                </p>
                <hr />
                <Link
                  to="/register"
                  className="btn btn-landing btn-outline-light mr-5 mt-4"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="btn btn-landing btn-outline-light mt-4"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
