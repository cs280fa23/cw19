import type { Like, Post, User, Comment } from "./types";

export const users: User[] = [
  {
    id: "u1",
    userName: "edsger",
    displayName: "Edsger Dijkstra",
    avatar: "edsger-dijkstra.webp",
  },
  {
    id: "u2",
    userName: "donald",
    displayName: "Donald Knuth",
    avatar: "donald-knuth.webp",
  },
  {
    id: "u3",
    userName: "grace",
    displayName: "Grace Hopper",
    avatar: "grace-hopper.webp",
  },
];

export const posts: Post[] = [
  {
    id: "p1",
    userId: "u1",
    content: "Do only what only you can do.",
    timestamp: "2023-07-24T12:00:00Z",
    likeCount: 2,
    commentCount: 1,
  },
  {
    id: "p2",
    userId: "u1",
    content:
      "Elegance is not a dispensable luxury but a factor that decides between success and failure.",
    timestamp: "2023-07-23T12:00:00Z",
    likeCount: 1,
    commentCount: 2,
  },
  {
    id: "p3",
    userId: "u2",
    content:
      "Beware of bugs in the above code; I have only proved it correct, not tried it.",
    timestamp: "2023-07-22T12:00:00Z",
    likeCount: 1,
    commentCount: 0,
  },
  {
    id: "p4",
    userId: "u2",
    content:
      "Science is what we understand well enough to explain to a computer, Art is all the rest.",
    timestamp: "2023-07-21T12:00:00Z",
    likeCount: 2,
    commentCount: 1,
  },
  {
    id: "p5",
    userId: "u3",
    content:
      "The most damaging phrase in the language is: 'It's always been done this way.'",
    timestamp: "2023-07-20T12:00:00Z",
    likeCount: 2,
    commentCount: 1,
  },
  {
    id: "p6",
    userId: "u3",
    content:
      "To me programming is more than an important practical art. It is also a gigantic undertaking in the foundations of knowledge.",
    timestamp: "2023-07-19T12:00:00Z",
    likeCount: 1,
    commentCount: 1,
  },
];

export const likes: Like[] = [
  { id: "l1", postId: "p1", userId: "u2" },
  { id: "l2", postId: "p1", userId: "u3" },
  { id: "l3", postId: "p2", userId: "u3" },
  { id: "l4", postId: "p3", userId: "u1" },
  { id: "l5", postId: "p4", userId: "u1" },
  { id: "l6", postId: "p4", userId: "u3" },
  { id: "l7", postId: "p5", userId: "u1" },
  { id: "l8", postId: "p5", userId: "u2" },
  { id: "l9", postId: "p6", userId: "u2" },
];

export const comments: Comment[] = [
  {
    id: "c1",
    postId: "p1",
    userId: "u3",
    content: "This is a fantastic thought!",
    timestamp: "2023-07-25T12:00:00Z",
  },
  {
    id: "c2",
    postId: "p2",
    userId: "u2",
    content: "Absolutely agree.",
    timestamp: "2023-07-25T12:30:00Z",
  },
  {
    id: "c3",
    postId: "p2",
    userId: "u3",
    content: "Well said.",
    timestamp: "2023-07-25T12:45:00Z",
  },
  {
    id: "c4",
    postId: "p4",
    userId: "u1",
    content: "Absolutely correct.",
    timestamp: "2023-07-25T12:00:00Z",
  },
  {
    id: "c5",
    postId: "p5",
    userId: "u2",
    content: "This is a wonderful quote.",
    timestamp: "2023-07-25T12:30:00Z",
  },
  {
    id: "c6",
    postId: "p6",
    userId: "u1",
    content: "I totally agree.",
    timestamp: "2023-07-25T12:45:00Z",
  },
];
