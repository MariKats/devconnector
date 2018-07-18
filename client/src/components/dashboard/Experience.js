import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import isEmpty from "../../validation/is-empty";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileActions";

class Experience extends Component {
  static propTypes = {
    deleteExperience: PropTypes.func.isRequired
  };

  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experiences = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td className="from-to">
          <Moment format="YYYY/MM/DD">{exp.from}</Moment>
        </td>
        <td className="from-to">
          {isEmpty(exp.to) ? (
            "Present"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-xs btn-danger"
          >
            &times;
          </button>
        </td>
      </tr>
    ));

    const experienceRendered =
      this.props.experience.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "25%" }} className="heading-primary">
                Company
              </th>
              <th style={{ width: "30%" }} className="heading-primary">
                Title
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
          <tbody>{experiences}</tbody>
        </table>
      ) : (
        <div>
          <hr />
          <p className="text-muted heading-primary">
            No experiences added so far. Please add your work experiences.
          </p>
          <hr />
        </div>
      );
    return (
      <div style={{ marginTop: "60px", marginBottom: "40px" }}>
        <h4 className="mb-2 heading-primary heading-primary-profile text-info">
          Experience Credentials
        </h4>
        {experienceRendered}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  deleteExperience
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Experience);
