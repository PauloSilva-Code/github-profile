import Layout from "./components/Layout";
import NoSearch from "./components/no-search";
import Profile from "./components/Profile";
import RepoList from "./components/RepoList";
import useGithub from "./hooks/github-hooks";

function App() {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          <Profile />
          <RepoList />
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;
