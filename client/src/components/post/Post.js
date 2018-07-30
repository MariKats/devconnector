import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import PostItem from "../posts/PostItem";
import { Link } from "react-router-dom";
import { getPost } from "../../actions/postActions";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";

export class Post extends Component {
  static propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
  };

  componentDidMount = () => {
    this.props.getPost(this.props.match.params.id);
  };

  render() {
    const { post, loading } = this.props.post;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
          <CommentFeed comments={post.comments} postId={post._id} />
        </div>
      );
    }

    return (
      <div className="mt-3 post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-outline-info btn-block mb-3">
                Back to Feed
              </Link>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = {
  getPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
