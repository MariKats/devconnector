import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment } from "../../actions/postActions";

export class CommentItem extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired
  };

  onDeleteClick(postId, id) {
    this.props.deleteComment(postId, id);
  }

  render() {
    const { comment, auth, postId } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2 d-flex justify-content-center align-items-center border-right">
            <Link to={`/profiles/${comment.user}`}>
              <img
                className="rounded-circle rounded-circle-profile d-none d-md-block"
                src={comment.avatar}
                alt=""
              />
            </Link>
          </div>
          <div className="col-md-10 d-flex flex-column">
            <span className="heading-primary text-info ml-2">
              {comment.name} says:{" "}
            </span>
            <p className="lead mt-2 ml-2">{comment.text}</p>
            {comment.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                type="button"
                className="btn btn-danger ml-auto"
              >
                <i className="fas fa-times" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = { deleteComment };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentItem);
