import CommentBox from "../../Components/CommentBox";

const COMMENTS = [
  {
    id: 1,
    author: "John Doe",
    comment: "This is a comment.",
    replies: [
      {
        id: 2,
        author: "Jane Doe",
        comment: "This is a reply.",
        replies: [
          {
            id: 3,
            author: "Alice",
            comment: "This is a reply to Jane.",
            replies: [
              {
                id: 5,
                author: "Charlie",
                comment: "This is a reply to Alice.",
                replies: [],
              },
              {
                id: 6,
                author: "David",
                comment: "This is another reply to Alice.",
                replies: [
                  {
                    id: 7,
                    author: "Eve",
                    comment: "This is a reply to David.",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            author: "Bob",
            comment: "This is another reply to Jane.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    author: "Alice",
    comment: "This is another comment.",
    replies: [
      {
        id: 4,
        author: "Bob",
        comment: "This is a reply to Alice.",
        replies: [],
      },
    ],
  },
  {
    id: 5,
    author: "Charlie",
    comment: "This is yet another comment.",
    replies: [
      {
        id: 6,
        author: "David",
        comment: "This is a reply to Charlie.",
        replies: [],
      },
    ],
  },
];

const NestedComments = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">Nested Comments</h1>

      <CommentBox comments={COMMENTS} />
    </div>
  );
};

export default NestedComments;
