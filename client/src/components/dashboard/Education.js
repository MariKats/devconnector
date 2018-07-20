import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import isEmpty from "../../validation/is-empty";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileActions";

export class Education extends Component {
  static propTypes = {
    deleteEducation: PropTypes.func.isRequired
  };

  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td className="from-to">
          <Moment format="DD/MM/YYYY">{edu.from}</Moment>
        </td>
        <td className="from-to">
          {isEmpty(edu.to) ? (
            "Present"
          ) : (
            <Moment format="DD/MM/YYYY">{edu.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, edu._id)}
            className="btn btn-xs btn-danger"
          >
            &times;
          </button>
        </td>
      </tr>
    ));

    const educationRendered =
      this.props.education.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "25%" }} className="heading-primary">
                School
              </th>
              <th style={{ width: "30%" }} className="heading-primary">
                Degree
              </th>
              <th style={{ width: "20%" }} className="heading-primary">
                From
              </th>
              <th style={{ width: "20%" }} className="heading-primary">
                To
              </th>
              <th />
            </tr>
          </thead>
          <tbody>{education}</tbody>
        </table>
      ) : (
        <div>
          <hr />
          <p className="text-muted heading-primary">
            No education added so far. Please add your education.
          </p>
          <hr />
        </div>
      );
    return (
      <div style={{ marginBottom: "60px" }}>
        <h4 className="mb-2 heading-primary heading-primary-profile text-info">
          Education Credentials
        </h4>
        {educationRendered}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  deleteEducation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Education);
