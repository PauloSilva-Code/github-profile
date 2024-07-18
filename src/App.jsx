import Layout from "./components/Layout";
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
        <p>Busque um usuário</p>
      )}
    </Layout>
  );
}

export default App;
