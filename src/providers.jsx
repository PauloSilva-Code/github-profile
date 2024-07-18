import App from "./App";
import GlobalStyle from "./assets/Global/globalStyles";
import GitHubProvider from "./providers/github-provider";

const Providers = () => {
  return (
    <main>
      <GitHubProvider>
        <App />
        <GlobalStyle />
      </GitHubProvider>
    </main>
  );
};

export default Providers;
