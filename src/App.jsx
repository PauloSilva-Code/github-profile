import GlobalStyle from "./assets/Global/globalStyles";
import Layout from "./components/Layout";
import Profile from "./components/Profile";

function App() {
  return (
    <main>
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starred</div>
      </Layout>
      <GlobalStyle />
    </main>
  );
}

export default App;
