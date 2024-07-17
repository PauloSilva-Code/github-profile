import { createContext, useState } from "react";

export const GitHubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

function GitHubProvider({ children }) {
  const [githubState, setGithubState] = useState({
    user: {
      login: undefined,
      name: undefined,
      publicUrl: undefined,
      blog: undefined,
      company: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const contextValue = { githubState, setGithubState };

  return (
    <GitHubProvider.Provider value={contextValue}>
      {children}
    </GitHubProvider.Provider>
  );
}

export default GitHubProvider;
