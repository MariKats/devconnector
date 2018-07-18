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
          className="btn btn-outline-info btn-block mr-2"
        >
          <i className="fas fa-user-circle mr-1" />Edit Profile
        </Link>
        <Link
          to="/add-experience"
          className="btn btn-outline-info btn-block mr-2"
        >
          <i className="fab fa-black-tie mr-1" />
          Add Experience
        </Link>
        <Link
          to="/add-education"
          className="btn btn-outline-info btn-block mr-2"
        >
          <i className="fas fa-graduation-cap mr-1" />
          Add Education
        </Link>
        <button
          onClick={this.onDeleteClick.bind(this)}
          className="btn btn-outline-danger btn-block"
        >
          <i className="fas fa-times-circle mr-1" />
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
