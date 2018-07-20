import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

export default class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    const firstName = profile.user.name.trim().split(" ")[0];

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-10 d-flex flex-column align-items-center justify-content-center">
            <div className="mb-2 mt-3">
              <img
                className="rounded-circle rounded-circle-profile"
                src={profile.user.avatar}
                alt=""
              />
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="heading-primary heading-primary-profile">
                {firstName}
              </h3>
              {profile.status}
              {isEmpty(profile.company) ? null : ", at " + profile.company}
              {isEmpty(profile.location) ? null : <p> {profile.location}</p>}
              <Link
                to={`/profile/${profile.handle}`}
                className="btn btn-outline-info btn-block"
              >
                View Profile
              </Link>
            </div>
          </div>
          <div className="col d-none d-md-block ">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li className="list-group-item" key={index}>
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};
