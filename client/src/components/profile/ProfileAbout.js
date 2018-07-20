import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;
    const firstName = profile.user.name.trim().split(" ")[0];
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-2">
        <i className="fa fa-check mr-1" />
        {skill}
      </div>
    ));

    const bio = isEmpty(profile.bio) ? null : (
      <div>
        <h3 className="text-center text-info heading-primary heading-primary-profile">
          {firstName + "'s Bio"}
        </h3>
        <div className="row">
          <p className="lead text-center ml-4 mr-4">{profile.bio}</p>
        </div>
        <hr />
      </div>
    );

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            {bio}
            <h3 className="text-center text-info heading-primary heading-primary-profile">
              Skill Set
            </h3>
            <div className="d-flex flex-wrap justify-content-around align-items-center ml-2 mr-2">
              {skills}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileAbout;
