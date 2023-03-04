import React from "react";
import { Post } from "../../types/Post";
import { CommentList } from "../CommentList";
import { UserInfo } from "../UserInfo";

type PostProps = {
  post: Post;
};

export const PostInfo: React.FC<PostProps> = ({
  post
}) => {
  const { title, user, body, comments} = post;
  const isPostHaveComs = comments.length > 0;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {" Posted by  "}
          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      {
        isPostHaveComs ? (
          <CommentList comments={comments} />
        ) : (
          <b data-cy="NoCommentsMessage">No comments yet</b>
        )
      }
    </div>
  );
};
