import GlobalStyle from "./assets/Global/globalStyles";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import RepoList from "./components/RepoList";
import GitHubProvider from "./providers/github-provider";

function App() {
  return (
    <main>
      <GitHubProvider>
        <Layout>
          <Profile />
          <RepoList />
        </Layout>
        <GlobalStyle />
      </GitHubProvider>
    </main>
  );
}

export default App;
