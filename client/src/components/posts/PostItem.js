import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { deletePost, addLike, removeLike } from "../../actions/postActions";

export class PostItem extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired
  };

  static defaultProps = {
    showActions: true
  };

  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    return likes.filter(like => like.user === auth.user.id).length > 0
      ? true
      : false;
  }

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2 d-flex justify-content-center align-items-center border-right">
            <Link to={`/profiles`}>
              <img
                className="rounded-circle rounded-circle-profile d-none d-md-block"
                src={post.avatar}
                alt=""
              />
            </Link>
          </div>
          <div className="col-md-10 d-flex flex-column">
            <span className="heading-primary text-info ml-2">
              {post.name} says:{" "}
            </span>
            <p className="lead mt-2 ml-2">{post.text}</p>
            {showActions ? (
              <div className="button-group mt-auto ml-auto">
                <button
                  onClick={this.onLikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-2 border"
                >
                  <i
                    className={classnames("fas fa-thumbs-up text-secondary", {
                      "text-info": this.findUserLike(post.likes)
                    })}
                  />
                  {post.likes.length === 0 ? null : (
                    <span className="badge badge-light ml-2 border">
                      {post.likes.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={this.onUnlikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-2 border"
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                  Comments
                </Link>
                {post.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-danger mr-2"
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = {
  deletePost,
  addLike,
  removeLike
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
