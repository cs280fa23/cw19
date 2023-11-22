import { User } from "./types";

// Hardcoded authenticated user data for Edsger Dijkstra
const authenticatedUser: User = {
  id: "u1",
  userName: "edsger",
  displayName: "Edsger Dijkstra",
  avatar: "edsger-dijkstra.webp",
};

export const getAuthenticatedUser = (): User => {
  // For now, this simply returns the hardcoded user.
  // In the future, this can be replaced with actual authentication logic.
  return authenticatedUser;
};
