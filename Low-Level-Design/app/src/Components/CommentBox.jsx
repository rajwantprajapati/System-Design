import { MessageCircleMore } from "lucide-react";

const CommentBox = ({ comments }) => {
  return (
    <div className="ml-4">
      <div className="flex flex-col gap-3">
        {comments.map((comment) => {
          const { author, comment: replyComment, replies, id } = comment;
          return (
            <div className="border-l" key={id}>
              <div className="flex flex-row gap-2 pl-2">
                <img
                  className="w-6 h-6 rounded-full mt-1"
                  src="https://www.redditstatic.com/avatars/avatar_default_02_FF4500.png"
                  alt="user-img"
                />

                <div>
                  <p className="font-bold">{author}</p>
                  <p>{replyComment}</p>
                  <p className="flex items-center gap-2 pb-1">
                    <MessageCircleMore size="16" />
                    <span className="italic">{replies.length} replies</span>
                  </p>
                </div>
              </div>
              <div>
                <CommentBox comments={replies} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentBox;
