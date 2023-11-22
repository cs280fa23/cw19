import { fetchPosts } from "@/lib/api";
import { useStore } from "@/lib/store";
import { useEffect } from "react";

function useQueryPosts() {
  const posts = useStore((state) => state.posts);
  const setPosts = useStore((state) => state.setPosts);

  const loadPosts = async () => {
    const fetchedPosts = await fetchPosts();
    setPosts(fetchedPosts);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return { posts };
}

export default useQueryPosts;
