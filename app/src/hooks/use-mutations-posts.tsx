import { createPost, deletePost } from "@/lib/api";
import { useStore } from "@/lib/store";

function useMutationPosts() {
  const removePost = useStore((state) => state.removePost);
  const addPost = useStore((state) => state.addPost);

  const deletePostById = async (postId: string) => {
    await deletePost(postId);
    removePost(postId);
  };

  const addNewPost = async (content: string, image?: string) => {
    const newPost = await createPost(content, image);
    addPost(newPost);
  };

  return { deletePostById, addNewPost };
}

export default useMutationPosts;
