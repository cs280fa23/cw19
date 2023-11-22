import { users, posts } from "@/lib/data";
import type { User, PostWithUserData, Post } from "./types";
import { nanoid } from "nanoid";
import { getAuthenticatedUser } from "./auth";

// Mock database
const db = {
  users: [...users],
  posts: [...posts],
};

// Helper function to find a user by ID
export const findUser = async (id: string): Promise<User | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = db.users.find((user) => user.id === id);
      resolve(user);
    }, 200); // Simulate an API delay
  });
};

// Fetch all posts with user data
export const fetchPosts = async (): Promise<PostWithUserData[]> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const sortedPosts = db.posts.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      );
      const postsWithUserData = await Promise.all(
        sortedPosts.map(async (post) => ({
          ...post,
          user: await findUser(post.userId),
        })),
      );
      resolve(postsWithUserData);
    }, 200); // Simulate an API delay
  });
};

// Delete post by id
export const deletePost = async (id: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      db.posts = db.posts.filter((post) => post.id !== id);
      resolve();
    }, 200); // Simulate an API delay
  });
};

// Create a post
export const createPost = async (
  content: string,
  image?: string,
): Promise<Post> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = getAuthenticatedUser();
      const newPost: Post = {
        id: nanoid(),
        userId: user.id,
        content,
        image,
        timestamp: new Date().toISOString(),
        likeCount: 0,
        commentCount: 0,
      };
      db.posts.push(newPost);
      resolve(newPost);
    }, 200); // Simulate an API delay
  });
};
