import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";
import Experience from "./Experience";
import Education from "./Education";

export class Dashboard extends Component {
  static propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted heading-primary text-center">
              Welcome,{" "}
              <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
            <ProfileActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div className="d-flex justify-content-center align-items-center flex-column">
            <p className="lead text-muted heading-primary text-center">
              Welcome, {<span style={{ color: "orangered" }}>{user.name}</span>}
            </p>
            <p className="text-center">
              You have not yet created a profile, please add some info now
            </p>
            <Link
              to="/create-profile"
              className="btn btn-large btn-outline-info mt-2"
            >
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 heading-primary heading-primary-profile text-center mt-5">
                Dashboard
              </h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

const mapDispatchToProps = { getCurrentProfile };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
