import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const experienceItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4 className="heading-primary">{exp.company}</h4>
        <p className="from-to">
          <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
          {isEmpty(exp.to) ? (
            "Present"
          ) : (
            <Moment format="DD/MM/YYYY">{exp.to}</Moment>
          )}
        </p>
        <hr />
        <p>
          <strong>Position:</strong> {exp.title}
        </p>
        {isEmpty(exp.location) ? null : (
          <p>
            <strong>Location: </strong> {exp.location}
          </p>
        )}
        {isEmpty(exp.description) ? null : (
          <p>
            <strong>Description: </strong> {exp.description}
          </p>
        )}
      </li>
    ));

    const educationItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4 className="heading-primary">{edu.school}</h4>
        <p className="from-to">
          <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
          {isEmpty(edu.to) ? (
            "Present"
          ) : (
            <Moment format="DD/MM/YYYY">{edu.to}</Moment>
          )}
        </p>
        <hr />
        <p>
          <strong>Degree:</strong> {edu.degree}
        </p>
        <p>
          <strong>Field Of Study: </strong> {edu.field}
        </p>
        {isEmpty(edu.description) ? null : (
          <p>
            <strong>Description: </strong> {edu.description}
          </p>
        )}
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info heading-primary-profile heading-primary">
            Experience
          </h3>
          {experienceItems.length > 0 ? (
            <ul className="list-group">{experienceItems}</ul>
          ) : (
            <p className="text-center">No experience listed for this profile</p>
          )}
        </div>
        <div className="col-md-6">
          <h3 className="text-center text-info heading-primary-profile heading-primary">
            Education
          </h3>
          {educationItems.length > 0 ? (
            <ul className="list-group">{educationItems}</ul>
          ) : (
            <p className="text-center">No education listed for this profile</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
