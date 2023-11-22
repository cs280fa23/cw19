import { Post, PostWithUserData } from "./types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { getAuthenticatedUser } from "./auth";

type State = {
  posts: PostWithUserData[];
  // Add more state variables
};

type Action = {
  setPosts: (posts: PostWithUserData[]) => void;
  removePost: (id: string) => void;
  addPost: (post: Post) => void;
  // Add more actions
};

// define the initial state
const initialState: State = {
  posts: [],
};

export const useStore = create<State & Action>()(
  immer((set, get) => ({
    ...initialState,

    setPosts: (posts) => set({ posts }),

    removePost: (id) => {
      const newPosts = get().posts.filter((post) => post.id !== id);
      set({ posts: newPosts });
    },

    addPost: (post) => {
      const user = getAuthenticatedUser();
      const newPost: PostWithUserData = {
        ...post,
        user,
      };
      const newPosts = [newPost, ...get().posts];
      set({ posts: newPosts });
    },
  })),
);
