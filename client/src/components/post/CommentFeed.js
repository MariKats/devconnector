import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentItem from "./CommentItem";

export default class CommentFeed extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired
  };

  render() {
    const { comments, postId } = this.props;
    return (
      <div>
        {comments.length > 0 ? (
          <h1 className="heading-primary">Comments</h1>
        ) : null}
        {comments.map(comment => (
          <CommentItem key={comment._id} comment={comment} postId={postId} />
        ))}
      </div>
    );
  }
}
