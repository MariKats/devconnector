import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAccount } from "../../actions/profileActions";

export class ProfileActions extends Component {
  static propTypes = {
    deleteAccount: PropTypes.func.isRequired
  };

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    return (
      <div className="mb-4 mt-4 d-flex justify-content-center align-items-center text-align">
        <Link
          to="/edit-profile"
          className="btn btn-outline-info btn-block mr-2 d-flex align-items-center justify-content-center"
        >
          <i className="fas fa-user-circle mr-2" />Edit Profile
        </Link>
        <Link
          to="/add-experience"
          className="btn btn-outline-info btn-block mr-2 d-flex align-items-center justify-content-center"
        >
          <i className="fab fa-black-tie mr-2" />
          Add Experience
        </Link>
        <Link
          to="/add-education"
          className="btn btn-outline-info btn-block mr-2 d-flex align-items-center justify-content-center"
        >
          <i className="fas fa-graduation-cap mr-2" />
          Add Education
        </Link>
        <button
          onClick={this.onDeleteClick.bind(this)}
          className="btn btn-outline-danger btn-block d-flex align-items-center justify-content-center"
        >
          <i className="fas fa-times-circle mr-2" />
          Delete Account
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = { deleteAccount };

export default connect(
  null,
  mapDispatchToProps
)(ProfileActions);
